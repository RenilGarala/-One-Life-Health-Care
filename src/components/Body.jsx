import React from "react";
import "animate.css";
import Benefit from "./Benefit";

const Body = () => {
  return (
    <div>
      <div className="flex px-32 bg-white text-black items-center py-44 animate__animated animate__fadeIn justify-between h-[calc(100vh-4rem)] gap-4">
        <div className="grid gap-8 ">
          <div className="text-6xl tracking-wider leading-tight font-bold">
            Your <span className="text-green-700">Mental Health</span> Matters
          </div>
          <div className="text-lg mb-3 font-light">
            <div className="pb-4">
              Explore a compassionate space where you can connect, share, and
              grow with others on their mental health journey.
            </div>
            <div>
              Our mission is simple to help you feel better, get better and stay
            </div>
          </div>
          <div>
            <button className="px-8 py-3 flex gap-3 w-auto font-bold text-sm bg-green-700 text-white rounded-full hover:bg-green-700">
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
        <div>
          <div>
            <img
              className=""
              src="https://mindfulcare.antstheme.com/wp-content/uploads/2023/05/5-Cardiologist.png"
            ></img>
          </div>
        </div>
      </div>

      <div className="flex px-32 gap-4 mb-32 justify-between items-center">
        <div className="w-11/12">
          <img src="https://mindfulcare.antstheme.com/wp-content/uploads/2023/05/image-about-us.png"></img>
        </div>
        <div className="grid gap-8">
          <div className="text-6xl tracking-wider leading-tight font-bold">
            It's <span className="text-green-700">Okay</span> To Not Be{" "}
            <span className="text-green-700">Okay</span>
          </div>
          <div className="text-lg mb-3 font-light">
            In the fast-paced hustle of life, it's easy to feel overwhelmed by
            the weight of our problems. But fret not, for here, within the safe
            confines of our anonymous haven, you can unburden your heart and
            soul without fear or judgment.
          </div>
        </div>
      </div>

      <div className="bg-green-100 px-32 py-24 text-green-700">
        <div className="mb-16 text-5xl tracking-wider leading-tight font-bold">
          Our Mental Healthcare Offerings
        </div>
        <div className="flex gap-10 items-center flex-wrap justify-stretch">
          <Benefit
            title="Anonymity, Security And Safety"
            discription="Your identity remains safeguarded as you open up about your deepest struggles."
          />
          <Benefit
            title="Seasoned Professionals at Your Fingertips"
            discription="Engage in insightful conversations with experienced psychologists and empathetic individuals who genuinely care."
          />
          <Benefit
            title="Around-The-Clock Support"
            discription="Day or night, you're never alone. Our dedicated team ensures that someone is always available to lend a compassionate ear."
          />
          <Benefit
            title="Liberation to Express"
            discription="Feel free to articulate your challenges without reservation, knowing that here, your voice matters."
          />
          <Benefit
            title="Empower Through Support"
            discription="Beyond seeking solace, you also have the opportunity to extend a helping hand to others traversing similar paths."
          />
        </div>
      </div>

      <div className="px-32 py-24 ">
        <div className="flex justify-center">
          <div className="mb-16 text-5xl tracking-wider leading-tight font-bold">
            <span className="text-green-700">Who</span> We Are ?{" "}
            <span className="text-green-700">What</span> We Do ?{" "}
            <span className="text-green-700">Why</span> We Do ?
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center ">
          <div className="flex border-2 border-green-200 hover:shadow-md hover:shadow-green-200 hover:scale-105 w-10/12 p-4 px-10 gap-5 rounded-xl items-center ">
            <div className="text-lg leading-normal text-justify">
              We harness the power of technology not just to connect, but to
              heal—to ensure that every interaction nurtures both mind and soul.
              We believe in the transformative magic of sharing, knowing that in
              each narrative lies the potential for healing and growth.
            </div>
            <div className="min-w-60">
              <img
                src="https://img.freepik.com/premium-vector/cartoon-vector-illustration-man-thinking-he-is-king-put-crown-his-head-dark_253349-5700.jpg?w=1380"
                alt="mental-disorder"
                className="w-96"
              />
            </div>
          </div>

          <div className="flex border-2 border-green-200 hover:shadow-md hover:shadow-green-200 hover:scale-105 w-10/12 p-4 px-10 gap-5 rounded-xl items-center ">
            <div className="min-w-60">
              <img
                src="https://img.freepik.com/premium-vector/flat-illustration-person-with-peaceful-expression_844724-633.jpg?w=1380"
                alt="mental-disorder"
                className="w-96"
              />
            </div>
            <div className="text-lg leading-normal text-justify">
              In a world where mental well-being is often overlooked, especially
              in India where millions grapple with silent battles, we stand firm
              in our commitment to fostering positive change. Through our app
              and website, we've cultivated a diverse tapestry of voices,
              including survivors, therapists, psychologists, and everyday
              heroes. Here, conversations span a myriad of topics—from financial
              woes to familial dynamics—bolstered by the unifying thread of
              empathy and understanding.
            </div>
          </div>

          <div className="flex border-2 border-green-200 hover:shadow-md hover:shadow-green-200 hover:scale-105 w-10/12 p-4 px-10 gap-5 rounded-xl items-center ">
            <div className="text-lg leading-normal text-justify">
              We're more than just a platform; we're a beacon of hope in the
              digital realm, providing solace to those navigating life's storms.
              Our mission is simple yet profound: to create a nurturing
              environment where individuals can share their struggles openly
              while receiving invaluable insights and support from a caring
              community.
            </div>
            <div className="min-w-60">
              <img
                src="https://img.freepik.com/premium-vector/isolated-girl-yoga-pose-leaves-cartoon-style_338906-151.jpg?w=1380"
                alt="mental-disorder"
                className="w-96"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-32 py-24 bg-green-100">
        <div className=" flex justify-center items-center gap-10">
          <div className="text-5 text-4xl font-serif tracking-wider leading-normal text-black">
            “RECOVERY IS NOT ONE AND DONE. IT'S A LIFELONG JOURNEY THAT TAKES
            PLACE ONE DAY, ONE STEP AT A TIME.”
            <div className="text-xl float-right pt-8 flex text-gray-600">
              - Steve Jobs, Mental Health & Adaptations.
            </div>
          </div>

          <div className="min-w-80">
            <img
              src="https://img.freepik.com/free-vector/flat-design-tree-planting-illustration_23-2149198757.jpg?w=1380&t=st=1721937264~exp=1721937864~hmac=e7d2e8e0ac177c49bed3ceaa66189493e969aaa3b1c1ed67a86b639447a96e9a"
              alt="Plant Growing Image"
              className="rounded-full w-96"
            ></img>
          </div>
        </div>

        <div className="px-16 text-green-800 pt-10 text-2xl font-sans text-center leading-relaxed">
          Join us on this journey of resilience and renewal, as together, we
          weave a tapestry of support and compassion. At One Life Healthcare,
          your well-being is not just our priority; it's our collective mission.
        </div>
      </div>
    </div>
  );
};

export default Body;
