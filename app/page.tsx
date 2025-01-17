'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const secondPageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const sections = document.querySelectorAll('.animate-on-scroll')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSecondPage = () => {
    secondPageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* First Page */}
      <main className="h-screen relative snap-start">
        {/* Background Image */}
        <Image
          src="/images/achtergrond.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover z-0"
          quality={100}
          priority
        />

        <div className="absolute inset-0 bg-[#f8f0e2] bg-opacity-70 z-10" />

        <div className="relative z-20 h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-prettywise-black text-6xl md:text-8xl tracking-tight mb-[-3rem] ml-[-2.8rem]">
              2025
            </h1>
            <div className="font-prettywise-bold text-[10rem] ml-[-1.7rem] tracking-tight">
              <div className="mb-[-6rem] tracking-[5px]">PORT</div>
              <div className="tracking-[5px]">FOLIO</div>
            </div>
            <div className="relative mt-[-1rem]">
              <svg viewBox="0 0 400 80" className="w-96 h-24">
                <defs>
                  <path
                    id="curve"
                    d="M 20,40 Q 200,130 380,40"
                    fill="transparent"
                  />
                </defs>
                <text className="font-prettywise-bold text-2xl md:text-5xl fill-[#000000]" letterSpacing="0.1em">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Teun Elshout
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <nav className="w-full max-w-6xl mt-24">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#000000]" />
              
              <ul className="font-aventra flex justify-between py-8 px-2 text-lg md:text-xl">
                <li className="tracking-wider">
                  <span className="font-bold">WEB</span> DESIGN
                </li>
                <li className="tracking-wider">
                  SOCIAL MEDIA
                </li>
                <li className="tracking-wider">
                  <span className="font-bold">WEB</span> DEVELOPING
                </li>
                <li className="tracking-wider">
                  VIDEO EDITING
                </li>
                <li className="tracking-wider">
                  MARKETING
                </li>
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#000000]" />
            </div>
          </nav>

          <button 
            onClick={scrollToSecondPage}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-black"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>
      </main>

      {/* Second Page */}
      <div ref={secondPageRef} className="min-h-screen bg-[#FAF9F6] p-8 md:p-16 relative snap-start">
        {/* Education Section */}
        <section className="mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-4xl font-bold mb-8 font-display font-petale">ONDERWIJS</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="font-objectivity border border-paars rounded-full px-4 py-1 text-sm">
                2016 - 2023
              </div>
              <h3 className="font-objectivity text-xl text-paars">Theresialyceum</h3>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-objectivity border border-paars rounded-full px-4 py-1 text-sm">
                2023 - 2027
              </div>
              <div>
                <h3 className="font-objectivity text-xl text-paars">Fontys University</h3>
                <p className="text-xl text-paars">of Applied Sciences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
          <div className="border border-paars inline-block px-6 py-2 mb-6">
            <h2 className="text-3xl font-petale font-display">SOFTWARE</h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#001E36] p-3 rounded">
              <Image
                src="/placeholder.svg"
                alt="Photoshop"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="bg-[#001E36] p-3 rounded">
              <Image
                src="/placeholder.svg"
                alt="Figma"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="bg-[#001E36] p-3 rounded">
              <Image
                src="/placeholder.svg"
                alt="Visual Studio"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-500">
          <h2 className="text-4xl font-bold mb-6 font-display">CONTACT</h2>
          <div className="space-y-4">
            <Link 
              href="mailto:teunelshout@gmail.com"
              className="font-objectivity flex items-center gap-4 text-paars hover:underline"
            >
              <div className="rounded-full border border-current p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              teunelshout@gmail.com
            </Link>
            <Link 
              href="https://linkedin.com/in/teun-elshout-26002a259/"
              className="font-objectivity flex items-center gap-4 text-paars hover:underline"
            >
              <div className="rounded-full border border-current p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              linkedin.com/in/teun-elshout-26002a259/
            </Link>
          </div>
        </section>

        {/* Portrait Image */}
        <div className="absolute top-16 right-16 w-96 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-700">
          <Image
            src="/images/teunelshout.png"
            alt="Portrait"
            width={400}
            height={600}
            className="grayscale"
          />
          <div className="mt-4 text-right">
            <span className="font-signature text-4xl text-paars">Teun Elshout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

