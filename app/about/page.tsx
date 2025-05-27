"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#00418d] text-white overflow-hidden pt-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            ELEVATE YOUR BUSINESS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-base mb-8"
          >
            Skill Assessments Done With The Utmost Knowledge, Integrity, Trust,
            Respect And Security...
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-[#f73e5d] text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Sign Up
            </button>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <Image
            src="/images/homepage/home_globe.gif"
            alt="SkillKwiz assessment platform"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 auto-rows-min">
          {[
            {
              src: "/images/aboutpage/eye.gif",
              title: "OUR VISION",
              description:
                "We envision a future where skill assessments empower companies to grow confidently...",
            },
            {
              src: "/images/aboutpage/mission.gif",
              title: "OUR MISSION",
              description:
                "Our mission is to enable businesses to make informed hiring and training decisions...",
            },
            {
              src: "/images/aboutpage/purpose.gif",
              title: "OUR PURPOSE",
              description:
                "Our purpose is to revolutionize workforce evaluation...",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-h-[250px] md:min-h-[300px] hover:min-h-[350px]"
            >
              <Image
                src={feature.src}
                alt={feature.title}
                width={200}
                height={200}
                className="w-auto h-auto max-h-32 object-contain mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-[#272727] group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
           {/* Who We Are Section */}
      <section className="w-full bg-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
            {/* Text Block */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-bold text-[#00418d] mb-6">
                Who We Are?
              </h2>
              <p className="text-lg text-[#272727] mb-4 leading-relaxed">
                SkillKwiz is your trusted partner in identifying, assessing, and
                benchmarking the skill levels of professionals. We help
                organizations make confident workforce decisions by delivering
                insights rooted in intelligent analysis.
              </p>
              <p className="text-base text-[#272727] mb-2 italic">
                "SkillKwiz has a single purpose, and that is to create
                stakeholder value by transforming how companies evaluate talent
                and build high-performing teams."
              </p>
              <p className="text-base text-[#272727] font-semibold">
                – Venugopal B A <br />
                CEO, SkillKwiz
              </p>
            </div>

            {/* Image Block */}
            <div className="w-full md:w-1/2 flex justify-center gap-3">
              <Image
                src="/images/aboutpage/about_who_we_are-0.png"
                alt="Team collaboration"
                width={160}
                height={240}
                className="rounded-xl object-cover animate-float-delay-2"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-1.png"
                alt="Team collaboration"
                width={160}
                height={240}
                className="rounded-xl object-cover animate-float-delay-1"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-2.png"
                alt="Team collaboration"
                width={160}
                height={240}
                className="rounded-xl object-cover animate-float-delay-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-[30%] group transform transition-transform duration-700 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#f73e5d] p-4">
                  <Image
                    src="/images/aboutpage/Venugopal.png"
                    alt="CEO"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-[#f73e5d] text-white text-center py-3 font-bold text-xl tracking-wide">
                  CEO
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-[70%] space-y-6"
            >
              <p className="text-[20px] md:text-[18px] text-[#272727] leading-relaxed">
                <strong>Venugopal B A</strong>,a veteran leader in the IT industry, is the
                visionary founder and CEO of SkillKwiz. His extensive experience
                in leading large teams and executing global technology projects
                has helped define SkillKwiz mission to deliver precision skill
                assessment to organizations and individuals.
              </p>
              <p className="text-[20px] md:text-[18px] text-[#272727] leading-relaxed">
                With a rich background in the technology industry, Venugopal
                combines strategic foresight with a people-first leadership
                philosophy. His dedication to innovation and commitment to
                excellence have been instrumental in shaping the company’s core values and vision.
              </p>
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              preload="none"
              poster="/images/aboutpage/about-page.png"
            >
              <source src="/images/aboutpage/about_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>
    </>
  );
}
