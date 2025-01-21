'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Upendo() {
  const router = useRouter()

  const handleBack = () => {
    // Create and animate overlay
    const overlay = document.createElement('div')
    overlay.style.position = 'fixed'
    overlay.style.top = '-100px'
    overlay.style.right = '-100px'
    overlay.style.width = '100px'
    overlay.style.height = '100px'
    overlay.style.backgroundColor = '#f8f0e2'
    overlay.style.transform = 'rotate(45deg)'
    overlay.style.transition = 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    overlay.style.zIndex = '9999'
    document.body.appendChild(overlay)

    // Create rocket image
    const rocket = document.createElement('img')
    rocket.src = '/images/raketje.png'
    rocket.style.position = 'fixed'
    rocket.style.top = '0'
    rocket.style.right = '0'
    rocket.style.width = '150px'
    rocket.style.height = '150px'
    rocket.style.transform = 'translate(0, 0) rotate(220deg)'
    rocket.style.transition = 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    rocket.style.zIndex = '10000'
    document.body.appendChild(rocket)

    // Trigger diagonal animation
    setTimeout(() => {
      overlay.style.width = '300vw'
      overlay.style.height = '300vh'
      overlay.style.top = '-50vh'
      overlay.style.right = '-50vw'
      rocket.style.transform = 'translate(calc(-100vw - 150px), calc(100vh + 150px)) rotate(220deg)'
    }, 50)

    // Navigate after animation and clean up elements
    setTimeout(() => {
      document.body.removeChild(overlay)
      document.body.removeChild(rocket)
      router.push('/')
      
      // Add a small delay before scrolling to the content section
      setTimeout(() => {
        const contentSection = document.getElementById('content')
        contentSection?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }, 800)
  }

  return (
    <div className="min-h-screen p-8 md:p-16 relative">
      {/* Back Button */}
      <button 
        onClick={handleBack}
        className="fixed top-8 right-8 z-20 group"
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-paars flex items-center justify-center bg-white/80 backdrop-blur-sm transition-transform group-hover:translate-x-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-paars"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </div>
          <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-white border-2 border-paars" />
          <div className="absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-white border-2 border-paars" />
        </div>
      </button>

      {/* Background Image and Overlay */}
      <Image
        src="/images/background.png"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover z-0"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#f8f0e2] bg-opacity-70 z-0" />
      
      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Title with circle decoration */}
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
            <h2 className="text-6xl font-petale relative z-1">UPENDO</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-16 mt-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="font-objectivity">
              <h3 className="text-2xl text-paars mb-4">Over het project</h3>
              <p className="text-lg">
                Upendo is een innovatief data-analytics platform ontwikkeld voor 2manydots. 
                Het project maakt bedrijfsdata toegankelijk en inzichtelijk zonder complexiteit. 
                Met vijf kernonderdelen - Configuratie, Optimalisaties, Visualisatie, Analyse en Training - 
                bieden we een oplossing voor datavraagstukken. Als ontwikkelaar heb ik 
                bijgedragen aan verschillende service pagina's en componenten.
              </p>
            </div>

            <div className="font-objectivity">
              <h3 className="text-2xl text-paars mb-4">Technieken</h3>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Next.js</li>
                <li>React</li>
                <li>Storyblok CMS</li>
                <li>TypeScript</li>
                <li>CSS</li>
                <li>Git</li>
              </ul>
            </div>

            <div className="font-objectivity">
              <h3 className="text-2xl text-paars mb-4">Website</h3>
              <div className="flex items-center gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-paars"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <a 
                  href="https://fontys-upendo.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg text-black hover:underline relative group"
                >
                  https://fontys-upendo.vercel.app/
                  <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-paars"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          

          {/* Right Column - Images */}
          <div className="space-y-8 flex flex-col items-end -mt-20">
            <div className="aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden w-[80%]">
              <Image
                src="/images/upendooptimalisation.png"
                alt="Upendo Project Preview 1"
                width={1200}
                height={750}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden w-[80%] self-start">
              <Image
                src="/images/upendo2.png"
                alt="Upendo Project Preview 2"
                width={1200}
                height={750}
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}