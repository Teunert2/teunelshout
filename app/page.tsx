'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const secondPageRef = useRef<HTMLDivElement>(null)
  const [activePreview, setActivePreview] = useState<number | null>(null)

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
            className="absolute bottom-8 left-1/2 transform -translate-x-1/4 animate-bounce"
          >
          </button>
        </div>
      </main>

      {/* Second Page */}
      <div ref={secondPageRef} className="min-h-screen p-8 md:p-16 relative snap-start">
        {/* Add background image and overlay */}
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover z-[-1]"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#f8f0e2] bg-opacity-70 z-[-1]" />
        
        {/* Add relative wrapper for content */}
        <div className="relative z-10">
          {/* Education Section */}
          <section className="mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <h2 className="text-4xl  mb-8 font-display font-petale">ONDERWIJS</h2>
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
                  <p className="font-objectivity text-xl text-paars">of Applied Sciences</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
            <div className="flex items-center gap-8">
              <div className="relative inline-block">
                <div className="border-[2px] border-paars px-4 py-1">
                  <h2 className="text-4xl font-petale tracking-normal">SOFTWARE</h2>
                </div>
                <div className="absolute -left-[3px] -top-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>
                <div className="absolute -right-[3px] -top-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>
                <div className="absolute -left-[3px] -bottom-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>
                <div className="absolute -right-[3px] -bottom-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>
                
                <div className="absolute left-1/2 -top-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-x-1/2"></div>
                <div className="absolute left-1/2 -bottom-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-x-1/2"></div>
                <div className="absolute top-1/2 -left-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-y-1/2"></div>
                <div className="absolute top-1/2 -right-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-y-1/2"></div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#001E36] p-3 rounded">
                  <Image
                    src="/images/photoshop.png"
                    alt="Photoshop"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div className="bg-[#001E36] p-3 rounded">
                  <Image
                    src="/test.svg"
                    alt="Figma"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div className="bg-[#001E36] p-3 rounded">
                  <Image
                    src="/test.svg"
                    alt="Visual Studio"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-500 mt-32">
            <h2 className="text-4xl mb-6 font-display font-petale">CONTACT</h2>
            <div className="space-y-4">
              <Link 
                href="mailto:teunelshout@gmail.com"
                className="font-objectivity flex items-center gap-4 text-paars hover:underline"
              >
                <div className="rounded-full border border-current p-2">
                  <svg xmlns="http" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
          <div className="absolute top-16 right-48 w-96 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-700">
            <Image
              src="/images/teunelshout.png"
              alt="Portrait"
              width={400}
              height={600}
              className="grayscale sepia-[0.2] opacity-95 brightness-[0.98] contrast-[0.95]"
            />
            <div className="absolute bottom-[4rem] right-[-5rem]">
              <span className="font-handtekening text-[5rem] text-paars transform inline-block rotate-[-30deg] origin-bottom-right">Teun Elshout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen p-8 md:p-16 relative snap-start">
        {/* Add background image and overlay */}
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover z-0"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#f8f0e2] bg-opacity-70 z-0" />
        
        {/* Add relative wrapper for content */}
        <div className="relative z-10">
          <div className="relative mb-16">
            <div className="relative inline-block">
              <svg 
                className="absolute -top-8 -right-16 -left-16 h-40 w-[400px] z-0" 
                viewBox="0 0 400 150"
                style={{ transform: 'translate(-50%, -50%) rotate(20deg)', left: '50%', top: '50%' }}
              >
                <ellipse
                  cx="200"
                  cy="75"
                  rx="180"
                  ry="60"
                  fill="none"
                  strokeWidth="1.5"
                  className="stroke-paars"
                />
              </svg>
              <h2 className="text-6xl font-petale relative z-1">CONTENT</h2>
            </div>
          </div>

          <div className="relative h-[500px] mt-32 -ml-20">
            <svg className="w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0, 100)">
                <path
                  id="path-1-2"
                  d="M115,40 L580,300"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                <path
                  id="path-2-3"
                  d="M580,300 L900,100"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                <path
                  id="path-3-4"
                  d="M900,100 L1200,300"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                <path
                  id="path-4-5"
                  d="M1200,300 L1400,100"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                
                <image
                  id="square-1-2"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="115"
                  y="40"
                  transform="rotate(120, 115, 40)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project2.mouseenter; project2.mouseenter+5s"
                    repeatCount="1"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L465,260"
                    begin="project2.mouseenter; project2.mouseenter+5s"
                    repeatCount="1"
                    fill="remove"
                  />
                </image>

                <image
                  id="square-2-3"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="580"
                  y="300"
                  transform="rotate(45, 580, 300)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project3.mouseenter"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L320,-225"
                    begin="project3.mouseenter"
                    fill="remove"
                  />
                </image>

                <image
                  id="square-3-4"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="900"
                  y="100"
                  transform="rotate(120, 900, 100)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project4.mouseenter"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L300,195"
                    begin="project4.mouseenter"
                    fill="remove"
                  />
                </image>

                <image
                  id="square-4-5"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="1200"
                  y="300"
                  transform="rotate(45, 1200, 300)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project5.mouseenter"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L200,-225"
                    begin="project5.mouseenter"
                    fill="remove"
                  />
                </image>
                
                <g>
                  <g id="project1" 
                     className="cursor-pointer" 
                     onClick={() => {
                       if (activePreview === 1) {
                         // Create and animate overlay
                         const overlay = document.createElement('div');
                         overlay.style.position = 'fixed';
                         overlay.style.bottom = '-100px';
                         overlay.style.left = '-100px';
                         overlay.style.width = '100px';
                         overlay.style.height = '100px';
                         overlay.style.backgroundColor = '#f8f0e2';
                         overlay.style.transform = 'rotate(45deg)';
                         overlay.style.transition = 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
                         overlay.style.zIndex = '9999';
                         document.body.appendChild(overlay);

                         // Trigger diagonal animation
                         setTimeout(() => {
                           overlay.style.width = '300vw';
                           overlay.style.height = '300vh';
                           overlay.style.bottom = '-50vh';
                           overlay.style.left = '-50vw';
                         }, 50);

                         // Create rocket image
                         const rocket = document.createElement('img');
                         rocket.src = '/images/raketje.png';
                         rocket.style.position = 'fixed';
                         rocket.style.bottom = '0';
                         rocket.style.left = '0';
                         rocket.style.width = '150px';
                         rocket.style.height = '150px';
                         rocket.style.transform = 'rotate(48deg)';
                         rocket.style.transition = 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
                         rocket.style.zIndex = '10000';
                         document.body.appendChild(rocket);

                         // Animate rocket
                         setTimeout(() => {
                           rocket.style.transform = 'translate(calc(100vw + 150px), calc(-100vh - 150px)) rotate(48deg)';
                         }, 50);

                         // Navigate after animation
                         setTimeout(() => {
                           window.location.href = '/projects/upendo';
                         }, 800);
                       } else {
                         setActivePreview(1);
                       }
                     }}
                  >
                    <circle cx="115" cy="40" r="8" className="fill-paars" />
                    <text x="60" y="80" className="text-xl font-petale">Upendo</text>
                    
                    {activePreview === 1 && (
                      <foreignObject x="210" y="-30" width="370" height="120" style={{ zIndex: 10 }}>
                        <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-paars h-full flex gap-4 relative">
                          <div className="flex-1">
                            <h3 className="text-lg font-petale text-gray-800 mb-2">Upendo</h3>
                            <p className="text-sm font-objectivity text-black line-clamp-3">
                              Korte beschrijving van het project. Dit kan een paar regels tekst zijn die het project uitlegt.
                            </p>
                          </div>
                          <div className="w-32 h-full rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src="/path-to-your-image.jpg" 
                              alt="Project preview" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                  
                  <g id="project2" className="cursor-pointer" onClick={() => setActivePreview(activePreview === 2 ? null : 2)}>
                    <circle cx="580" cy="300" r="8" className="fill-paars" />
                    <text x="525" y="330" className="text-xl font-petale">Project 2</text>
                    
                    {activePreview === 2 && (
                      <foreignObject x="685" y="230" width="370" height="120" style={{ zIndex: 10 }}>
                        <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-paars h-full flex gap-4 relative">
                          <div className="flex-1">
                            <h3 className="text-lg font-petale text-gray-800 mb-2">Project 2</h3>
                            <p className="text-sm font-objectivity text-black line-clamp-3">
                              Korte beschrijving van het project. Dit kan een paar regels tekst zijn die het project uitlegt.
                            </p>
                          </div>
                          <div className="w-32 h-full rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src="/path-to-your-image.jpg" 
                              alt="Project preview" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                  
                  <g id="project3" className="cursor-pointer" onClick={() => setActivePreview(activePreview === 3 ? null : 3)}>
                    <circle cx="900" cy="100" r="8" className="fill-paars" />
                    <text x="845" y="80" className="text-xl font-petale">Project 3</text>
                    
                    {activePreview === 3 && (
                      <foreignObject x="715" y="-90" width="370" height="120" style={{ zIndex: 10 }}>
                        <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-paars h-full flex gap-4 relative">
                          <div className="flex-1">
                            <h3 className="text-lg font-petale text-gray-800 mb-2">Project 3</h3>
                            <p className="text-sm font-objectivity text-black line-clamp-3">
                              Korte beschrijving van het project. Dit kan een paar regels tekst zijn die het project uitlegt.
                            </p>
                          </div>
                          <div className="w-32 h-full rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src="/path-to-your-image.jpg" 
                              alt="Project preview" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                  
                  <g id="project4" className="cursor-pointer" onClick={() => setActivePreview(activePreview === 4 ? null : 4)}>
                    <circle cx="1200" cy="300" r="8" className="fill-paars" />
                    <text x="1145" y="330" className="text-xl font-petale">Project 4</text>
                    
                    {activePreview === 4 && (
                      <foreignObject x="1295" y="230" width="370" height="120" style={{ zIndex: 10 }}>
                        <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-paars h-full flex gap-4 relative">
                          <div className="flex-1">
                            <h3 className="text-lg font-petale text-gray-800 mb-2">Project 4</h3>
                            <p className="text-sm font-objectivity text-black line-clamp-3">
                              Korte beschrijving van het project. Dit kan een paar regels tekst zijn die het project uitlegt.
                            </p>
                          </div>
                          <div className="w-32 h-full rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src="/path-to-your-image.jpg" 
                              alt="Project preview" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                  
                  <g id="project5" className="cursor-pointer" onClick={() => setActivePreview(activePreview === 5 ? null : 5)}>
                    <circle cx="1400" cy="100" r="8" className="fill-paars" />
                    <text x="1345" y="80" className="text-xl font-petale">Project 5</text>
                    
                    {activePreview === 5 && (
                      <foreignObject x="1215" y="-90" width="370" height="120" style={{ zIndex: 10 }}>
                        <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-paars h-full flex gap-4 relative">
                          <div className="flex-1">
                            <h3 className="text-lg font-petale text-gray-800 mb-2">Project 5</h3>
                            <p className="text-sm font-objectivity text-black line-clamp-3">
                              Korte beschrijving van het project. Dit kan een paar regels tekst zijn die het project uitlegt.
                            </p>
                          </div>
                          <div className="w-32 h-full rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src="/path-to-your-image.jpg" 
                              alt="Project preview" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        rect {
          transform-box: fill-box;
          transform-origin: center;
        }
      `}</style>
    </div>
  )
}

