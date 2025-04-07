import Link from "next/link";

const ContactBox = ({ title, value, buttonText, buttonLink, buttonTarget }) => (
  <div className="flex flex-col w-full md:w-[32.22%] border border-Teal gap-4 4xl:gap-6 p-4 transition-all duration-500 ease-in-out">
    <h3 className="text-h4">{title}</h3>
    <div className="block text-sm break-words">
      <p>{value || "N/A"}</p>
    </div>
    {buttonText && buttonLink && (
      <Link href={buttonLink} target={buttonTarget} className="mt-auto">
        <button className="mt-auto flex self-start text-center text-base group-hover:bg-white group-hover:text-Teal bg-Teal text-white font-normal p-3 2xl:px-9 sm:py-4 transition-all duration-700 ease-in">
          {buttonText}
        </button>
      </Link>
    )}
  </div>
);

export default ContactBox;
