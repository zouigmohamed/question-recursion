import { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

import { IReactSubQuestion } from "../interfaces";

interface IPropsQuestion {
  reactQuestions: IReactSubQuestion;
}

const Question = ({ reactQuestions }: IPropsQuestion) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`border-2 border-slate-500 bg-slate-500 my-2  transition-all rounded-md transition-height duration-1000 ease-in-out ${
        isOpen ? "h-auto" : "h-16"
      }`}
    >
      <div className=" m-2 cursor-pointer p-[1px] rounded-sm  space-y-3">
        {reactQuestions && (
          <div className="flex items-start flex-col bg-emerald-100-700">
            <div className="flex w-full mx-auto items-center justify-between ">
              <h3 className="text-white font-semibold capitalize">
                question n: {reactQuestions.id} -*- {reactQuestions.question}
              </h3>
              <span
                onClick={toggleVisibility}
                className={` duration-700 ease-in-out transition-all transform text-3xl font-semibold rounded border-2 border-slate-200 text-white ${isOpen ? "-rotate-90 bg-blue-300" : "rotate-0"}`}
              >
                  <MdKeyboardDoubleArrowLeft  />
              </span>
            </div>
            <span
              className={` mt-2 duration-700 bg-red-100 rounded-md p-2 w-full mx-auto ${isOpen ? `scale-100` : `scale-0`}`}
            >
              {reactQuestions.answer}
            </span>
          </div>
        )}
      </div>
      {isOpen && reactQuestions.subQuestions && (
        <div key={reactQuestions.id}>
          {reactQuestions.subQuestions?.map((item) => (
            <>
              <Question reactQuestions={item} key={item.id} />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
