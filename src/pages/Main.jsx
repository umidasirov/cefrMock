import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import CEFRCart from '../components/CEFRCart'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg mb-6">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="w-12 h-12 text-white"
            />
          </div>

          <h1 className="text-neutral-dark mb-4 text-5xl font-extrabold tracking-tight">
            CEFR Mock Test Platform
          </h1>

          <p className="text-neutral-dark/80 text-lg max-w-3xl mx-auto">
            Welcome to the ultimate platform for mastering English proficiency.
            Sharpen your skills, take realistic mock tests, and achieve your
            CEFR goals with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8" data-aos="fade-up" data-aos-delay="200">
          <CEFRCart />
        </div>

        <div
          className="mt-16 text-center text-neutral-dark/60"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            Developed for aspiring learners in Uzbekistan and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}
