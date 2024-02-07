import JobPageBanner from '@/components/ui/JobPageBanner/JobPageBanner';
import JobsContainer from '@/components/ui/JobsContainer/JobsContainer';
export const metadata= {
    title: 'Dream Finder | All Jobs',
  };
const page = ({searchParams }) => {
    const category = searchParams?.category || ""
  
    return (
        <div className="container space-y-10">
            <JobPageBanner />
            <JobsContainer category={category}/>
        </div>
    );
};

export default page;