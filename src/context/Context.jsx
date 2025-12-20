import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

// Context yaratish
const TestContext = createContext();

// Provider component
export const TestProvider = ({ children }) => {
  const [savedData, setSavedData] = useState(null);
  const [currentTest, setCurrentTest] = useState(null);

  // 🔹 Sahifa refresh bo‘lsa ham student yo‘qolmasligi uchun
  useEffect(() => {
    const student = localStorage.getItem('student');
    if (student) {
      setSavedData(JSON.parse(student));
    }
  }, []);

  // 🔹 Ro'yxatdan o'tish
  const register = async (firstName, lastName, phoneNumber) => {
    try {
      const result = await api.register({
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber
      });

      if (result.success) {
        setSavedData(result.student);
        localStorage.setItem('student', JSON.stringify(result.student));
        return result.student;
      }

      console.error('Registration failed:', result);
      return null;
    } catch (error) {
      console.error('Registration error:', error);
      return null;
    }
  };

  // 🔹 Test boshlash
  const startTest = async (testTypeId) => {
    if (!savedData?.id) {
      console.error('Student ro‘yxatdan o‘tmagan');
      return null;
    }

    try {
      const result = await api.startTest(savedData.id, testTypeId);

      if (result.success) {
        setCurrentTest(result.test);
        return result.test;
      }

      console.error('Start test failed:', result);
      return null;
    } catch (error) {
      console.error('Start test error:', error);
      return null;
    }
  };

  // Context value
  const value = {
    savedData,
    currentTest,
    register,
    startTest,
  };

  return (
    <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
  );
};

// Hook
export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestContext must be used within TestProvider');
  }
  return context;
};

// Backward compatibility
export const useProvide = useTestContext;
