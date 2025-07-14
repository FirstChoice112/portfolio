import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

//Change picture
//Add logo to header and navbar
//Add linking to about, project and contacts
//Add linking for hire me to --> contact
//Make dowload resume available
//Complete skill-list, two sides
//Add Links to my projekts, and readme file? Fix pictures and description
//Get Domain and deploy project and activate email-send
//modify gradient effect for mobile screen
//Add link to github and linkedin
//Add readme file
//Animation for project selection?

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-12 py-4 pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
