import IntroCard from "@/components/IntroCard";
import About from "@/container/About";
import ContactMe from "@/container/ContactMe";
import Experience from "@/container/Experience";
import HomePage from "@/container/HomePage";
import Papers from "@/container/Papers";
import Skills from "@/container/Skills";

export default function Home() {
  return (
    <>
      <main className="w-full h-fit overflow-hidden">
        <div className="w-full flex lg:flex-row flex-col justify-center gap-0 lg:gap-[8rem] h-full">
          {/* Left column with IntroCard */}
          <div className="relative w-full mx-auto lg:w-[20rem] lg:h-[80vh] lg:mx-0 border-red-500 py-2 lg:py-[3.5rem]">
            <IntroCard />
          </div>

          {/* Right column with scrollable content */}
          <div className="w-full mx-auto lg:w-[42rem] lg:mx-0 border-red-500 my-[0rem] lg:my-[3.2rem] no-scrollbar">
            <HomePage />
            <About />
            <Skills />
            <Experience />
            <Papers />
            <ContactMe />
          </div>
        </div>
      </main>
    </>
  );
}


