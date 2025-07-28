import Blobs from "../ui/Blobs";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">
        <Blobs />
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Join Banner */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <Link
                to="/join"
                className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-poppins group cursor-pointer transition-colors bg-[#F4C343] text-[#000000] hover:bg-[#000952] hover:text-[#ffffff]"
              >
                <div className="w-2 h-2 bg-white rounded-full mr-2 group-hover:animate-pulse"></div>
                <span className="hidden sm:inline">Join Neural Hive</span>
                <span className="sm:hidden">Join Us</span>
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Title */}
            <div className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
              <span className="text-[#F4C343]">From Students</span>
              <br />
              <span className="text-[#ffffff]">For AI Enthusiasts</span>
            </div>

            {/* Description */}
            <div className="text-base sm:text-lg md:text-xl mb-8 font-poppins max-w-xl mx-auto lg:mx-0 leading-relaxed text-[#ffffff]/80">
              Neural Hive, the AI/ML club at PES University, Electronic City, provides students with opportunities to learn, innovate, and grow in the fields of machine learning and artificial intelligence.
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/events"
                className="px-6 py-3 sm:px-8 rounded-full font-poppins flex items-center justify-center bg-[#F4C343] text-[#000000] hover:bg-[#000952] hover:text-[#ffffff] transition-colors"
              >
                Explore Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 sm:px-8 rounded-full font-poppins flex items-center justify-center border border-[#F4C343] text-[#F4C343] hover:bg-[#F4C343] hover:text-[#000000] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <div className="relative flex flex-col items-center">
              {/* Main Image Container */}
              <div
                className="relative w-[20rem] h-[14rem] sm:w-[24rem] sm:h-[16rem] md:w-[28rem] md:h-[18rem] lg:w-[36rem] lg:h-[24rem] rounded-3xl bg-[#000000]
                           transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-in-out hover:scale-105"
              >
                {/* Image */}
                <div className="w-full h-full flex items-center justify-center backdrop-blur border border-[#ffffff] rounded-3xl">
                  <img
                    src="/neuralhiveLogo.svg"
                    alt="NH Banner"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-[0_0_10px_#ffffff]"
                  />
                </div>

                {/* Overlay Stats */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#000000] backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 text-white">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full"></div>
                    <span className="font-medium">70+ Active Members</span>
                  </div>
                  <div className="px-4 text-[10px] sm:text-xs text-gray-300 mt-1">
                    Join the community
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-[#000000] backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 text-white">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-[#F4C343]">
                      <Trophy />
                    </span>
                    <span className="font-poppins">5+ Events</span>
                  </div>
                  <div className="px-4 sm:px-8 text-[10px] sm:text-xs text-gray-300 mt-1">
                    Conducted
                  </div>
                </div>
              </div>

              {/* Hashtag Text */}
              <div className="mt-5 text-sm rotate-[-3deg] sm:text-2xl md:text-3xl font-poppins text-[#F4C343]">
                #SyntaxAndChill
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#ffffff] rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-14 sm:h-14 bg-[#F4C343] rounded-full opacity-90"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
