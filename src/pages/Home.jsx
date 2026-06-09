import Communities from "../components/Communities/Communities";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Privacy from "../components/Privacy/Privacy";
import Showcase from "../components/ShowCase/Showcase";
import Stats from "../components/Stats/Stats";

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
    </div>
  );
}

export default Home;
