import React, { useState, useMemo, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import CircularGallery from './CircularGallery'
import ScrollFloat from './ScrollFloat'
import FeatureModal from './FeatureModal'
import { useTheme } from '../context/ThemeContext'
import { triggerHaptic } from '../utils/haptics'

const Features = () => {
  const { theme } = useTheme()
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [cardPosition, setCardPosition] = useState(null)
  const hoverTimeoutRef = useRef(null)
  const galleryRef = useRef(null)
  
  const features = useMemo(() => [
    { 
      image: '/features cards/hyperlocal shortly.jpg', 
      text: '',
      title: 'Hyperlocal Articles',
      description: 'Get news that matters to your neighborhood. Our AI-powered system curates stories from your immediate area, ensuring you never miss what\'s happening around you.',
      highlights: [
        'Location-based news filtering',
        'Real-time local updates',
        'Community-focused stories',
        'Neighborhood safety alerts'
      ]
    },
    { 
      image: '/features cards/reels shortly.png', 
      text: '',
      title: 'Short Video Stories',
      description: 'Watch engaging video content that delivers news in bite-sized, easy-to-digest formats. Perfect for staying informed on the go.',
      highlights: [
        '60-second news summaries',
        'Visual storytelling',
        'Mobile-optimized videos',
        'Auto-play with captions'
      ]
    },
    { 
      image: '/features cards/qix shortly.png', 
      text: '',
      title: 'Quick News Cards',
      description: 'Swipe through beautifully designed news cards that present information clearly and concisely. Get the facts fast.',
      highlights: [
        'Card-based interface',
        'Swipe navigation',
        'Key facts highlighted',
        'Share-friendly format'
      ]
    },
    { 
      image: '/features cards/explained shortly.png', 
      text: '',
      title: 'Explained Stories',
      description: 'Complex topics broken down into simple, understandable explanations. Stay informed without the confusion.',
      highlights: [
        'Complex topics simplified',
        'Visual explanations',
        'Step-by-step breakdowns',
        'Context and background'
      ]
    },
    { 
      image: '/features cards/daily wrap shortly.png', 
      text: '',
      title: 'Daily Wrap-up',
      description: 'End your day with a comprehensive summary of everything that happened in your area. Never miss the big picture.',
      highlights: [
        'End-of-day summaries',
        'Top stories compilation',
        'Weekly trend analysis',
        'Personalized insights'
      ]
    },
    { 
      image: '/features cards/audio shortly.jpg', 
      text: '',
      title: 'Audio News',
      description: 'Listen to your local news while commuting, exercising, or multitasking. High-quality audio journalism for busy lifestyles.',
      highlights: [
        'Professional narration',
        'Offline listening',
        'Podcast-style format',
        'Speed control options'
      ]
    },
  ], [])

  const handleFeatureHover = useCallback((index, position) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    if (index >= 0 && index < features.length) {
      setHoveredIndex(index)
      
      // Throttle haptic feedback to reduce overhead
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => triggerHaptic('selection'));
      } else {
        triggerHaptic('selection');
      }
      
      // Set timeout to open modal after 1 second
      hoverTimeoutRef.current = setTimeout(() => {
        triggerHaptic('medium') // Medium haptic when modal opens
        // Get the card position from the gallery
        if (galleryRef.current) {
          const rect = galleryRef.current.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          setCardPosition({ x: centerX, y: centerY })
        }
        setSelectedFeature(features[index])
        setIsModalOpen(true)
        setHoveredIndex(null)
      }, 1000)
    }
  }, [features])

  const handleFeatureLeave = useCallback(() => {
    // Clear timeout when hover leaves
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredIndex(null)
  }, [])

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-0 w-full overflow-hidden scroll-mt-24">
      {/* Title section with constrained width */}
      <div className="max-w-screen-2xl mx-auto px-4 mb-8 sm:mb-12 md:mb-16">
        <div className="text-center">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='top bottom'
            scrollEnd='center center'
            stagger={0.04}
            containerClassName="mb-6 font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            textClassName={`text-solid`}
          >
            Features
          </ScrollFloat>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className={`text-base sm:text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
          >
            Everything you need to stay informed about your local community
          </motion.p>
        </div>
      </div>

      {/* Full-width gallery */}
      <motion.div
        ref={galleryRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-screen"
      >
        <CircularGallery 
          items={features}
          bend={3} 
          textColor={theme === 'light' ? '#1f2937' : '#ffffff'}
          borderRadius={0.05}
          font="bold 24px system-ui"
          scrollSpeed={2}
          scrollEase={0.05}
          onItemHover={handleFeatureHover}
          onItemLeave={handleFeatureLeave}
          hoveredIndex={hoveredIndex}
        />
      </motion.div>

      {/* Interaction hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className={`text-center text-sm sm:text-base mt-4 px-4 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}
      >
        <span className="hidden sm:inline">Click and drag to scroll • Hover to preview</span>
        <span className="sm:hidden">Tap and hold to view card details</span>
      </motion.p>

      {/* Feature Modal */}
      <FeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        feature={selectedFeature}
        cardPosition={cardPosition}
      />
    </section>
  )
}

export default Features