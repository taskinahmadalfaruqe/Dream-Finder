import React from "react";
import "./jobSearchSection.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
} from "@nextui-org/react";
import { Select, SelectItem, Checkbox, Slider } from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";
import CommonButton from "@/components/shared/CommonButton";

const JobSearchSection = ({ state }) => {
  const {
    setCategory,
    setType,
    setLocation,
    setSalary,
    type,
    preference,
    setPreference,
    submit,
    setSubmit,
  } = state;
  const category = [
    "Web Developer",
    "Front End Developer",
    "UI/UX designer",
    "Back End Developer",
    "MERN Stack Developer",
  ];

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleType = (value) => {
    const index = type.indexOf(value);
    if (index === -1) {
      setType((prevType) => [...prevType, value]);
    } else {
      setType((prevType) => prevType.filter((item) => item !== value));
    }
  };

  const handleSalary = (value) => {
    setSalary(value);
  };

  return (
    <Card className="sectionSearchSection h-[calc(100vh-70px)] overflow-y-hidden sticky top-0  ">
      <CardBody className="p-5 overflow-y-scroll">
        <div className="">
          <div className="">
            <div className="w-xs ">
              <Select
                label="Select Category"
                className="max-w-xs border border-primaryColor rounded-xl"
                onChange={handleCategory}
              >
                {category.map((item) => (
                  <SelectItem key={item} value={item.toUpperCase}>
                    {item}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mt-5 relative  max-w-xs">
              <Input
                type="text"
                label="Location"
                placeholder="Search"
                onChange={handleLocation}
                className="border border-primaryColor rounded-xl max-w-xs"
              />
              <div className="absolute top-5 right-3">
                <IoSearchSharp />
              </div>
            </div>
          </div>

          <div className="mt-5  ml-1 ">
            <p className="mb-2 text-secondaryColor font-semibold">Type</p>
            <div className="flex flex-col">
              <Checkbox
                checked={true}
                onChange={() => handleType("on-sight")}
                color="success"
              >
                On-Sight
              </Checkbox>
              <Checkbox
                checked
                onChange={() => handleType("remote")}
                color="success"
              >
                Remote
              </Checkbox>
              <Checkbox
                checked
                onChange={() => handleType("hybrid")}
                color="success"
              >
                Hybrid
              </Checkbox>
            </div>
          </div>

          <div className="mt-5  ml-1 ">
            <p className="mb-2 text-secondaryColor font-semibold">
              Preferences
            </p>
            <div className="flex flex-col">
              <Checkbox
                checked={true}
                onChange={() => setPreference(!preference)}
                color="success"
              >
                Most Applied
              </Checkbox>
            </div>
          </div>
          <div className="mt-5 mb-3">
            <p className="mb-2 text-secondaryColor font-semibold">
              Salary Expectation (In Lakhs)
            </p>
            <Slider
              showTooltip={true}
              size="sm"
              color="success"
              step={1}
              maxValue={10}
              minValue={0}
              fillOffset={0}
              defaultValue={0}
              onChange={handleSalary}
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
                {
                  value: 3,
                  label: "3",
                },
                {
                  value: 4,
                  label: "4",
                },
                {
                  value: 5,
                  label: "5",
                },
                {
                  value: 6,
                  label: "6",
                },
                {
                  value: 7,
                  label: "7",
                },
                {
                  value: 8,
                  label: "8",
                },
                {
                  value: 9,
                  label: "9",
                },
                {
                  value: 10,
                  label: "10",
                },
              ]}
              className="max-w-md"
            />
          </div>
          <div onClick={() => setSubmit(!submit)} className="mt-10 ">
            <CommonButton buttonName={"Search"} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default JobSearchSection;
