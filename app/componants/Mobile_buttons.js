import Link from 'next/link';
import React from 'react'
import HeaderDatas from '../until/HeaderData';

const Mobile_buttons = async () => {
  let Stick_button = null;
  try {
    Stick_button = await HeaderDatas("/acf-options");
  } catch (error) {
    console.error("Error fetching header data:", error);
  }

  return (
  
      <div className="mobile-sticky fixed bottom-0 left-0 w-full bg-red z-[99999] sm:hidden block">
        <div className="flex mobile-s-wrapper">
          {/* Call Button */}
          {
            Stick_button.sticky_call_button != "" ?
              <Link
                href={Stick_button.sticky_call_button.url}
                target={Stick_button.sticky_call_button.target}
                className="flex items-center justify-center gap-2 w-1/2 bg-Teal text-white m-call py-4 px-[36px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.33333 4C5.49238 4 4 5.49238 4 7.33333V40.6667C4 42.5076 5.49238 44 7.33333 44H40.6667C42.5076 44 44 42.5076 44 40.6667V7.33333C44 5.49238 42.5076 4 40.6667 4H7.33333ZM14.9309 9.41714L13.3279 10.4077L13.3311 10.4069C11.7415 11.389 10.7876 13.1985 10.8235 15.1614C10.9092 19.8271 13.4661 24.8969 18.4942 30.3708C23.5153 35.8351 28.2382 38.6958 32.663 38.953C34.5385 39.0626 36.2979 38.1137 37.2848 36.4643L38.2767 34.8068C39.2017 33.2604 38.8788 31.2007 37.5181 29.9871L34.796 27.5568C33.6272 26.5136 31.9753 26.3569 30.697 27.1686L27.3228 29.3153C25.5467 28.5475 23.9422 27.432 22.6039 26.0345C21.2038 24.5937 20.1924 23.0269 19.5699 21.3338L21.906217.6629C22.7471 16.3437 22.6645 14.5796 21.702 13.3028L19.4936 10.37C18.3845 8.89788 16.4311 8.48999 14.9309 9.41714Z"
                    fill="white"
                  ></path>
                </svg>
                <p className="text-[var(--white)]">{Stick_button.sticky_call_button.title}</p>
              </Link> : null
          }

          {
            Stick_button.sticky_mail_button != "" ?
              <Link

                href={Stick_button.sticky_mail_button.url}
                target={Stick_button.sticky_mail_button.target}
                className="flex items-center justify-center gap-2 w-1/2 bg-white text-Teal m-call m-bewer py-4 px-[36px]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M15.5833 18.7913H6.41665C3.66665 18.7913 1.83331 17.4163 1.83331 14.208V7.79134C1.83331 4.58301 3.66665 3.20801 6.41665 3.20801H15.5833C18.3333 3.20801 20.1666 4.58301 20.1666 7.79134V14.208C20.1666 17.4163 18.3333 18.7913 15.5833 18.7913Z"
                    stroke="#1a8281"
                    strokeWidth="1.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.5834 8.25L12.7142 10.5417C11.77 11.2933 10.2208 11.2933 9.27668 10.5417L6.41669 8.25"
                    stroke="#1a8281"
                    strokeWidth="1.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-Teal">{Stick_button.sticky_mail_button.title}</p>
              </Link> : null
          }
        </div>
      </div> 
  );
}

export default Mobile_buttons