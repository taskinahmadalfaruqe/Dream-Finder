"use client"
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  ListboxItem,
} from "@nextui-org/react";
import "./jobDetails.css";
import { FaCheckSquare } from "react-icons/fa";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import CommonButton from "@/components/shared/CommonButton";



export default function jobDetailsPage() {

  return (
    
    <div className="container my-10 mb-40 p-5">
      <Card className="py-4">
        <CardHeader className="pb-0 md:py-10 md:px-10 lg:px-20 flex-col items-start ">
          <h3 className="text-xl md:text-2xl text-secondaryColor font-bold mb-5 text-center  mx-auto">
            EduTech Solution
          </h3>
          <div className=" flex items-center rounded-xl w-full jobDetailsBanner">
            <div className="uppercase py-20 grid justify-center font-bold w-full text-center rounded-xl">
              <h2 className="uppercase  text-2xl md:text-4xl text-whiteColor ">
                Join Us
              </h2>
              <h1 className="uppercase mt-1  text-2xl md:text-6xl  text-whiteColor">
                We'<span>re</span> <span className="text-primaryColor">Hiring!</span>
              </h1>
              <p className="text-whiteColor mt-3 text-xl md:text-2xl">
                position: Junior Web developer
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 cursor-pointer font-bold border-l border-b"></div>
        </CardHeader>
        <CardBody className="overflow-visible py-2 md:px-10 lg:px-20 ">
          <div>
            <h3 className="text-xl md:text-2xl text-darkColor font-bold mt-3">
              About This Job
            </h3>
            <p className="text-secondaryColor mt-1 text-justify">
              We are looking for enthusiastic and energetic individuals with an
              interest in a wide range of web software technologies and
              architectures. Applicants must have the mindset to get their hands
              dirty in writing code in front-end web technology stacks based on
              JavaScript as well as back-end integration. Work will range from
              solo projects to product features in sprints with remotely located
              team members.
            </p>
          </div>
          <div className="lg:flex lg:justify-between mt-5 lg:space-x-10">
            <div className="lg:flex-1">
              <div>
                <h3 className="text-2xl text-darkColor font-bold mt-3">
                  Requirements
                </h3>
                <div className="text-justify">
                  <p className="mt-5 space-x-2">
                    <FaCheckSquare
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                      }}
                    />
                    Understanding of front-end technologies, such as React.js,
                    Next.js, JavaScript, Typescript, HTML5, Bootstrap, and CSS3.
                  </p>
                  <p className="mt-4">
                    <FaCheckSquare
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                      }}
                    />
                    Backend web development experiences preferably Node.js Build
                    and maintain applications using MERN stack
                  </p>
                  <p className="mt-4">
                    <FaCheckSquare
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                      }}
                    />
                    Clear concept about API, Preferred RESTful API development
                    Analyze and design a relational database, preferably MySQL
                  </p>
                  <p className="mt-4">
                    <FaCheckSquare
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                      }}
                    />
                    Maintain cloud infrastructure and automated deployment of
                    our solutions in AWS
                  </p>
                  <p className="mt-4">
                    <FaCheckSquare
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                      }}
                    />
                    Maintain analytics tools and services, preferably Google
                    Analytics.
                  </p>
                  <p className="mt-4">
                    <FaCheckSquare
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                      }}
                    />
                    Documentation, Project plan, Solution Architecture, Design
                    document, version control using GIT, JIRA, Trello, Teams,
                    etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:flex-1 mt-10 lg:mt-0">
              <div className="lg:ml-10">
                <h3 className="text-xl text-darkColor font-bold mt-3">
                  Employment Status
                </h3>
                <p className="text-secondaryColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  Full Time
                </p>
                <p className="text-secondaryColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  Flexible Working Hours.
                </p>
              </div>

              <div className="lg:ml-10 mt-5">
                <h3 className="text-xl  text-darkColor font-bold mt-3">
                  Salary
                </h3>
                <p className="text-secondaryColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  Up to 60K BDT per month
                </p>
              </div>

              <div className="lg:ml-10 mt-5">
                <h3 className="text-xl  text-darkColor font-bold mt-3">
                  Educational Requirements
                </h3>
                <p className="text-secondaryColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  B.Sc or M.Sc in Computer Science or related subject from a
                  reputed university.
                </p>
              </div>

              <div className="lg:ml-10 mt-5">
                <h3 className="text-xl text-darkColor font-bold mt-3">
                  Job Location
                </h3>
                <p className="text-secondaryColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  Remote
                </p>
              </div>

              <div className="lg:ml-10 mt-5 flex gap-5">
                <div className="">
                  <h3 className="text-xl text-darkColor font-bold mt-3">
                    Vacancy
                  </h3>
                  <p className="text-secondaryColor mt-1 text-justify">
                    <VscDebugBreakpointDataUnverified
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                        fontSize: 28,
                      }}
                    />{" "}
                    5
                  </p>
                </div>
                <div className="">
                  <h3 className="text-xl text-darkColor font-bold mt-3">
                    Number Of Application
                  </h3>
                  <p className="text-secondaryColor mt-1 text-justify">
                    <VscDebugBreakpointDataUnverified
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                        fontSize: 28,
                      }}
                    />{" "}
                    150+ Applicants
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-48 mx-auto mt-10">
              <CommonButton buttonName="Apply Now" />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
