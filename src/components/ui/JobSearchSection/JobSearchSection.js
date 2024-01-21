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

const JobSearchSection = () => {
  const type = [
    "Web Developer",
    "Front End Developer",
    "UI/UX designer",
    "Back End Developer",
    "MERN Stack Developer",
  ];
  return (
    <Card className="sectionSearchSection h-[calc(100vh-70px)] overflow-y-hidden sticky top-0  ">
      <CardBody className="p-5 overflow-y-scroll">
        <div className="">
          <div className="">
            <div className="w-xs ">
              <Select
                label="Select Category"
                className="max-w-xs border border-primaryColor rounded-xl"
              >
                {type.map(item => (
                  <SelectItem key={item} value={item.toUpperCase}>
                    {item}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mt-8 relative  max-w-xs">
              <Input
                type="text"
                label="Location"
                placeholder="Search"
                className="border border-primaryColor rounded-xl max-w-xs"
              />
              <div className="absolute top-5 right-3">
                <IoSearchSharp />
              </div>
            </div>
          </div>

          <div className="mt-8  ml-1 ">
            <p className="mb-2 text-secondaryColor font-semibold">Type</p>
            <div className="flex flex-col">
              <Checkbox color="success">On-Sight</Checkbox>
              <Checkbox color="success">Remote</Checkbox>
              <Checkbox color="success">Hybrid</Checkbox>
            </div>
          </div>
          <div className="mt-8">
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
        </div>
      </CardBody>
    </Card>
  );
};

export default JobSearchSection;
