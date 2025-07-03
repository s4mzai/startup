// TODO: change this file from claude

"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"


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

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible"

      const h1Element = containerRef.current.querySelector("h1")!
      const { words } = splitText(h1Element)

      // Find the styled text words and apply font class and hover animation to them
      words.forEach((word) => {
        const span = word as HTMLElement
        const text = span.textContent?.trim()
        
        // Check if this word is part of the styled text
        if (styledText && text && styledText.includes(text)) {
          span.classList.add("londrina".split(' ')[0])
          // Also add inline styles as backup
          span.style.fontFamily = 'Londrina Shadow, cursive'
          span.style.fontWeight = '400'
          
          // Add hover animation styles
          span.style.position = 'relative'
          span.style.cursor = 'pointer'
          span.style.background = 'linear-gradient(to right, white 0%, white 50%, black 50%, black 100%)'
          span.style.backgroundSize = '200% 100%'
          span.style.backgroundPosition = '100% 0'
          span.style.webkitBackgroundClip = 'text'
          span.style.webkitTextFillColor = 'transparent'
          span.style.backgroundClip = 'text'
          span.style.transition = 'background-position 0.6s ease-in-out'
          
          // Add hover event listeners
          span.addEventListener('mouseenter', () => {
            span.style.backgroundPosition = '0% 0'
          })
          
          span.addEventListener('mouseleave', () => {
            span.style.backgroundPosition = '100% 0'
          })
        }
      })

      // Animate the words in the h1
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
    })
  }, [styledText])

  return (
    <div className={containerClassName} ref={containerRef}>
      <h1 className={className}>
        {normalText && normalText + " "}
        {styledText && (
          <span className="londrina">
            {styledText}
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
    `}</style>
  )
}

// Usage examples:
// <SplitText normalText="Welcome to" styledText="Paradise" />
// <SplitText normalText="Build Your" styledText="Dreams" />
// <SplitText styledText="Amazing" /> // Only styled text
// <SplitText normalText="Just Normal Text" /> // Only normal text