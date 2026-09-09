import { useState, useEffect } from 'react'

export const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 1500) => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const shouldDelete = displayText === currentWord && !isDeleting

    if (shouldDelete) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords)
      return
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1))
        if (displayText.length === 1) {
          setIsDeleting(false)
          setWordIndex(prev => (prev + 1) % words.length)
        }
      } else {
        setDisplayText(prev => currentWord.slice(0, prev.length + 1))
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return { text: displayText, cursor: showCursor }
}