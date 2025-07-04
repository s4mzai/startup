"use client"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
import AnimatedText from "./fillText"

interface SplitTextProps {
  firstLine?: string
  secondLineNormal?: string
  styledText?: string
  className?: string
  containerClassName?: string
}

export default function SplitText({
  firstLine = "Launch Your",
  secondLineNormal = "Next Big",
  styledText = "Idea",
  className = "text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center",
  containerClassName = "w-full px-4 flex justify-center"
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstLineRef = useRef<HTMLSpanElement>(null)
  const secondLineNormalRef = useRef<HTMLSpanElement>(null)
  const styledTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return
      containerRef.current.style.visibility = "visible"

      const animations = []

      if (firstLineRef.current) {
        const { words } = splitText(firstLineRef.current)
        animations.push(
          animate(words, { opacity: [0, 1], y: [10, 0] }, {
            type: "spring",
            duration: 2,
            bounce: 0,
            delay: stagger(0.05),
          })
        )
      }

      if (secondLineNormalRef.current) {
        const { words } = splitText(secondLineNormalRef.current)
        animations.push(
          animate(words, { opacity: [0, 1], y: [10, 0] }, {
            type: "spring",
            duration: 2,
            bounce: 0,
            delay: stagger(0.05, { startDelay: 0.25 }),
          })
        )
      }

      if (styledTextRef.current) {
        const styledWords = styledTextRef.current.querySelectorAll(".styled-word")
        animations.push(
          animate(styledWords, { opacity: [0, 1], y: [10, 0] }, {
            type: "spring",
            duration: 2,
            bounce: 0,
            delay: stagger(0.05, { startDelay: 0.45 }),
          })
        )
      }
    })
  }, [firstLine, secondLineNormal, styledText])

  return (
    <div
      ref={containerRef}
      className={`${containerClassName} visibility-hidden`}
      style={{ visibility: "hidden" }}
    >
      <h1 className={className}>
        {/* Line 1 */}
        <div className="whitespace-nowrap">
          <span ref={firstLineRef}>{firstLine}</span>
        </div>

        {/* Line 2 */}
        <div className="whitespace-nowrap">
          <span ref={secondLineNormalRef}>{secondLineNormal}&nbsp;</span>
          <span ref={styledTextRef} className="relative">
            {styledText.split(" ").map((word, index) => (
              <span
                key={index}
                className="styled-word inline-block opacity-0 will-change-transform"
              >
                <AnimatedText text={word} className="inline-block text-inherit" />
                {index < styledText.split(" ").length - 1 && " "}
              </span>
            ))}
          </span>
        </div>
      </h1>
    </div>
  )
}
