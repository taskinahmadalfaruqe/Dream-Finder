"use client";

import CommonButton from "@/components/shared/CommonButton";
import SectionHeading from "@/components/shared/SectionHeading";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useContextData from "@/hooks/useContextData";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const Page = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContextData();
  const router = useRouter();
  const [isPartTime, setIsPartTime] = useState(false);
  const [isFullTime, setIsFullTime] = useState(false);
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
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

  const handleSubmit = async e => {
    e.preventDefault();
    // validation
    if (!isFullTime && !isPartTime) {
      setFormErr("please select job type");
      return;
    } else {
      setFormErr("");
    }
    const toastId = toast.loading("processing...");

    const form = e.target;
    const formData = {
      company_name: "TechHub Solutions",
      category,
      type: jobType,
      description: jobDescription,
      minSalary: form["min salary"].value / 1,
      maxSalary: form["max salary"].value / 1,
      viewCount: 0,
      company_logo:
        "https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg",
      company_email: user?.email,
      posted_date: new Date().toISOString().slice(0, 10),
      location: form["Job-location"]?.value ? form["Job-location"]?.value : "",
      requirements: requirements.map(rqm => form[`${rqm}`].value),
      appliedCount: 0,

      educationalRequirements: form["educational requirements"].value,
      jobTitle: form["job-title"].value,
      employment_status: isPartTime
        ? "Part Time"
        : isFullTime
        ? "Full Time"
        : "",
      vacancy: form["vacancy"].value / 1,
      workingHour: form["working-hour"].value,
    };
    console.log(formData);
    // //////////////////
    // post the job
    const res = await axiosSecure.post("/api/v1/post-job", formData);
    console.log(res.data);

    if (res?.data?.insertedId || res?.data?.acknowledged) {
      toast.success("Job Posted successfully.", { id: toastId });
      router.push("/dashboard/manage-jobs");
    } else {
      toast.error("Failed to post job.", { id: toastId });
    }
  };
  return (
    <div className="min-h-screen ">
      <div className="mt-10">
        <SectionHeading
          heading="Post Job"
          subHeading="post your available job here"
        />
        <Card className=" rounded-2xl py-10 shadow-2xl max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
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
                <p>Job Title</p>
              </div>
              <div className="w-full px-3">
                <Input
                  isRequired
                  name="job-title"
                  variant="flat"
                  label="Job Title "
                  size="lg"
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

              {/* <div className="w-full flex justify-between">
                <div className="w-1/2 px-3 ">
                  <Checkbox
                    isSelected={isRemote}
                    onValueChange={setIsRemote}
                    color="success"
                  >
                    Remote
                  </Checkbox>
                </div>
                <div className="w-1/2 px-3 ">
                  <Checkbox
                    isSelected={isOnSite}
                    onValueChange={setIsOnSite}
                    color="success"
                  >
                    On Site
                  </Checkbox>
                </div>
                <div className="w-1/3 px-3 ">
                  <Checkbox
                    isSelected={isHybrid}
                    onValueChange={setIsHybrid}
                    color="success"
                  >
                    Hybrid
                  </Checkbox>
                </div>
              </div> */}
              <div className="w-full px-3">
                <Select
                  isRequired
                  items={["remote", "hybrid", "on-site"]}
                  label="Select Job Type."
                  placeholder="Select Job Type"
                  onChange={e => setJobType(e.target.value)}
                >
                  <SelectItem key={"on-site"} value={"on-site"}>
                    {"on-site"}
                  </SelectItem>
                  <SelectItem key={"hybrid"} value={"hybrid"}>
                    {"hybrid"}
                  </SelectItem>
                  <SelectItem key={"remote"} value={"remote"}>
                    {"remote"}
                  </SelectItem>
                </Select>
              </div>
              <div className="w-full px-3">
                <p>Job Location </p>
              </div>

              <div className="w-full px-3">
                <Input
                  isRequired
                  name="Job-location"
                  variant="flat"
                  label="Job Location "
                  size="lg"
                />
              </div>
              <div className="w-full px-3">
                <p>Select Job Employment Status</p>
              </div>
              {/* <div className="w-full flex justify-between">
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
              </div> */}
              <div className="w-full flex justify-between ">
                <div className="w-1/2 sm:w-1/3 px-3 ">
                  <Checkbox
                    isSelected={isFullTime}
                    onValueChange={setIsFullTime}
                    color="success"
                    isDisabled={isPartTime}
                  >
                    Full Time
                  </Checkbox>
                </div>
                <div className="w-1/2 sm:w-1/3 px-3 ">
                  <Checkbox
                    isSelected={isPartTime}
                    onValueChange={setIsPartTime}
                    color="success"
                    isDisabled={isFullTime}
                  >
                    PartTime
                  </Checkbox>
                </div>
              </div>

              <div className="w-full px-3">
                <p>Working Hour</p>
              </div>
              <div className="w-full px-3">
                <Input
                  isRequired
                  name="working-hour"
                  variant="flat"
                  label="Working Hour"
                  size="lg"
                />
              </div>

              <div className="w-full px-3">
                <p>Vacancy</p>
              </div>
              <div className="w-full px-3">
                <Input
                  isRequired
                  name="vacancy"
                  variant="flat"
                  type="number"
                  label="Vacancy"
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
        </Card>
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
