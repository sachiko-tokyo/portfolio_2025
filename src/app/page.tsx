'use client'
import { div } from "framer-motion/client";
import { useState, useRef, useEffect } from 'react'
import Image from "next/image";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {

  return (
  <div>
    <Hero />
    <About />
    <Experience />
  </div>
  )
}
