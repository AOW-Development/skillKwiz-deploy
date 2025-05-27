import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

     useEffect(() => {
  if (isInView) {
    const runAnimation = async () => {
      // Step 1: Reset positions
      await Promise.all([
        leftControls.set({ x: 0, opacity: 0, rotate: 0, zIndex: 1 }),
        rightControls.set({ x: 0, opacity: 0, rotate: 0, zIndex: 1 }),
      ]);

      // Step 2: V shape outward
      await Promise.all([
        leftControls.start({
          x: -300,
          opacity: 1,
          transition: { duration: 0.5 },
        }),
        rightControls.start({
          x: 300,
          opacity: 1,
          transition: { duration: 0.5 },
        }),
      ]);

      // Step 3: Overlap toward center
      await Promise.all([
        leftControls.start({
          x: -70, // pull closer to center
          rotate: -6,
          zIndex: 4,
          transition: { duration: 0.4 },
        }),
        rightControls.start({
          x: 70, // pull closer to center
          rotate: 6,
          zIndex: 4,
          transition: { duration: 0.4 },
        }),
      ]);
    };

    runAnimation();
  } else {
    leftControls.set({ x: 0, opacity: 0, rotate: 0, zIndex: 1 });
    rightControls.set({ x: 0, opacity: 0, rotate: 0, zIndex: 1 });
  }
}, [isInView]);



  return (
    <section className="py-16 text-white relative overflow-hidden mt-20">
      {/* Background */}
      <div className="absolute inset-0 flex">
        <div className="w-[100%] relative">
          <div className="absolute top-0 left-0 right-0 h-[40%]">
            <img
              src="/images/homepage/why_choose_banner_2.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[40%]">
            <img
              src="/images/homepage/why_choose_banner_2.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-60">
              <img
                src="/images/homepage/home_globe.gif"
                alt=""
                className="w-full max-w-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <h2 className="text-3xl font-bold text-center mb-2">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>{" "}
          ?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-sm">
          Discover our unique value propositions designed to enhance your
          recruitment strategy.
          <br />
          Experience the difference SkillKwiz can make in your organization.
        </p>

        {/* Cards */}
              <div className="relative flex justify-center items-center gap-0 flex-wrap md:flex-nowrap h-auto md:h-[350px] mb-16 -space-x-14">
                <motion.div
        animate={leftControls}
        initial={{ x: 0, opacity: 0 }}
        className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] shadow-lg relative z-[5]"
      >

            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/books.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Skill Library
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Access our extensive library of skill assessments covering
              technical, professional, and soft skills for comprehensive
              candidate evaluation.
            </p>
          </motion.div>

          {/* Center Card */}
          <div className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] shadow-lg z-[3]">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/guard.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Secure Testing
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Our testing is done in secure content-aware environments.
              Candidates are authenticated through multiple identification
              layers including biometric verification such as facial
              recognition, security numbers, which are then periodically
              validated throughout the test.
            </p>
          </div>

          {/* Right Card */}
                    <motion.div
            animate={rightControls}
            initial={{ x: 0, opacity: 0 }}
            className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] shadow-lg relative z-[5]"
          >

            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/dollar.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Flexible Pricing
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Our pricing model is designed to scale with your needs. Pay only
              for what you use with our credit-based system. Larger
              organizations can benefit from our Enterprise plan with unlimited
              testing and custom features.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-32 md:mt-24 relative z-20">
          <h3 className="text-2xl font-bold mb-4">Join the Talent Revolution</h3>
          <p className="max-w-2xl mx-auto mb-8 text-sm">
            Take the first step towards transforming your hiring process. Make
            selections in line with our tried and tested platform.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#f7d03e] text-black px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
