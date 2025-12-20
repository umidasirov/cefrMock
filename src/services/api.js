// src/services/api.js

const API_URL = 'http://127.0.0.1:8000/api';

export const api = {
  // ============================================
  // 1. TEST TYPES (TESTLAR RO'YXATI)
  // ============================================
  
  // Barcha testlarni olish
  getTestTypes: async () => {
    try {
      const res = await fetch(`${API_URL}/test-types/`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      return { success: true, tests: data };
    } catch (error) {
      console.error('Error fetching test types:', error);
      return { success: false, tests: [] };
    }
  },

  // Test batafsil ma'lumotini olish (qismlar va savollar bilan)
  getTestDetail: async (testTypeId) => {
    try {
      const res = await fetch(`${API_URL}/test-types/${testTypeId}/`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      return { success: true, test: data };
    } catch (error) {
      console.error('Error fetching test detail:', error);
      return { success: false, test: null };
    }
  },

  // Test qismlarini olish
  getTestParts: async (testTypeId) => {
    try {
      const res = await fetch(`${API_URL}/test-types/${testTypeId}/parts/`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      return { success: true, parts: data };
    } catch (error) {
      console.error('Error fetching test parts:', error);
      return { success: false, parts: [] };
    }
  },

  // ============================================
  // 2. STUDENT (RO'YXATDAN O'TISH)
  // ============================================
  
  // Ro'yxatdan o'tish
  register: async (data) => {
    try {
      const res = await fetch(`${API_URL}/students/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      return result; // Backend {success: true, student: {...}} qaytaradi
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: error.message };
    }
  },

  // Student ma'lumotlarini olish
  getStudent: async (studentId) => {
    try {
      const res = await fetch(`${API_URL}/students/${studentId}/`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      return { success: true, student: data };
    } catch (error) {
      console.error('Error fetching student:', error);
      return { success: false, student: null };
    }
  },

  // ============================================
  // 3. STUDENT TESTS (TEST BOSHQARISH)
  // ============================================
  
  // Test boshlash
  startTest: async (studentId, testTypeId) => {
    try {
      const res = await fetch(`${API_URL}/student-tests/start_test/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: studentId,
          test_type_id: testTypeId
        })
      });
      const result = await res.json();
      return result; // Backend {success: true, test: {...}} qaytaradi
    } catch (error) {
      console.error('Start test error:', error);
      return { success: false, message: error.message };
    }
  },

  // Student testini olish
  getStudentTest: async (studentTestId) => {
    try {
      const res = await fetch(`${API_URL}/student-tests/${studentTestId}/`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      return { success: true, test: data };
    } catch (error) {
      console.error('Error fetching student test:', error);
      return { success: false, test: null };
    }
  },

  // ============================================
  // 4. JAVOBLAR (ANSWER SUBMISSION)
  // ============================================
  
  // Bitta javobni yuborish
  submitAnswer: async (testId, answerData) => {
    try {
      const res = await fetch(`${API_URL}/student-tests/${testId}/submit_answer/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answerData)
      });
      const result = await res.json();
      return result;
    } catch (error) {
      console.error('Submit answer error:', error);
      return { success: false, message: error.message };
    }
  },

  // Ko'p javoblarni yuborish
  submitAnswers: async (testId, answers) => {
    try {
      const res = await fetch(`${API_URL}/student-tests/${testId}/submit_answers/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });
      const result = await res.json();
      return result;
    } catch (error) {
      console.error('Submit answers error:', error);
      return { success: false, message: error.message };
    }
  },

  // ============================================
  // 5. TEST YAKUNLASH VA NATIJALAR
  // ============================================
  
  // Testni yakunlash
  completeTest: async (testId) => {
    try {
      const res = await fetch(`${API_URL}/student-tests/${testId}/complete_test/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await res.json();
      return result;
    } catch (error) {
      console.error('Complete test error:', error);
      return { success: false, message: error.message };
    }
  },

  // Natijalarni olish
  getResults: async (testId) => {
    try {
      const res = await fetch(`${API_URL}/student-tests/${testId}/results/`);
      const result = await res.json();
      return result;
    } catch (error) {
      console.error('Get results error:', error);
      return { success: false, message: error.message };
    }
  },

  // Statistika olish
  getStatistics: async () => {
    try {
      const res = await fetch(`${API_URL}/student-tests/statistics/`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      return { success: true, statistics: data };
    } catch (error) {
      console.error('Error fetching statistics:', error);
      return { success: false, statistics: null };
    }
  },

  // ============================================
  // 6. HELPER FUNCTIONS
  // ============================================
  
  // Server statusini tekshirish
  checkServerStatus: async () => {
    try {
      const res = await fetch(`${API_URL}/test-types/`);
      if (!res.ok) throw new Error('Server is down');
      return { success: true, message: 'Server ishlayapti ✅' };
    } catch (error) {
      return { success: false, message: 'Server ishlamayapti ❌' };
    }
  }
};

// Default export ham qo'shish (ikkalasi ham ishlaydi)
export default api;