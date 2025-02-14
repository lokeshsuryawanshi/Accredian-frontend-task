// app/page.tsx
"use client";
import { Navbar } from './components/Navbar';
import ScrollNavigation from './components/ScrollNavigation';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollNavigation/>
      <Footer/>
    </>
  );
}
