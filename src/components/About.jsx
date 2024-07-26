import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center ">
      <div className="flex border-2 border-green-200 hover:shadow-md hover:shadow-green-200 hover:scale-105 w-10/12 p-4 px-10 gap-5 rounded-xl items-center ">
        <div className="text-lg leading-normal text-justify">
          We harness the power of technology not just to connect, but to heal—to
          ensure that every interaction nurtures both mind and soul. We believe
          in the transformative magic of sharing, knowing that in each narrative
          lies the potential for healing and growth.
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
          In a world where mental well-being is often overlooked, especially in
          India where millions grapple with silent battles, we stand firm in our
          commitment to fostering positive change. Through our app and website,
          we've cultivated a diverse tapestry of voices, including survivors,
          therapists, psychologists, and everyday heroes. Here, conversations
          span a myriad of topics—from financial woes to familial
          dynamics—bolstered by the unifying thread of empathy and
          understanding.
        </div>
      </div>

      <div className="flex border-2 border-green-200 hover:shadow-md hover:shadow-green-200 hover:scale-105 w-10/12 p-4 px-10 gap-5 rounded-xl items-center ">
        <div className="text-lg leading-normal text-justify">
          We're more than just a platform; we're a beacon of hope in the digital
          realm, providing solace to those navigating life's storms. Our mission
          is simple yet profound: to create a nurturing environment where
          individuals can share their struggles openly while receiving
          invaluable insights and support from a caring community.
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
  );
};

export default About;
