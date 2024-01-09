import { useEffect } from 'react';

const useWebAnalytics = () => {
  const websiteId = "bc298ad6-470b-4b26-8c87-3d8543602299"
  const analyticsUrl = "https://analytics.hope5d.com/umami.js"

  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.setAttribute("src", analyticsUrl)
    script.setAttribute("data-website-id", websiteId)

    document.head.appendChild(script)

    return () => {
        document.head.removeChild(script)
    }

  })
}

export default useWebAnalytics
