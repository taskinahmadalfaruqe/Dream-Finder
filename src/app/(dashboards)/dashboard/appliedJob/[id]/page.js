import "./appliedJobDetails.css";
import AppliedJobDetails from "@/components/ui/AppliedJobDetails/AppliedJobDetails";

const page =  ({params, searchParams}) => {
  return (
    <div className="py-10 container">
      <AppliedJobDetails date={searchParams?.date} id={params?.id}/>
    </div>
  );
};

export default page;
