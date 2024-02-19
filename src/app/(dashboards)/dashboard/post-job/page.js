"use client";

import CommonButton from "@/components/shared/CommonButton";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Page = () => {
  const [isPartTime, setIsPartTime] = useState(false);
  const [isFullTime, setIsFullTime] = useState(false);
  const [isHybrid, setIsHybrid] = useState(false);
  const [isRemote, setIsRemote] = useState(false);
  const [isOnSite, setIsOnSite] = useState(false);
  const [category, setCategory] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [formErr, setFormErr] = useState("");
  const [requirements, setRequirements] = useState([
    "requirements 1",
    "requirements 2",
    "requirements 3",
  ]);

  const handleAddRequirement = () => {
    const totalRequirements = requirements.length;
    setRequirements([...requirements, `requirements ${totalRequirements + 1}`]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // validation
    if (!isFullTime && !isPartTime) {
      setFormErr("please select job type");
      return;
    } else if (!isOnSite && !isRemote && !isHybrid) {
      setFormErr("please select job location");
      return;
    } else {
      setFormErr("");
    }
    const form = e.target;
    const formData = {
      category,
      description: jobDescription,
      educationalRequirements: form["educational requirements"].value,
      requirements: requirements.map(rqm => form[`${rqm}`].value),
      type: [
        isFullTime ? "Full Time" : "",
        isPartTime ? "Part Time" : "",
        isHybrid ? "hybrid" : "",
      ],
      jobLocation: [isOnSite ? "On Site" : "", isRemote ? "Remote" : ""],
      location: form["job location"]?.value ? form["job location"]?.value : "",
      minSalary: form["min salary"].value / 1,
      maxSalary: form["max salary"].value / 1,
      posted_date: new Date().toISOString().slice(0, 10),
      posted_time: new Date().toLocaleTimeString(),
      appliedCount: 0,
      company_logo:
        "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600",
      company_name: "TechHub Solutions",
      viewCount: 40,
    };
    console.log(formData);
  };
  return (
    <div className="min-h-screen ">
      <div className="">
        <SectionHeading
          heading="Post Job"
          subHeading="post your available job here"
        />
        <div className=" max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
          {formErr && <p className=" text-red-600 py-4">{formErr}</p>}
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-wrap space-y-2 mb-6 ">
              <div className="w-full px-3">
                <p>Job category</p>
              </div>
              <div className="w-full px-3">
                <Select
                  isRequired
                  items={categories}
                  label="Select Job Category."
                  placeholder="Select an Category"
                  // selectedKeys={[categories]}
                  onChange={e => setCategory(e.target.value)}
                >
                  {categories.map(ctg => (
                    <SelectItem key={ctg} value={ctg}>
                      {ctg}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full px-3">
                <p>About this job</p>
              </div>
              <div className="w-full px-3">
                <Textarea
                  isRequired
                  value={jobDescription}
                  onValueChange={setJobDescription}
                  label="Enter your description"
                  className="max-wxs"
                />
              </div>
              <div className="w-full px-3">
                <p>Educational Requirements</p>
              </div>
              <div className="w-full px-3">
                <Input
                  isRequired
                  name="educational requirements"
                  variant="flat"
                  label="Educational Requirements "
                  size="lg"
                />
              </div>
              <div className="w-full px-3">
                <p>Salary in $</p>
              </div>
              <div className="w-1/2 px-3">
                <Input
                  isRequired
                  name="min salary"
                  variant="flat"
                  type="number"
                  label="Min Salary"
                  size="lg"
                />
              </div>
              <div className="w-1/2 px-3">
                <Input
                  isRequired
                  name="max salary"
                  variant="flat"
                  type="number"
                  label="Max Salary"
                  size="lg"
                />
              </div>
              <div className="w-full px-3">
                <p>Select Job type</p>
              </div>
              <div className="w-full flex justify-between ">
                <div className="w-1/3 px-3 ">
                  <Checkbox
                    isSelected={isFullTime}
                    onValueChange={setIsFullTime}
                  >
                    Full Time
                  </Checkbox>
                </div>
                <div className="w-1/3 px-3 ">
                  <Checkbox
                    isSelected={isPartTime}
                    onValueChange={setIsPartTime}
                  >
                    PartTime
                  </Checkbox>
                </div>
              </div>
              <div className="w-full px-3">
                <p>Select Job Location</p>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-1/2 px-3 ">
                  <Checkbox isSelected={isRemote} onValueChange={setIsRemote}>
                    Remote
                  </Checkbox>
                </div>
                <div className="w-1/2 px-3 ">
                  <Checkbox isSelected={isOnSite} onValueChange={setIsOnSite}>
                    On Site
                  </Checkbox>
                </div>
                <div className="w-1/3 px-3 ">
                  <Checkbox isSelected={isHybrid} onValueChange={setIsHybrid}>
                    Hybrid
                  </Checkbox>
                </div>
              </div>

              <div className="w-full px-3">
                <p>Job location</p>
              </div>
              <div className="w-full px-3">
                <Input
                  isRequired
                  name="job location"
                  variant="flat"
                  label="Job location "
                  size="lg"
                />
              </div>

              <div className="w-full px-3 max-sm:pb-4">
                <p>Required requirements</p>
              </div>
              {requirements.map((item, index) => (
                <div key={item + index * 10} className="w-1/2 px-3">
                  <Input
                    isRequired
                    name={item}
                    variant="flat"
                    label={item}
                    size="lg"
                  />
                </div>
              ))}
              <div className="w-1/2 px-3 mx-auto">
                <Button
                  className="w-full py-8 sm:text-lg"
                  variant="light"
                  startContent={<FaPlus />}
                  onClick={handleAddRequirement}
                >
                  Add Requirement
                </Button>
              </div>
            </div>
            <div className="text-center max-w-80 mx-auto">
              <Button type="submit">Submit</Button>
              {/* <CommonButton buttonName={"Post job"}></CommonButton> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const categories = [
  "all",
  "Web Developer",
  "Accounting",
  "Administrative",
  "Data Analyst",
  "Manager",
  "Marketing Specialist",
  "Customer Service",
  "Education",
  "Engineering",
  "Finance",
  "IT",
];

export default Page;
