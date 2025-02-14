// components/ReferralModal.tsx
"use client";

import React, { useState } from 'react';
import axios from 'axios';

type ReferralModalProps = {
  onClose: () => void;
};

type ReferralFormData = {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  courseName: string;
};

const ReferralModal: React.FC<ReferralModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<ReferralFormData>({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: '',
  });
  const [errors, setErrors] = useState<Partial<ReferralFormData> & { form?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Validate required fields and basic email formatting.
  const validate = (): Partial<ReferralFormData> => {
    const newErrors: Partial<ReferralFormData> = {};
    if (!formData.referrerName.trim()) newErrors.referrerName = 'Your name is required';
    if (!formData.referrerEmail.trim()) {
      newErrors.referrerEmail = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Enter a valid email';
    }
    if (!formData.refereeName.trim()) newErrors.refereeName = "Friend&apos;s name is required";
    if (!formData.refereeEmail.trim()) {
      newErrors.refereeEmail = "Friend&apos;s email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Enter a valid email';
    }
    if (!formData.courseName.trim()) newErrors.courseName = 'Course name is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      // Call the Express API (adjust the URL if needed)
      await axios.post('http://localhost:5001/api/referral', formData);
      setSuccessMessage('Referral submitted successfully!');
      // Optionally, close the modal after a short delay
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 2000);
    } catch (error: any) {
      console.error(error);
      setErrors({ form: error.response?.data?.message || 'An error occurred. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>

        {successMessage && <div className="bg-green-200 text-green-800 p-2 mb-4">{successMessage}</div>}
        {errors.form && <div className="bg-red-200 text-red-800 p-2 mb-4">{errors.form}</div>}

        <form onSubmit={handleSubmit} noValidate>
          {/* Referrer Name */}
          <div className="mb-4">
            <label htmlFor="referrerName" className="block mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="referrerName"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.referrerName && <p className="text-red-600 text-sm mt-1">{errors.referrerName}</p>}
          </div>

          {/* Referrer Email */}
          <div className="mb-4">
            <label htmlFor="referrerEmail" className="block mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="referrerEmail"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.referrerEmail && <p className="text-red-600 text-sm mt-1">{errors.referrerEmail}</p>}
          </div>

          {/* Referee Name */}
          <div className="mb-4">
            <label htmlFor="refereeName" className="block mb-1">
              Friend&apos;s Name
            </label>
            <input
              type="text"
              id="refereeName"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.refereeName && <p className="text-red-600 text-sm mt-1">{errors.refereeName}</p>}
          </div>

          {/* Referee Email */}
          <div className="mb-4">
            <label htmlFor="refereeEmail" className="block mb-1">
              Friend's Email
            </label>
            <input
              type="email"
              id="refereeEmail"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.refereeEmail && <p className="text-red-600 text-sm mt-1">{errors.refereeEmail}</p>}
          </div>

          {/* Course Name */}
          <div className="mb-4">
            <label htmlFor="courseName" className="block mb-1">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.courseName && <p className="text-red-600 text-sm mt-1">{errors.courseName}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            {submitting ? 'Submitting...' : 'Submit Referral'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
