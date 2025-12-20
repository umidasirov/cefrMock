import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useProvide } from "../context/Context";
const RegistrationForm = () => {
    const navigate = useNavigate();
    const { savedData } = useProvide()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "+998",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const digits = value.replace(/\D/g, "");

            let formatted = "+998";
            if (digits.length > 3) formatted += "-(" + digits.slice(3, 5);
            if (digits.length > 5) formatted += ")-" + digits.slice(5, 8);
            if (digits.length > 8) formatted += "-" + digits.slice(8, 10);
            if (digits.length > 10) formatted += "-" + digits.slice(10, 12);

            setFormData({ ...formData, [name]: formatted.trim() });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Surname is required";
        }

        const phoneRegex = /^\+998-\(\d{2}\)-\d{3}-\d{2}-\d{2}$/;

        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone number is invalid";
        }



        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem("registrationData", JSON.stringify(formData));
            console.log(localStorage.getItem('registrationData'));
            navigate("/test");
        }
    }
    console.log(localStorage.getItem('registrationData'));
    
    if (localStorage.getItem('registrationData') === null) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to test selection
                    </button>

                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4">
                                <FontAwesomeIcon icon={faUser} className="text-indigo-600 w-8 h-8" />
                            </div>
                            <h2 className="text-gray-900 mb-2">
                                User {savedData.firstName}
                            </h2>
                            <p className="text-gray-600">Click to the button for starting test</p>
                        </div>
                        <button
                            type="button"
                            onClick={()=>navigate('/test')}
                            className="w-full px-6 py-4 text-white rounded-xl flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700"
                        >
                            Start Test
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        <p className="text-center text-gray-500 mt-6">
                            Ma'lumotlaringiz xavfsiz saqlanadi va faqat test natijalari uchun ishlatiladi
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to test selection
                    </button>

                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4">
                                <FontAwesomeIcon icon={faUser} className="text-indigo-600 w-8 h-8" />
                            </div>
                            <h2 className="text-gray-900 mb-2">Registration</h2>
                            <p className="text-gray-600">CEFR Test - Please fill in your details to continue</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 border-gray-300 focus:ring-indigo-200"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 border-gray-300 focus:ring-indigo-200"
                                />
                                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+998 90 123 45 67"
                                        className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 border-gray-300 focus:ring-indigo-200"
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-4 text-white rounded-xl flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700"
                            >
                                Start Test
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>

                        <p className="text-center text-gray-500 mt-6">
                            Ma'lumotlaringiz xavfsiz saqlanadi va faqat test natijalari uchun ishlatiladi
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default RegistrationForm;
