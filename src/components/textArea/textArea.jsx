import React, { useState } from "react";

export default function EssayCommentForm({a}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Your comment has been submitted successfully!");
  };

  return (
    <div className="page fade-in">
      <main className="max-w-5xl mx-auto py-8 sm:px-6 lg:px-8">

        {/* Comment Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          {/* Essay / Letter Textarea */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Write your {a}
            </label>
            <textarea
              name="comment"
              rows="10"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Start writing here..."
              required
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Submit {a}
          </button>
        </form>
      </main>
    </div>
  );
}
