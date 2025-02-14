// app/page.tsx
"use client";

import { useState } from 'react';
import ReferralModal from './components/ReferralModal';
import { Navbar } from './components/Navbar';
import ScrollNavigation from './components/ScrollNavigation';
import Footer from './components/Footer';
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <ScrollNavigation/>
      <Footer/>
    </>
  );
}
