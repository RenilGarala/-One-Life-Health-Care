import React from "react";
import Benefit from "./Benefit";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Body = () => {
  return (
    <div>
      {/* section 1 */}
      <div
        data-aos="fade-in"
        className=" flex px-32 lg:px-20 md:px-16 sm:px-7 bg-white text-black items-center py-44 justify-between h-[calc(100vh+4rem)]  gap-4 xl:flex-col-reverse lg:items-center xl:justify-center xl:gap-20"
      >
        <div className="grid gap-8 lg:text-center">
          <div className="text-6xl tracking-wider leading-tight font-bold sm:text-4xl sm:leading-tight sm:tracking-wider">
            Your <span className="text-green-700">Mental Health</span> Matters
          </div>
          <div className="text-lg mb-3 font-light lg:text-md">
            <div className="pb-4 ">
              Explore a compassionate space where you can connect, share, and
              grow with others on their mental health journey.
            </div>
            <div>
              Our mission is simple to help you feel better, get better and stay
            </div>
          </div>
          <div className="xl:justify-center xl:flex ">
            <button className="px-8 py-4 sm:py-3 flex gap-3 w-auto md:text-md font-bold text-sm bg-green-700 text-white rounded-full hover:bg-green-700">
              <span>SEE MORE</span>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/windows/32/FFFFFF/arrow.png"
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <div className="lg:w-4/5 lg:items-center xl:w-4/6 sm:w-11/12">
          <img
            className=""
            src="https://mindfulcare.antstheme.com/wp-content/uploads/2023/05/5-Cardiologist.png"
          ></img>
        </div>
      </div>

      {/* section 2 */}
      <div
        data-aos="fade-up"
        className="flex px-32 lg:px-20 md:px-16 sm:px-7 md:text-5xl gap-4 mb-32 justify-between items-center xl:flex-col xl:justify-center xl:gap-20"
      >
        <div className="w-11/12 xl:w-4/6 ">
          <img src="https://mindfulcare.antstheme.com/wp-content/uploads/2023/05/image-about-us.png"></img>
        </div>
        <div className="grid gap-8 text-lg lg:text-md lg:text-center">
          <div className="text-6xl tracking-wider leading-tight font-bold sm:text-4xl sm:leading-tight sm:tracking-wider">
            It's <span className="text-green-700">Okay</span> To Not Be{" "}
            <span className="text-green-700">Okay</span>
          </div>
          <div className="mb-3 font-light">
            In the fast-paced hustle of life, it's easy to feel overwhelmed by
            the weight of our problems. But fret not, for here, within the safe
            confines of our anonymous haven, you can unburden your heart and
            soul without fear or judgment.
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div
        data-aos="fade-up"
        className="lg:hi px-32 lg:px-20 md:px-16 sm:px-7 bg-green-100 py-24 text-green-700"
      >
        <div className="mb-16 text-5xl md:text-4xl sm:text-3xl tracking-wider leading-tight font-bold">
          Our Mental Healthcare Offerings
        </div>
        <div className="lg:mx-auto grid xl:grid-cols-2 md:grid-cols-1 max:gap-10 gap-8 sm:pt-10 mx-0 lg:max-w-none grid-cols-3">
          <div>
            <Benefit
              title="Anonymity, Security And Safety"
              discription="Your identity remains safeguarded as you open up about your deepest struggles."
            />
          </div>
          <div>
            <Benefit
              title="Seasoned Professionals at Your Fingertips"
              discription="Engage in insightful conversations with experienced psychologists and empathetic individuals who genuinely care."
            />
          </div>
          <div>
            <Benefit
              title="Around-The-Clock Support"
              discription="Day or night, you're never alone. Our dedicated team ensures that someone is always available to lend a compassionate ear."
            />
          </div>
          <div>
            <Benefit
              title="Liberation to Express"
              discription="Feel free to articulate your challenges without reservation, knowing that here, your voice matters."
            />
          </div>
          <div>
            <Benefit
              title="Empower Through Support"
              discription="Beyond seeking solace, you also have the opportunity to extend a helping hand to others traversing similar paths."
            />
          </div>
        </div>
      </div>
      

      {/* section 4 */}

      <div data-aos="fade-up" className="px-32 py-24 lg:px-20 md:px-16 sm:px-7">
        <div className="flex justify-center">
          <div className="mb-16 text-5xl tracking-wider leading-tight font-bold md:text-4xl sm:text-3xl sm:leading-tight sm:tracking-wider">
            <span className="text-green-700">Who</span> We Are ?{" "}
            <span className="text-green-700">What</span> We Do ?{" "}
            <span className="text-green-700">Why</span> We Do ?
          </div>
        </div>

        <div>
          <About />
        </div>
      </div>

      {/* section 5 */}

      <div data-aos="fade-up" className="px-32 lg:px-20 md:px-16 sm:px-7 py-24 bg-green-100">
        <div className=" flex lg:flex-col-reverse justify-center items-center gap-10">
          <div className="md:text-3xl sm:text-2xl text-4xl font-serif tracking-wider leading-normal text-black lg:flex-col lg:justify-center ">
            “RECOVERY IS NOT ONE AND DONE. IT'S A LIFELONG JOURNEY THAT TAKES
            PLACE ONE DAY, ONE STEP AT A TIME.”
            <div className="text-xl sm:text-base float-right mt-8 flex text-gray-600">
              - Steve Jobs, Mental Health & Adaptations.
            </div>
          </div>

          <div className="min-w-80 lg:flex lg:justify-center">
            <img
              src="https://img.freepik.com/free-vector/flat-design-tree-planting-illustration_23-2149198757.jpg?w=1380&t=st=1721937264~exp=1721937864~hmac=e7d2e8e0ac177c49bed3ceaa66189493e969aaa3b1c1ed67a86b639447a96e9a"
              alt="Plant Growing Image"
              className="rounded-full w-96 lg:w-7/12 sm:w-5/6"
            ></img>
          </div>
        </div>

        <div className="px-16 md:px-4 sm:text-lg lg:px-8 text-green-800 pt-10 text-xl font-sans text-center leading-relaxed">
          Join us on this journey of resilience and renewal, as together, we
          weave a tapestry of support and compassion. At One Life Healthcare,
          your well-being is not just our priority; it's our collective mission.
        </div>
      </div>
    </div>
  );
};

export default Body;
