import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Card from './ui/Card'
import Button from './ui/Button'

export default function CEFRCart() {
  const navigate = useNavigate()
  return (
    <Card className="p-8 transition-all hover:shadow-2xl hover:-translate-y-2 group bg-white/50 backdrop-blur-lg border border-white/20">
      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6 shadow-lg">
        <FontAwesomeIcon icon={faGlobe} className="w-10 h-10 text-white" />
      </div>

      <h2 className="text-neutral-dark mb-3 text-2xl font-bold">
        CEFR Proficiency Test
      </h2>

      <p className="text-neutral-dark/80 mb-6">
        A standardized measure of language proficiency, crucial for academic and
        professional opportunities worldwide.
      </p>

      <div className="space-y-3 text-neutral-dark">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
          <span className="font-semibold">Levels:</span> A1 (Beginner) to C2
          (Mastery)
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
          <span className="font-semibold">Skills:</span> Reading, Listening,
          Writing & Speaking
        </div>
      </div>

      <Button
        onClick={() => navigate('/registr')}
        variant="primary"
        className="w-full mt-8 text-lg py-3 group-hover:bg-secondary transition-colors"
      >
        Start Assessment
      </Button>
    </Card>
  )
}
