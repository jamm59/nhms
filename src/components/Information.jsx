"use client";
import Typewriter from "typewriter-effect";
export default function Information() {
  const textToType = `
    Welcome to the future of nutrition management! Our web application is
    your key to a healthier, more informed lifestyle. Dive into a world of
    personalized nutrition with smart insights, tailored recommendations,
    and easy tracking. Whether you're exploring specific dietary
    preferences, managing chronic conditions, or simply looking to elevate
    your well-being, we've got you covered. Discover a dynamic library of
    recipes, set and track your unique health goals, and seamlessly
    integrate with other well-being apps. Start your journey towards a
    healthier you today!`;
  return (
    <>
      <div
        className="h-screen text-black grid place-items-center bg-white relative z"
        id="information"
      >
        <div className="w-[60%] font-opensans text-lg text-left relative z-10">
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(17)
                .typeString(textToType)
                .callFunction(() => {
                  console.log("String typed out!");
                })
                // .pauseFor(2500)
                // .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </div>
      </div>
    </>
  );
}
