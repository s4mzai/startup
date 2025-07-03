"use client"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
import AnimatedText from "./fillText"

interface SplitTextProps {
  normalText?: string
  styledText?: string
  className?: string
  containerClassName?: string
}

export default function SplitText({
  normalText = "Launch Your Next Big",
  styledText = "Idea",
  className = "h1",
  containerClassName = "container"
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const normalTextRef = useRef<HTMLSpanElement>(null)
  const styledTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible"

      const animations = []

      // Animate normal text if it exists
      if (normalTextRef.current) {
        const { words } = splitText(normalTextRef.current)
        animations.push(
          animate(
            words,
            { opacity: [0, 1], y: [10, 0] },
            {
              type: "spring",
              duration: 2,
              bounce: 0,
              delay: stagger(0.05),
            }
          )
        )
      }

      // Animate styled text if it exists
      if (styledTextRef.current) {
        const styledWords = styledTextRef.current.querySelectorAll('.styled-word')
        const styledDelay = normalTextRef.current ? 0.25 : 0 // Delay if normal text exists
        
        animations.push(
          animate(
            styledWords,
            { opacity: [0, 1], y: [10, 0] },
            {
              type: "spring",
              duration: 2,
              bounce: 0,
              delay: stagger(0.05, { startDelay: styledDelay }),
            }
          )
        )
      }
    })
  }, [normalText, styledText])

  return (
    <div className={containerClassName} ref={containerRef}>
      <h1 className={className}>
        {normalText && (
          <span ref={normalTextRef}>
            {normalText + " "}
          </span>
        )}
        {styledText && (
          <span ref={styledTextRef} className="styled-text-wrapper">
            {styledText.split(' ').map((word, index) => (
              <span key={index} className="styled-word" style={{ opacity: 0 }}>
                <AnimatedText text={word} className="text-inherit inline-block" />
                {index < styledText.split(' ').length - 1 && ' '}
              </span>
            ))}
          </span>
        )}
      </h1>
      <Stylesheet />
    </div>
  )
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 420px;
        text-align: center;
        visibility: hidden;
      }

      .split-word {
        will-change: transform, opacity;
      }

      .styled-text-wrapper {
        position: relative;
      }

      .styled-word {
        will-change: transform, opacity;
        display: inline-block;
      }
    `}</style>
  )
}

// Usage examples:
// <SplitText normalText="Welcome to" styledText="Paradise" />
// <SplitText normalText="Build Your" styledText="Dreams" />
// <SplitText styledText="Amazing" /> // Only styled text
// <SplitText normalText="Just Normal Text" /> // Only normal text