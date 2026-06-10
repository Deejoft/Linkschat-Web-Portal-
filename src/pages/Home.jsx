import Communities from "../components/Communities/Communities";
import CTA from "../components/CTA/CTA";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Privacy from "../components/Privacy/Privacy";
import Showcase from "../components/ShowCase/Showcase";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Privacy />
      <Stats />
      <Showcase />
      <Communities />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home;
