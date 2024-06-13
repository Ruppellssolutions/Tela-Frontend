import Footer from "@/components/general/Footer";
import AboutUs from "@/components/landing-page/AboutUs";
import MissionAndVision from "@/components/landing-page/MissionAndVision";
import Services from "@/components/landing-page/Services";
import Spotlight from "@/components/landing-page/Spotlight";

const LandingPage = () => {
    return (
        <>
            <Spotlight />
            <AboutUs />
            <Services />
            <MissionAndVision />
            <Footer />
        </>
    );
};

export default LandingPage;
