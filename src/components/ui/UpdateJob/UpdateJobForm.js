"use client";
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
import { usePathname, useRouter as useXxxx } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const UpdateJobForm = ({ oldJobDetails }) => {
  const axiosSecure = useAxiosSecure();
  const router = useXxxx();
  const [formErr, setFormErr] = useState("");
  const [requirements, setRequirements] = useState([
    "requirements 1",
    "requirements 2",
    "requirements 3",
  ]);
  const [isPartTime, setIsPartTime] = useState(
    oldJobDetails.employment_status === "Part Time"
  );
  const [isFullTime, setIsFullTime] = useState(
    oldJobDetails.employment_status === "Full Time"
  );
  const [category, setCategory] = useState(oldJobDetails.category);
  const [jobType, setJobType] = useState(oldJobDetails.type);
  const [jobDescription, setJobDescription] = useState(
    oldJobDetails.description
  );

  useEffect(() => {
    if (oldJobDetails.requirements.length > 3) {
      const newRequirements = oldJobDetails.requirements.map(
        (_, index) => `requirements ${index + 1}`
      );
      setRequirements(newRequirements);
    }
  }, [oldJobDetails.requirements]);

  const handleAddRequirement = () => {
    const totalRequirements = requirements.length;
    setRequirements([...requirements, `requirements ${totalRequirements + 1}`]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // validation
    if (!isFullTime && !isPartTime) {
      toast.error("please select an job type!");
      setFormErr("please select an job type");
      return;
    } else {
      setFormErr("");
    }

    const toastId = toast.loading("processing...");

    const form = e.target;
    const formData = {
      category,
      type: jobType,
      description: jobDescription,
      minSalary: form["min salary"].value / 1,
      maxSalary: form["max salary"].value / 1,
      location: form["Job-location"]?.value ? form["Job-location"]?.value : "",
      requirements: requirements.map(rqm => form[`${rqm}`].value),
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
    // //////////////////
    // post the job
    const res = await axiosSecure.put(
      `/api/v1/update-job/${oldJobDetails._id}`,
      formData
    );

    if (res?.data?.modifiedCount || res?.data?.acknowledged) {
      router.push("/dashboard/manage-jobs");
      toast.success("Job Updated successfully.", { id: toastId });
    } else {
      toast.error("Failed to update job. please try again.", { id: toastId });
    }
  };
  return (
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
              defaultSelectedKeys={[oldJobDetails.category]}
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
              defaultValue={oldJobDetails?.jobTitle || ""}
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
              defaultValue={oldJobDetails?.educationalRequirements || ""}
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
              defaultValue={oldJobDetails?.minSalary || ""}
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
              defaultValue={oldJobDetails?.maxSalary || ""}
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
          <div className="w-full px-3">
            <Select
              isRequired
              items={["remote", "hybrid", "on-site"]}
              label="Select Job Type."
              placeholder="Select Job Type"
              defaultSelectedKeys={[oldJobDetails.type]}
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
              defaultValue={oldJobDetails?.location || ""}
              name="Job-location"
              variant="flat"
              label="Job Location "
              size="lg"
            />
          </div>
          <div className="w-full px-3">
            <p>Select Job Employment Status</p>
          </div>
          <div className="w-1/2 px-3">
            <Checkbox
              isSelected={isFullTime}
              onValueChange={setIsFullTime}
              color="success"
              isDisabled={isPartTime}
              className="ml-[1px] text-white min-w-full rounded-xl bg-default-100 hover:bg-default-200 duration-300 py-5"
            >
              <div className="rounded-lg w-full">
                <span>Full Time</span>
              </div>
            </Checkbox>
          </div>
          <div className="w-1/2 px-3">
            <Checkbox
              isSelected={isPartTime}
              onValueChange={setIsPartTime}
              color="success"
              isDisabled={isFullTime}
              className="ml-[1px] text-white min-w-full rounded-xl bg-default-100 hover:bg-default-200 duration-300 py-5"
            >
              <div className="rounded-lg w-full">
                <span>Part Time</span>
              </div>
            </Checkbox>
          </div>

          <div className="w-full px-3">
            <p>Working Hour</p>
          </div>
          <div className="w-full px-3">
            <Input
              isRequired
              defaultValue={oldJobDetails?.workingHour || ""}
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
              defaultValue={oldJobDetails?.vacancy || ""}
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
                defaultValue={oldJobDetails?.requirements[index] || ""}
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
        <div className="text-center max-w-80 mx-auto my-10 mt-20">
          <Button
            className="text-white text-lg font-medium px-10 py-6"
            color="success"
            type="submit"
          >
            Submit
          </Button>
          {/* <CommonButton buttonName={"Post job"}></CommonButton> */}
        </div>
      </form>
    </Card>
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

export default UpdateJobForm;
