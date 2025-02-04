import React, { useEffect, useState } from 'react';

const Counter = ({ main_title, all_leistungen }) => {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    if (all_leistungen && all_leistungen.length > 0) {
      // Initialize counters with zeros
      setCounters(all_leistungen.map(() => 0));

      // Animate counters
      all_leistungen.forEach((item, index) => {
        const rawValue = item.ueber_all_leistungen_counter;
        const isThousand = rawValue.toLowerCase().includes('k'); // Check for 'k' in the string
        const target = isThousand
          ? parseInt(rawValue.replace(/[^0-9]/g, ''), 10) * 1000 // Remove non-numeric characters and multiply by 1000
          : parseInt(rawValue, 10); // If no 'k', just parse the number

        let start = 0;
        const increment = Math.ceil(target / 200); // Adjust speed as needed
        const interval = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(interval);
          }
          setCounters((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
        }, 20); // Adjust interval time as needed
      });
    }
  }, [all_leistungen]);

  return (
    <section className="py-10 md:py-[70px] lg:py-[100px] bg-Teal">
      <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[61px]">
        <div className="flex text-center items-center justify-center flex-col gap-6 sm:gap-8 flex-wrap text-white">
          <div className="flex pb-[25px] text-white relative after:absolute after:bottom-0 after:w-20 after:left-[40%] after:h-[2px] after:bg-white">
            <h2 className='text-white'>{main_title}</h2>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-8">
            {all_leistungen &&
              all_leistungen.map((item, index) => {
                const rawValue = item.ueber_all_leistungen_counter;
                const isThousand = rawValue.toLowerCase().includes('k');
                let formattedValue;

                if (index === 0) {
                  // For the first counter, add "+" prefix
                  formattedValue = `+${counters[index]}`;
                } else if (isThousand) {
                  // For counters that need the "k" suffix (if the value is in thousands)
                  formattedValue = counters[index] >= 1000
                    ? `${Math.floor(counters[index] / 1000)}k` // Use Math.floor to avoid decimals
                    : counters[index];
                } else {
                  // Default case for other counters
                  formattedValue = counters[index];
                }

                return (
                  <div
                    key={index}
                    className="text-center gap-6 flex flex-col font-primry-font"
                  >
                    <span className="text-5xl font-bold counter">{formattedValue}</span>
                    <p
                      className="mt-2 text-a"
                      dangerouslySetInnerHTML={{
                        __html: item.ueber_all_leistungen_content
                          ?.replace(/<p>/g, '')
                          .replace(/<\/p>/g, '')
                          .replace(/&amp;/g, '&'),
                      }}
                    ></p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;