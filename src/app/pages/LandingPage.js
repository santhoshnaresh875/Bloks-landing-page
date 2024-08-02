import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Hero from "../Components/Hero";

const LandingPage = () => {
    return (
        <div className="bg-black h-full">
            <Header />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

export default LandingPage;
