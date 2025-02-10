import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ main_title, all_leistungen }) => {
  const [counters, setCounters] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is section visible?", entry.isIntersecting);
        if (entry.isIntersecting) {
          setTimeout(() => setHasStarted(true), 500);
        } else {
          setHasStarted(false); 
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hasStarted && all_leistungen && all_leistungen.length > 0) {
      // Initialize counters with zeros
      setCounters(all_leistungen.map(() => 0));

      // Animate counters
      all_leistungen.forEach((item, index) => {
        const rawValue = item.ueber_all_leistungen_counter || "0";
        const isThousand = rawValue.toLowerCase().includes('k'); 
        const target = isThousand
          ? parseInt(rawValue.replace(/[^0-9]/g, ''), 10) * 1000 
          : parseInt(rawValue, 10); 

        let start = 0;
        const increment = Math.ceil(target / 200); 
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
        }, 20); 
      });
    }
  }, [hasStarted, all_leistungen]); 

  return (
    <section ref={sectionRef} className="py-10 md:py-[70px] lg:py-[100px] bg-Teal">
      <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[61px]">
        <div className="flex text-center items-center justify-center flex-col gap-6 sm:gap-8 flex-wrap text-white">
          <div className="flex pb-[25px] text-white relative after:absolute after:bottom-0 after:w-20 after:left-[40%] after:h-[2px] after:bg-white">
            <h2 className='text-white'>{main_title}</h2>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-8">
            {all_leistungen && all_leistungen !=undefined &&
              all_leistungen.map((item, index) => {
                const rawValue = item.ueber_all_leistungen_counter || "0";
                const isThousand = rawValue.toLowerCase().includes('k');
                let formattedValue;

                if (index === 0) {
                  console.log("counters" , counters)
                  if(counters.length !=0){
                  // For the first counter, add "+" prefix
                  formattedValue = `+${counters[index]}`;
                  }
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
