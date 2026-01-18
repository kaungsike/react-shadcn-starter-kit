import { heroImagesAndComments } from "@/data/globalVariables";
import HeroSection from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <HeroSection menudata={heroImagesAndComments} />
    </>
  );
};

export default HomePage;
