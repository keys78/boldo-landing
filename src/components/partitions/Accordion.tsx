import { useState } from "react";
import accord_img from "../../assets/png/accord_img.png";
import Caretdown from "../../assets/svg/Caretdown";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "We connect our customers with the best?",
      answer:
        "Yes We do, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, omnis!",
    },
    {
      question: "Android research & development rockstar?",
      answer: "Yes We do, Everything in development.",
    },
  ];

  return (
    <div>
      <div className="w-full">
        <img src={accord_img} alt="" className="w-full" />
      </div>
      <div className="flex items-start space-x-64 justify-between w-full mt-[56px]">
        <div className="max-w-[493px] flex flex-col space-y-5">
          <h3 className="text-[36px] manrope mb-10">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
        </div>
        <div className="w-full">
          {questions.map((item, index) => (
            <div key={index} className="border-b mb-6 pb-4">
              <div
                className="flex space-x-4 items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="font-semibold">{item.question}</p>
                <span>
                  <Caretdown
                    className={`transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
              {openIndex === index && <p className="mt-2">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
