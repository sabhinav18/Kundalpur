import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Schemes from "./components/Schemes.jsx";
import Facilities from "./components/Facilities.jsx";
import Support from "./components/Support.jsx";
import Visit from "./components/Visit.jsx";
import Contact from "./components/Contact.jsx";
import RoomBooking from "./components/RoomBooking.jsx";
import Donation from "./components/Donation.jsx";

export default function App() {
  return (
    <div className="min-h-full">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Schemes />
        <Donation />
        <Facilities />
        <RoomBooking />
        <Gallery />
        <Support />
        {/* <Visit /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
