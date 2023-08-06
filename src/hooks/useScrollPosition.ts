import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  // 记录位置
  const [scrollX, setscrollX] = useState(0)
  const [scrollY, setscrollY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setscrollX(window.scrollX)
      setscrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}
