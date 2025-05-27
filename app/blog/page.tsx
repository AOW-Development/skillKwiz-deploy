"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-64 bg-[#00418d]" : "w-24 bg-[#c3dfff]"
    }`;

  const blogPosts = [
    {
      img: "/images/blogpage/1.png",
      title: "The Importance of Upskilling in Today's Job Market",
      subtitle: "Why Upskilling Matters in 2025",
    },
    {
      img: "/images/blogpage/2.png",
      title: "How Gamified Learning Enhances Skill Retention",
      subtitle: "The Psychology Behind Gamification",
    },
    {
      img: "/images/blogpage/3.png",
      title: "Soft Skills vs. Hard Skills: What Matters More?",
      subtitle: "The Difference Between Soft and Hard Skills",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Mastering Knowledge & Growth
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-8">
              In a world of constant change, continuous learning is the key to
              success...
            </p>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mb-10">
              {blogPosts.map((_, index) => (
                <div key={index} className={indicatorClasses(index)} />
              ))}
            </div>

            {/* Featured Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative mb-4 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={380}
                      height={240}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                  <a
                    href="/downloads/sample.pdf"
                    download
                    className="text-sm text-[#00418d] font-medium hover:underline flex items-center gap-1"
                  >
                    {post.subtitle}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4">
                <Image
                  src="/images/blogpage/4.png"
                  alt="Tech skills"
                  width={580}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Top 10 Tech Skills That Can Land You a High-Paying Job
              </h3>
              <a
                href="/downloads/sample.pdf"
                download
                className="text-sm text-[#00418d] hover:underline font-medium"
              >
                Why Tech Skills Are Essential in 2025
              </a>
            </div>

            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4">
                <Image
                  src="/images/blogpage/5.png"
                  alt="Learning motivation"
                  width={580}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                How to Stay Motivated While Learning New Skills
              </h3>
              <a
                href="/downloads/sample.pdf"
                download
                className="text-sm text-[#00418d] hover:underline font-medium"
              >
                Why Motivation Is Key to Skill Development
              </a>
            </div>
          </div>

          {/* Knowledge Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Mastering Knowledge & Growth
            </h2>
            <p className="max-w-4xl mb-12">
              Knowledge is the foundation of growth. Embrace new ideas, sharpen
              your skills, and stay inspired with insights that empower you to
              achieve more in both your personal and professional journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  img: "/images/blogpage/6.png",
                  title: "The Future of Online Learning",
                },
                {
                  img: "/images/blogpage/7.png",
                  title: "5 Essential Skills to Boost Your Career in 2025",
                },
                {
                  img: "/images/blogpage/8.png",
                  title: "How Gamification Enhances Learning & Engagement",
                },
                {
                  img: "/images/blogpage/1.png",
                  title: "5 Essential Skills to Boost Your Career in 2025",
                },
                {
                  img: "/images/blogpage/4.png",
                  title: "The Power of Microlearning",
                },
                {
                  img: "/images/blogpage/2.png",
                  title: "Revolutionizing the Way We Learn",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 mb-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Trends to Watch in 2025
                    </p>
                    <a
                      href="/downloads/sample.pdf"
                      download
                      className="text-lg font-bold hover:underline text-[#00418d]"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
