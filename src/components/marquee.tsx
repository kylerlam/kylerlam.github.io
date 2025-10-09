"use client"

import { ComponentPropsWithoutRef, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { techStackData } from "@/data/tech"
import { Button } from "@/components/ui/button"
import { LayoutGrid, ArrowLeft } from "lucide-react"
import { motion, useInView } from "framer-motion"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
  scrollTargetRef?: React.RefObject<HTMLDivElement>
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  scrollTargetRef,
  ...props
}: MarqueeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  // 提取所有 logo
  const logos = techStackData.flatMap((category) =>
    category.subcategories.flatMap((sub) =>
      sub.technologies.map((tech) => ({
        src: tech.logo,
        alt: tech.name,
      })),
    ),
  )

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-10"
    >
      {/* 跑马灯模式 */}
      {!showAll && (
        <>
          <div
            {...props}
            className={cn(
              "group flex overflow-hidden [--gap:3rem] [--duration:30s] gap-[var(--gap)] p-4",
              {
                "flex-row": !vertical,
                "flex-col": vertical,
              },
              className,
            )}
          >
            {Array(repeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn("flex shrink-0 justify-around gap-[var(--gap)]", {
                    "animate-marquee flex-row": !vertical,
                    "animate-marquee-vertical flex-col": vertical,
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                    "[animation-direction:reverse]": reverse,
                  })}
                >
                  {logos.map((logo, idx) => (
                    <div
                      key={`${logo.alt}-${i}-${idx}`}
                      className="flex items-center justify-center w-[50px] h-[50px] rounded-full"
                    >
                      <img src={logo.src} alt={logo.alt} width={64} height={64} />
                    </div>
                  ))}
                </div>
              ))}
          </div>

          {/* 展开按钮 */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowAll(true)}
              className="h-10 w-10"
              title="Show all technologies"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}

      {/* 展示全部技能模式 */}
      {showAll && (
        <div className="space-y-10 px-4">
          {/* 技能展示 */}
          {techStackData.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-xl font-semibold mb-4 text-center">
                {category.category}
              </h2>

              {category.subcategories.map((sub, subIndex) => (
                <div key={subIndex} className="mb-6">
                  <h3 className="text-sm text-muted-foreground mb-3 text-center">
                    {sub.name}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {sub.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center w-[80px]"
                      >
                        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white/5 border border-white/20">
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            width={36}
                            height={36}
                          />
                        </div>
                        <p className="text-xs mt-2 text-muted-foreground">
                          {tech.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* 返回按钮 */}
          <div className="flex justify-center mt-10 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setShowAll(false)
                scrollTargetRef?.current?.scrollIntoView({ behavior: "smooth" })
              }}
              className="h-10 w-10"
              title="Back to marquee"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
