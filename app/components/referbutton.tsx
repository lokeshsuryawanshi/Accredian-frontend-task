"use client";

import { useState } from 'react';
import ReferralModal from '../components/ReferralModal';

export default function ReferButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className=" ">
        {/* <section className="flex flex-col justify-center items-center h-screen bg-blue-600 text-white"> */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white bg-blue-600 px-10 py-3 rounded-2xl shadow-lg transition duration-200 hover:bg-blue-700">Refer Now</button>
        {/* </section> */}

        {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </>
  );
}
