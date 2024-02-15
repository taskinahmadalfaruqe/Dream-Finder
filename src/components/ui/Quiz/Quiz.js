"use client";
import React, { useRef, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import "./quiz.css";

import { data } from "@/utils/QuizQuestions";
import { newData } from "@/utils/Quize";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [categoryIndex, setCategoryIndex] = useState(0);
  const [questions, setQuestions] = useState(
    newData[categoryIndex].questions[index]
  );
  const [lock, setLock] = useState(false);
  const [correctAns, setCorrectAns] = useState(0);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const options = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (questions.ans == ans) {
        e.target.classList.add("right");
        setLock(true);
        setCorrectAns(correctAns + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        options[questions.ans - 1].current.classList.add("right");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      setIndex(++index);
      setQuestions(newData[categoryIndex].questions[index]);
      setLock(false);
      options.map((option) => {
        option.current.classList.remove("right");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };
  console.log(newData[categoryIndex].questions.length);

  if (index == newData[categoryIndex].questions.length) {
    return (
      <div className="flex justify-center items-center h-screen">
       <div>
       <Card className="w-[400px] rounded-md">
          <CardBody>
            <p className="text-center text-2xl">You Have Got <span className={`text-3xl  ${correctAns === 0 ? "text-redColor": "text-primaryColor"}`}>{correctAns}</span> Out Of <span className="text-primaryColor text-3xl">5</span></p>
          </CardBody>
        </Card>
       </div>
      </div>
    );
  }

  return (
    <>
      {
        <div className="flex py-10 container">
          <div className="w-3/12 border-2 border-lightPrimaryColor rounded-md  rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none">
            <ul className="block mt-14 text-center">
              {newData?.map((data, idx) => (
                <li
                  onClick={() => {
                    setIndex(0)
                    setQuestions(newData[categoryIndex].questions[index]);
                    setCategoryIndex(idx);
                    setLock(false)
                    setCorrectAns(0)
                    
                    options.map((option) => {
                      option.current.classList.remove("right");
                      option.current.classList.remove("wrong");
                      return null;
                    });
                  }}
                  className={`p-3 cursor-pointer border-b-2 py-4 ${
                    categoryIndex == idx &&
                    "bg-lightPrimaryColor text-whiteColor font-semibold"
                  }`}
                  key={data.category}
                >
                  {data?.category}
                </li>
              ))}
            </ul>
          </div>

          <div className="quiz w-9/12  flex justify-center items-center">
            <Card className="max-w-[600px]  min-w-[600px] rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none px-5 border-2 border-lightPrimaryColor">
              <CardHeader className="flex gap-3"></CardHeader>
              {/* <Divider style={{ border: "1px solid #00BE63" }} /> */}
              <CardBody className="px-0 my-5">
                <p className="text-xl font-semibold mt-3">
                  {index + 1}. {questions.question}
                </p>
                <ul className="block">
                  <li
                    ref={option1}
                    onClick={(e) => checkAns(e, 1)}
                    className="h-14 border border-secondaryColor rounded-md pl-5 flex items-center mb-5 mt-5 text-lg cursor-pointer hover:bg-gradient-to-l from-whiteColor to-primaryColor hover:text-whiteColor"
                  >
                    {questions.option1}
                  </li>
                  <li
                    ref={option2}
                    onClick={(e) => checkAns(e, 2)}
                    className="h-14 border border-secondaryColor rounded-md pl-5 flex items-center mb-5 text-lg cursor-pointer hover:bg-gradient-to-l from-whiteColor to-primaryColor hover:text-whiteColor"
                  >
                    {questions.option2}
                  </li>
                  <li
                    ref={option3}
                    onClick={(e) => checkAns(e, 3)}
                    className="h-14 border border-secondaryColor rounded-md pl-5 flex items-center mb-5 text-lg cursor-pointer hover:bg-gradient-to-l from-whiteColor to-primaryColor hover:text-whiteColor"
                  >
                    {questions.option3}
                  </li>
                  <li
                    ref={option4}
                    onClick={(e) => checkAns(e, 4)}
                    className="h-14 border border-secondaryColor rounded-md pl-5 flex items-center mb-5 text-lg cursor-pointer hover:bg-gradient-to-l from-whiteColor to-primaryColor hover:text-whiteColor"
                  >
                    {questions.option4}
                  </li>
                </ul>
                <div className="flex justify-end">
                  <button
                    onClick={next}
                    disabled={lock ? false : true}
                    className={` h-14 text-whiteColor font-semibold w-28 rounded-md ${
                      lock ? "bg-primaryColor" : "bg-lightSkyBlue"
                    }`}
                  >
                    NEXT
                  </button>
                </div>
              </CardBody>
              {/* <Divider style={{border:"1px solid #00BE63"}} /> */}
              <CardFooter>
                <p>{index + 1} No Question out of 5</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      }
    </>
  );
};

export default Quiz;
