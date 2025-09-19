import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

const ImageModal = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
  const modalRef = useRef(null)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
  }

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      handleNext()
    } else if (e.deltaY < 0) {
      handlePrevious()
    }
  }

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
          tabIndex={-1}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <FaTimes size={24} />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 text-white hover:text-gray-300 transition-all duration-300 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full backdrop-blur-sm border border-white border-opacity-20 hover:scale-110"
            >
              <FaChevronLeft size={24} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 text-white hover:text-gray-300 transition-all duration-300 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full backdrop-blur-sm border border-white border-opacity-20 hover:scale-110"
            >
              <FaChevronRight size={24} />
            </button>
          )}

          {/* Image with drag navigation */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl max-h-[90vh] mx-4"
          >
            <motion.img
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-xl shadow-2xl"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60 || info.velocity.x < -500) {
                  handleNext()
                } else if (info.offset.x > 60 || info.velocity.x > 500) {
                  handlePrevious()
                }
              }}
            />
          </motion.div>

          {/* Dots indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                    i === currentIndex ? 'bg-white scale-110 shadow-[0_0_0_3px_rgba(255,255,255,0.25)]' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Scroll hint */}
          {images.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              <span className="text-xs">Scroll or drag to navigate</span>
            </div>
          )}

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageModal
