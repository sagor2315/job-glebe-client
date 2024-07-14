import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import FeaturedCandidates from "./FeaturedCandidates/FeaturedCandidates";
import JobsCategoryTabs from "./JobsCategoryTabs/JobsCategoryTabs";
import RechargeYourCareer from "./RechargeYourCareer/RechargeYourCareer";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";

const HomePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>JobGlebe | Home</title>
      </Helmet>
      <Banner />
      <JobsCategoryTabs />
      <FeaturedCandidates />
      <RechargeYourCareer />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
