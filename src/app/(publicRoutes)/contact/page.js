import Contact from "@/components/ui/Contact/Contact";
import HelpDesk from "@/components/ui/helpDesk/helpDesk";
import Team from "@/components/ui/team/team";
export const metadata= {
    title: 'Dream Finder | Contact',
  };
const page = () => {
    return (
        <div className="container">
            <Contact></Contact>
            <Team></Team>
        </div>
    );
};

export default page;