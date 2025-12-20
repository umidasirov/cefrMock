import { useTestContext } from '../context/Context';

export default function Registration() {
  const { register, savedData } = useTestContext();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const student = await register(firstName, lastName, phoneNumber);
    
    if (student) {
      console.log('Registration successful!', student);
      // Navigate to test page
    } else {
      alert('Registration failed!');
    }
  };
  
  // ...
}