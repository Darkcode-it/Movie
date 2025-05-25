import Header from "../components/header/Header";
import ShearcheBox from "../components/header/ShearcheBox";
import FollowUs from "../components/header/FollowUs";
import HeaderSlider from "../components/header/HeaderSlider";
import DeviceShowcase from "../components/DeviceShowcase";
import KidsHeroSection from "../components/KidsHeroSection";
import CommentsSection from "../components/CommentsSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <ShearcheBox />
            <FollowUs />
            <HeaderSlider />
            <DeviceShowcase />
            <KidsHeroSection />
            <CommentsSection />
            <Footer />
        </div>
    )
}

export default Home;