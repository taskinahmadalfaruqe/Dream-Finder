import JobPageBanner from '@/components/ui/JobPageBanner/JobPageBanner';
import JobsContainer from '@/components/ui/JobsContainer/JobsContainer';
export const metadata= {
    title: 'Dream Finder | All Jobs',
  };
const page = () => {
    return (
        <div className="container space-y-10">
            <JobPageBanner />
            <JobsContainer />
        </div>
    );
};

export default page;