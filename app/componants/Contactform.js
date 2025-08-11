"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Phone from "../../public/images/greenphone.svg";
import Email from "../../public/images/greenmail.svg";
import location from "../../public/images/greenlocation.svg";
import Twitter from "../../public/images/Twitter.svg";
import facebook from "../../public/images/facebook.svg";
import Instagram from "../../public/images/instagram.svg";
import Chat from "../../public/images/message.svg";
import axios from "axios";
import Link from "next/link";

import Fahne from "../../public/images/Fahne.webp";
import Key from "../../public/images/Key.webp";
import Tree from "../../public/images/Tree.webp";
import airoplain from "../../public/images/airoplain.svg";
import heart from "../../public/images/heart.svg";
import home from "../../public/images/home.svg";
import star from "../../public/images/star.svg";
import tea from "../../public/images/tea.svg";
import truck from "../../public/images/truck.svg";

const iconData = [
  { value: "Herz", label: " den  Herz", image: heart },
  { value: "Tasse", label: " den  Tasse", image: tea },
  { value: "Stern", label: " den  Stern", image: star },
  { value: "LKW", label: " den  LKW", image: truck },
  { value: "Schlüssel", label: " den  Schlüssel", image: Key },
  { value: "Haus", label: " den  Haus", image: home },
  { value: "Flugzeug", label: " den  Flugzeug", image: airoplain },
  { value: "Baum", label: " den  Baum", image: Tree },
  { value: "Fahne", label: " den  Fahne", image: Fahne },
];

const getRandomItems = (array, count) => {
  let shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const LoadingDots = () => {
  return (
    <section className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </section>
  );
};
const Contactform = ({
  main_title,
  content,
  live_chat_with_us,
  form_address,
}) => {
  const [ContactOptionData, setContactOptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
    selectedIcon: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [Success, setSuccess] = useState(null);
  const [correctAnswer, setcorrectAnswer] = useState(null);
  const [randomIcons, setRandomIcons] = useState([]);
  const [randomLabel, setRandomLabel] = useState("");

  useEffect(() => {
    const selectedIcons = getRandomItems(iconData, 3);
    setRandomIcons(selectedIcons);

    // Pick the label from one of the selected icons as the correct answer
    const randomLabelItem =
      selectedIcons[Math.floor(Math.random() * selectedIcons.length)];
    setRandomLabel(randomLabelItem.label);
    setcorrectAnswer(randomLabelItem.label);
    setLoading(false);
  }, []);

  const fetchContactOptionData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_HEADER_BASE_URL}/acf-options`
      );
      setContactOptionData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name ist erforderlich";
    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-Mail ist ungültig";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Telefon ist erforderlich";
    } else if (!/^[+\d\s()-]+$/.test(formData.telephone)) {
      newErrors.telephone =
        "Das Telefon darf nur gültige Zeichen enthalten (z. B. +, -, (, ))";
    }
    if (!formData.message.trim())
      newErrors.message = "Nachricht ist erforderlich";
    if (formData.selectedIcon !== correctAnswer) {
      newErrors.selectedIcon = "Bitte wählen Sie das richtige Symbol aus.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_SENDER_MAIL ||
            "https://formspree.io/f/xqabzpzn",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              telephone: formData.telephone,
              message: formData.message,
              // selectedIcon: formData.selectedIcon,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          setSuccess("Nachricht erfolgreich gesendet");

          // Reset form
          setFormData({
            name: "",
            email: "",
            telephone: "",
            message: "",
            selectedIcon: "",
          });
          setErrors({});
        } else {
          setErrorMessage(
            `Nachricht konnte nicht gesendet werden: ${
              result?.message || "Unbekannter Fehler"
            }`
          );
        }
      } catch (error) {
        setErrorMessage(`Ein Fehler ist aufgetreten: ${error.message}`);
      }
    } else {
      console.log("Validation failed");
    }
  };
  

  useEffect(() => {
    fetchContactOptionData();
  }, []);

  return (
    <section className="pb-[30px] md:pb-[40px] lg:pb-[50px] w-full">
      <div className="container mx-auto px-[15px]">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mx-auto p-0 sm:p-4 md:p-6 lg:p-[50px]">
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 dangerouslySetInnerHTML={{ __html: main_title }}></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: content
                  ?.replace(/<p>/g, "")
                  .replace(/<\/p>/g, "")
                  .replace(/&amp;/g, "&"),
              }}
            ></p>
          </div>
          <div className="flex justify-between gap-6 flex-col lg:flex-row">
            <div className="flex flex-col w-full lg:w-[60%]">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="input-group flex flex-wrap gap-4">
                  <div className="input-box w-full">
                    <label htmlFor="name" className="hidden">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="* Name"
                      className="border w-full border-Teal outline-none px-6 py-4 placeholder:text-black-900"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                    )}
                  </div>
                  <div className="input-box flex-auto sm:flex-1">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="* E-Mail"
                      className="border w-full placeholder:text-black-900 border-Teal outline-none px-6 py-4"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="input-box flex-auto sm:flex-1">
                    <label htmlFor="telephone" className="hidden">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      placeholder="* Telefon"
                      className="border placeholder:text-black-900 w-full border-Teal outline-none px-6 py-4"
                      value={formData.telephone}
                      onChange={handleInputChange}
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.telephone}
                      </p>
                    )}
                  </div>
                  <div className="input-box w-full">
                    <label htmlFor="message" className="hidden">
                      Ihre Nachricht
                    </label>
                    <textarea
                      name="message"
                      placeholder="* Ihre Nachricht"
                      className="border placeholder:text-black-900 w-full border-Teal outline-none px-6 py-4 resize-none h-[110px]"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>  
                    )}
                  </div>
                  <div className="text-a w-full">
                    <p className="Im-section">
                      Informationen zum Datenschutz bzgl. Ihrer Anfrage finden
                      Sie hier:{" "}
                      <Link  href="/datenschutzerklarung">
                        Datenschutzerklärung.
                      </Link>
                    </p>
                  </div>
                  <p>
                    Sind Sie ein Mensch? Dann wählen Sie bitte
                    <strong>{randomLabel}</strong>.
                  </p>
                </div>
                <div className="input-box w-full">
                  <div className="flex items-center gap-4 mt-2">
                    {loading ? (
                      <LoadingDots />
                    ) : (
                      randomIcons.map((icon, i) => {
                        return (
                          <label key={i} className="cursor-pointer">
                            <input
                              type="radio"
                              name="selectedIcon"
                              value={icon.label}
                              checked={formData.selectedIcon === icon.label}
                              onChange={handleInputChange}
                              className="hidden peer"
                            />
                            <div className="p-1 peer-checked:border-2 peer-checked:border-orange-500">
                              <Image
                                src={icon.image}
                                alt={icon.label}
                                width={25}
                                height={25}
                              />
                            </div>
                          </label>
                        );
                      })
                    )}
                  </div>

                  {errors.selectedIcon && (
                    <p className="text-red-500 text-sm mt-2 ">
                      {errors.selectedIcon}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex self-start justify-center mt-6 md:mt-8 lg:mt-12 bg-white border border-Teal text-Teal hover:bg-Teal hover:text-white font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in w-full"
                  aria-label="link-button"
                  role="button"
                >
                  NACHRICHT SENDEN
                </button>
              </form>
              {Success && (
                <div className="success-message">
                  <p className="text-green-700 py-4">
                    Ihre Nachricht wurde erfolgreich gesendet!
                  </p>
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div>
                  <p className="text-red-700">{errorMessage}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full lg:w-[30%] gap-6 sm:gap-8">
              <div className="flex flex-col gap-6 [div&_a]:text-black-900 text-body xm:text-a font-medium">
                <div className="flex gap-2 xm:gap-5 ">
                  <span className="flex flex-shrink-0">
                    {Phone && <Image src={Phone} alt="phone-svg" />}
                  </span>
                  {ContactOptionData?.footer_phone_number && (
                    <Link 
                      href={ContactOptionData?.footer_phone_number?.url}
                      role="link"
                      aria-label="address-link"
                      target={ContactOptionData?.footer_phone_number?.target}
                    >
                      {ContactOptionData?.footer_phone_number?.title}
                    </Link>
                  )}
                </div>
                <div className="flex gap-2 xm:gap-5">
                  <span className="flex flex-shrink-0">
                    <Image src={Email} alt="email-svg" />
                  </span>
                  {ContactOptionData?.footer_email_address && (
                    <Link 
                      href={ContactOptionData?.footer_email_address?.url}
                      target={ContactOptionData?.footer_email_address?.target}
                      role="link"
                      aria-label="address-link"
                    >
                      {ContactOptionData?.footer_email_address?.title}
                    </Link>
                  )}
                </div>
                <div className="flex gap-2 xm:gap-5">
                  <span className="flex flex-shrink-0">
                    <Image src={Chat} alt="chat-svg" />
                  </span>
                  {live_chat_with_us && (
                    <Link 
                      href={live_chat_with_us?.url}
                      target={live_chat_with_us?.target}
                      role="link"
                      aria-label="address-link"
                    >
                      {live_chat_with_us?.title}
                    </Link>
                  )}
                </div>
                <div className="flex gap-2 xm:gap-5">
                  <span className="flex flex-shrink-0">
                    <Image src={location} alt="location-svg" />
                  </span>
                  {form_address && (
                    <Link 
                      href={form_address?.url}
                      target={form_address?.target}
                      role="link"
                      aria-label="address-link"
                    >
                      <span>{form_address?.title}</span>
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                {ContactOptionData?.footer_facebook_link && (
                  <Link 
                    href={ContactOptionData?.footer_facebook_link?.url}
                    target={ContactOptionData?.footer_facebook_link?.target}
                    className="inline-flex w-8 h-8 items-center justify-center border border-Teal rounded-[3px]"
                    aria-label="image-button"
                    role="link"
                  >
                    <Image src={facebook} alt="facebook" />
                  </Link>
                )}
                {ContactOptionData?.footer_twitter_link && (
                  <Link
                    href={ContactOptionData?.footer_twitter_link?.url}
                    target={ContactOptionData?.footer_twitter_link?.target}
                    className="inline-flex w-8 h-8 items-center justify-center border border-Teal rounded-[3px]"
                    aria-label="image-button"
                    role="link"
                  >
                    <Image src={Twitter} alt="Twitter" />
                  </Link>
                )}
                {ContactOptionData?.footer_instagram_link && (
                  <Link
                    href={ContactOptionData?.footer_instagram_link?.url}
                    target={ContactOptionData?.footer_instagram_link?.target}
                    className="inline-flex w-8 h-8 items-center justify-center border border-Teal rounded-[3px]"
                    aria-label="image-button"
                    role="link"
                  >
                    <Image src={Instagram} alt="Instagram" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
