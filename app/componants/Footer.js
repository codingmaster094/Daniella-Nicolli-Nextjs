import React from "react";
import Image from "next/image";
import LocationSvg from "../../public/images/location.svg";
import PhoneSvg from "../../public/images/phone.svg";
// import FaxSvg from "../../public/images/fax.svg";
import WhatsappSvg from "../../public/images/wtsapp.svg";
import MailSvg from "../../public/images/mail.svg";
import FacebookSvg from "../../public/images/face-book.svg";
import InstagramSvg from "../../public/images/Whiteinstgram.svg";
import Link from "next/link";

const Footer = ({ FooterData, menuData }) => {
  return (
    <footer className="bg-salte w-full">
      <div className="container mx-auto px-[15px] ">
        <div className="flex gap-6 lg:gap-8 2xl:gap-[90px] justify-between lg:flex-nowrap flex-wrap py-8 md:py-20">
          <div className="flex flex-col md:w-auto w-full gap-4">
            <h3>{FooterData?.kontakt_label}</h3>
            <ul className="[&>li]:flex [&>li]:justify-start [&>li]:items-start">
              <li>
                <span className="flex flex-shrink-0">
                  <Image
                    src={LocationSvg}
                    alt="location-svg"
                    className="mt-[5px]"
                  />
                </span>

                <div
                  dangerouslySetInnerHTML={{
                    __html: FooterData?.footer_address || "",
                  }}
                  className="w-full "
                />
              </li>
              <li>
                <span className="flex flex-shrink-0">
                  <Image src={PhoneSvg} alt="phone-svg" className="mt-[5px]" />
                </span>
                {FooterData?.footer_phone_number && (
                  <Link
                    href={FooterData?.footer_phone_number?.url}
                    target={FooterData?.footer_phone_number?.target}
                    aria-label="phone-link"
                    role="link"
                  >
                    {FooterData?.footer_phone_number?.title}
                  </Link>
                )}
              </li>
              <li>
                <span className="flex flex-shrink-0">
                  <Image
                    src={WhatsappSvg}
                    alt="whatsapp-svg"
                    className="mt-[5px] w-[18px] h-[18px]"
                  />
                </span>
                {FooterData?.footer_whatsapp_number && (
                  <Link
                    href={FooterData?.footer_whatsapp_number?.url}
                    target={FooterData?.footer_whatsapp_number?.target}
                    aria-label="phone-link"
                    role="link"
                  >
                    {FooterData?.footer_whatsapp_number?.title}
                  </Link>
                )}
              </li>
              {/* <li>
                <span className="flex flex-shrink-0">
                  <Image src={FaxSvg} alt="fax-svg" />
                </span>
                {FooterData?.footer_fax_number?.title}
              </li> */}
              <li>
                <span className="flex flex-shrink-0">
                  <Image src={MailSvg} alt="MailSvg" className="mt-[5px]" />
                </span>
                {FooterData?.footer_email_address && (
                  <Link
                    href={FooterData?.footer_email_address?.url}
                    target={FooterData?.footer_email_address?.target}
                    aria-label="email-link"
                    role="link"
                  >
                    {FooterData?.footer_email_address.title}
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-auto w-full gap-4 sm:gap-6">
            <h4>{FooterData?.footer_sprechzeiten_label}</h4>
            <ul
              className="time-menu "
              dangerouslySetInnerHTML={{
                __html: (FooterData?.footer_business_hours || "").replace(
                  /<\/?ul[^>]*>/g,
                  ""
                ),
              }}
            ></ul>
          </div>
          <div className="flex flex-col gap-4 md:w-auto w-full sm:gap-6">
            <h4>{FooterData?.footer_navigation_label}</h4>
            <ul>
              {menuData?.menu?.map((item) => {
                item.slug = item.slug === "home" ? "/" : item.slug;
                return (
                  <li key={item.id}>
                    <Link
                      href={`/${item.slug}`}
                      aria-label="footer-link"
                      role="link"
                    >
                      {item.title === "Home" ? "start" : item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:w-auto w-full sm:gap-6">
            <h4>{FooterData?.footer_rechtliches_label}</h4>
            <ul>
              <li>
                <Link href="/impressum" aria-label="footer-link" role="link">
                  Impressum{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutzerklarung"
                  aria-label="footer-link"
                  role="link"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
            <ul className="flex flex-row [&_li]:w-[38px] [&_li]:h-[38px] [&_li]:bg-Teal [&_li]:rounded-full [&_li]:items-center [&_li]:justify-center [&_li]:p-2">
              <li className="flex items-center justify-center">
                {FooterData?.footer_facebook_link && (
                  <Link
                    href={FooterData?.footer_facebook_link?.url}
                    target={FooterData?.footer_facebook_link?.target}
                    aria-label="facebook-link"
                    role="link"
                    className="inline-block "
                  >
                    <Image src={FacebookSvg} alt="facebook-svg" />
                  </Link>
                )}
              </li>
              <li className="flex items-center justify-center">
                {FooterData?.footer_instagram_link && (
                  <Link
                    href={FooterData?.footer_instagram_link?.url}
                    target={FooterData?.footer_instagram_link?.target}
                    aria-label="Instagram-link"
                    role="link"
                    className="inline-block "
                  >
                    <Image src={InstagramSvg} alt="instgram-svg" />
                  </Link>
                )}
              </li>
            </ul>
            <ul className="flex flex-row ">
              {FooterData?.footer_all_logos?.map((val, index) => (
                <li
                  className="flex w-[100px] h-[100px] overflow-hidden"
                  key={index}
                >
                  {val.footer_all_logo_url ? (
                    <Link
                      href={val.footer_all_logo_url?.url}
                      target={val.footer_all_logo_url?.target}
                      aria-label="image-link"
                      role="link"
                    >
                      <Image
                        src={val.footer_all_logo}
                        width={150}
                        height={150}
                        alt="GVPimg"
                        className="object-cover rounded-[10px]"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={val.footer_all_logo}
                      width={150}
                      height={150}
                      alt="GVPimg"
                      className="object-cover rounded-[10px]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center bg-Teal p-[15px] text-white"
        dangerouslySetInnerHTML={{
          __html: FooterData?.footer_copyright_content || "",
        }}
      ></div>
    </footer>
  );
};

export default Footer;
