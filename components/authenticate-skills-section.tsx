'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AuthenticateSkillsSection() {
  const transition = {
    duration: 0.8,
    ease: [0.6, 0.01, 0.05, 0.95],
  }

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const leftBottomControls = useAnimation()
  const leftTopControls = useAnimation()
  const rightBottomControls = useAnimation()
  const rightTopControls = useAnimation()
  const headingControls = useAnimation()
  const textControls = useAnimation()

  const [step, setStep] = useState(0)

  useEffect(() => {
    const sequence = async () => {
      if (inView) {
        setStep(1)
        await Promise.all([
          leftBottomControls.start({ x: 0, opacity: 1, transition }),
          rightBottomControls.start({ x: 0, opacity: 1, transition }),
        ])

        setStep(2)
        await Promise.all([
          leftTopControls.start({ x: -40, opacity: 1, transition }), // offset beside bottom image
          rightTopControls.start({ x: 40, opacity: 1, transition }),
          headingControls.start({ y: 0, opacity: 1, transition }),
        ])

        setStep(3)
        await Promise.all([
          leftTopControls.start({ x: 0, transition }),
          rightTopControls.start({ x: 0, transition }),
          textControls.start({ opacity: 1, y: 0, transition }),
        ])
      } else {
        setStep(0)
        leftBottomControls.set({ x: -150, opacity: 0 })
        leftTopControls.set({ x: -150, opacity: 0 })
        rightBottomControls.set({ x: 150, opacity: 0 })
        rightTopControls.set({ x: 150, opacity: 0 })
        headingControls.set({ y: 60, opacity: 0 })
        textControls.set({ y: 20, opacity: 0 })
      }
    }

    sequence()
  }, [inView])

  return (
    <section ref={ref} className="py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Stack */}
          <div className="relative w-full md:w-1/3 h-[480px]">
            {/* Bottom Image */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={leftBottomControls}
              className="absolute top-6 left-6 w-full h-full rounded-xl shadow-md z-10"
            >
              <Image
                src="/images/homepage/skills_2.png"
                alt="Skill 2"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* Top Image beside bottom */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={leftTopControls}
              className={`absolute top-0 ${step >= 3 ? 'left-0' : 'left-[110px]'} w-full h-full rounded-xl shadow-xl z-20 transition-all duration-500`}
            >
              <Image
                src="/images/homepage/skills_1.png"
                alt="Skill 1"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>

          {/* Center Text */}
          <div className="w-full md:w-1/3 text-center space-y-6">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={headingControls}
              className="text-4xl font-bold text-[#00418d] leading-tight"
            >
              Authenticate Skills,
              <br />
              Simplify Hiring
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={textControls}
              className="text-gray-700 text-base md:text-lg"
            >
              SkillKwiz enables professionals to prove their abilities through secure,
              validated tests. With instant verified reports, you can skip the lengthy
              technical interviews and focus on hiring smarter.
            </motion.p>
          </div>

          {/* Right Stack */}
          <div className="relative w-full md:w-1/3 h-[480px]">
            {/* Bottom Image */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={rightBottomControls}
              className="absolute top-6 right-6 w-full h-full rounded-xl shadow-md z-10"
            >
              <Image
                src="/images/homepage/skills_4.png"
                alt="Skill 4"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* Top Image beside bottom */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={rightTopControls}
              className={`absolute top-0 ${step >= 3 ? 'right-0' : 'right-[110px]'} w-full h-full rounded-xl shadow-xl z-20 transition-all duration-500`}
            >
              <Image
                src="/images/homepage/skills_3.png"
                alt="Skill 3"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
