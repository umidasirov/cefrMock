import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useTestContext } from '../context/Context'
import Button from './ui/Button'
import Input from './ui/Input'
import Card from './ui/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const RegistrationForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  const navigate = useNavigate()
  const { savedData, register } = useTestContext()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+998',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '')
      let formatted = '+998'
      if (digits.length > 3) formatted += `(${digits.slice(3, 5)}`
      if (digits.length > 5) formatted += `) ${digits.slice(5, 8)}`
      if (digits.length > 8) formatted += `-${digits.slice(8, 10)}`
      if (digits.length > 10) formatted += `-${digits.slice(10, 12)}`
      setFormData({ ...formData, [name]: formatted.trim() })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Surname is required'
    const phoneRegex = /^\+998\(\d{2}\) \d{3}-\d{2}-\d{2}$/
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Phone number is invalid'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setLoading(true)
      const user = await register(
        formData.firstName,
        formData.lastName,
        formData.phone
      )
      setLoading(false)
      if (user) {
        navigate('/test')
      } else {
        setErrors({ ...errors, form: 'Registration failed. Please try again.' })
      }
    }
  }

  if (savedData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center p-4">
        <div className="max-w-md w-full" data-aos="fade-up">
          <Button variant="outline" onClick={() => navigate('/')} className="mb-6">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Home
          </Button>
          <Card className="p-8 text-center bg-white/50 backdrop-blur-lg border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 shadow-lg">
              <FontAwesomeIcon icon={faUser} className="text-white w-10 h-10" />
            </div>
            <h2 className="text-neutral-dark mb-2 text-3xl font-bold">
              Welcome, {savedData.first_name}!
            </h2>
            <p className="text-neutral-dark/80">
              You are already logged in. You can now proceed to the tests.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/test')}
              className="w-full mt-6"
            >
              Go to Tests
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full" data-aos="fade-up">
        <Button variant="outline" onClick={() => navigate('/')} className="mb-6">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Home
        </Button>
        <Card className="p-8 bg-white/50 backdrop-blur-lg border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 shadow-lg">
              <FontAwesomeIcon icon={faUser} className="text-white w-10 h-10" />
            </div>
            <h2 className="text-neutral-dark mb-2 text-3xl font-bold">
              User Registration
            </h2>
            <p className="text-neutral-dark/80">
              Please fill in your details to continue.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errors.form && <p className="text-error text-sm text-center bg-error/10 p-2 rounded-md">{errors.form}</p>}
            <div>
              <label htmlFor="firstName" className="block text-neutral-dark mb-2">
                First Name <span className="text-error">*</span>
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                disabled={loading}
              />
              {errors.firstName && <p className="text-error text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-neutral-dark mb-2">
                Last Name <span className="text-error">*</span>
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                disabled={loading}
              />
              {errors.lastName && <p className="text-error text-sm mt-1">{errors.lastName}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-neutral-dark mb-2">
                Phone Number <span className="text-error">*</span>
              </label>
              <div className="relative">
                <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998(90) 123-45-67"
                  className="pl-12"
                  disabled={loading}
                />
              </div>
              {errors.phone && <p className="text-error text-sm mt-1">{errors.phone}</p>}
            </div>
            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading ? 'Registering...' : 'Start Test'}
              {!loading && <FontAwesomeIcon icon={faArrowRight} className="ml-2" />}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default RegistrationForm
