import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data'
import ImageModal from './ImageModal'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  if (!project) {
    return (
      <div className="container-page py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
        <Link to="/" className="btn-primary">
          <FaArrowLeft /> Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="container-page py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 mb-8">
        <FaArrowLeft /> Back to Portfolio
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-zinc-300 mb-6" >{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && project.liveUrl.length > 0 && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl.length > 0 && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary bg-zinc-800 hover:bg-zinc-700"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="card p-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-zinc-300 leading-relaxed" style={{ whiteSpace: "pre-line" }}>{project.details}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden cursor-pointer group relative"
                onClick={() => openModal(index)}
              >
                <div className="w-full h-48 relative">
                  <img
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-zinc-200 items-center justify-center text-zinc-700">
                    <span className="text-sm">Image not found</span>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>

        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={project.images}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
        />
      </motion.div>
    </div>
  )
}

export default ProjectDetail
