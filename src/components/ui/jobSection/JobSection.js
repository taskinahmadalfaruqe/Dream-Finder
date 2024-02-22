import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@nextui-org/react";
import React from "react";
import JobApplyCard from "./JobApplyCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import CommonButton from "@/components/shared/CommonButton";
import Link from "next/link";

const JobSection = async () => {
  // const res = await fetch("http://localhost:3000/recent-jobs", {
  /* next: {
      revalidate: 5,
    }, */
  const axiosPublic = useAxiosPublic();
  const res = await axiosPublic.get("/api/v1/most-viewed15-jobs");
  const recentJobsOriginal = await res.data;
  console.log(recentJobsOriginal);

  return (
    <section className="container">
      <div className="">
        {/* section heading */}
        <SectionHeading
          heading="Top 15 Jobs"
          subHeading="Top 15 highest viewed and popular jobs"
        />
        {/* job cards grid container */}
        <div className="grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* job card */}
          {recentJobsOriginal?.map(job => (
            <JobApplyCard key={job._id} job={job} />
          ))}
        </div>
        <div className="max-w-80 mx-auto my-20">
          <Link href={"/Find-Jobs"}>
            <CommonButton buttonName={"Show All Jobs"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const recentJobs = [
  {
    _id: "1",
    logo: "company1_logo.png",
    companyName: "Tech Innovators",
    location: "San Francisco, CA",
    position: "Software Engineer",
    jobType: "Full-time",
    skill: ["Java", "JavaScript", "React"],
    salary: "$100,000",
  },
  {
    _id: "2",
    logo: "company2_logo.png",
    companyName: "Data Wizards",
    location: "New York, NY",
    position: "Data Scientist",
    jobType: "Contract",
    skill: ["Python", "Machine Learning", "SQL"],
    salary: "$120,000",
  },
  {
    _id: "3",
    logo: "company3_logo.png",
    companyName: "Design Hub",
    location: "Los Angeles, CA",
    position: "UI/UX Designer",
    jobType: "Part-time",
    skill: ["Adobe XD", "Sketch", "HTML", "CSS"],
    salary: "$70,000",
  },
  {
    _id: "4",
    logo: "company4_logo.png",
    companyName: "Health Solutions",
    location: "Chicago, IL",
    position: "Medical Researcher",
    jobType: "Full-time",
    skill: ["Medical Research", "Statistics", "Data Analysis"],
    salary: "$90,000",
  },
  {
    _id: "5",
    logo: "company5_logo.png",
    companyName: "GreenTech Innovations",
    location: "Seattle, WA",
    position: "Environmental Scientist",
    jobType: "Full-time",
    skill: ["Environmental Science", "Climate Modeling", "GIS"],
    salary: "$80,000",
  },
  {
    _id: "6",
    logo: "company6_logo.png",
    companyName: "Finance Experts",
    location: "Boston, MA",
    position: "Financial Analyst",
    jobType: "Contract",
    skill: ["Financial Analysis", "Excel", "Data Modeling"],
    salary: "$110,000",
  },
  {
    _id: "7",
    logo: "company7_logo.png",
    companyName: "E-commerce Giants",
    location: "Dallas, TX",
    position: "Front-end Developer",
    jobType: "Full-time",
    skill: ["HTML", "CSS", "JavaScript", "React"],
    salary: "$90,000",
  },
  {
    _id: "8",
    logo: "company8_logo.png",
    companyName: "Global Solutions Inc.",
    location: "Miami, FL",
    position: "Project Manager",
    jobType: "Full-time",
    skill: ["Project Management", "Leadership", "Communication"],
    salary: "$120,000",
  },
  {
    _id: "9",
    logo: "company9_logo.png",
    companyName: "Cybersecurity Experts",
    location: "Austin, TX",
    position: "Security Analyst",
    jobType: "Part-time",
    skill: [
      "Cybersecurity",
      "Network Security",
      "Digital",
      "Digital Marketing",
      "SEO",
      "Social Media",
      "Marketing",
      "SEO",
      "Social Media",
      "Penetration Testing",
    ],
    salary: "$80,000",
  },
  {
    _id: "10",
    logo: "company10_logo.png",
    companyName: "Marketing Masters",
    location: "Denver, CO",
    position: "Digital Marketing Specialist",
    jobType: "Full-time",
    skill: ["Digital Marketing", "SEO", "Social Media"],
    salary: "$70,000",
  },
  {
    _id: "11",
    logo: "company11_logo.png",
    companyName: "AI Innovations",
    location: "San Diego, CA",
    position: "Machine Learning Engineer",
    jobType: "Contract",
    skill: ["Machine Learning", "Python", "TensorFlow"],
    salary: "$130,000",
  },
  {
    _id: "12",
    logo: "company12_logo.png",
    companyName: "Travel Enthusiasts",
    location: "Orlando, FL",
    position: "Travel Consultant",
    jobType: "Full-time",
    skill: ["Customer Service", "Geography", "Communication"],
    salary: "$50,000",
  },
];

export default JobSection;
