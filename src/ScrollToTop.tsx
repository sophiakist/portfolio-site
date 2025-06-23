import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash (like #work), let HashLink handle the scrolling
    if (hash) {
      return
    }
    // Otherwise, scroll to top
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
