// app/api/emaildata/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, telephone, message } = await req.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // This will ignore self-signed certificates
    },
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
