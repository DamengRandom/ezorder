import React from 'react'
import Footer from "../atoms/Footer";
import Navbar from '../atoms/Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  )
}
