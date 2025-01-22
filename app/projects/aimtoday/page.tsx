'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AIMtoday() {
  const router = useRouter()

  const handleBack = () => {
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

    setTimeout(() => {
      overlay.style.width = '300vw'
      overlay.style.height = '300vh'
      overlay.style.top = '-50vh'
      overlay.style.right = '-50vw'
      rocket.style.transform = 'translate(calc(-100vw - 150px), calc(100vh + 150px)) rotate(220deg)'
    }, 50)

    setTimeout(() => {
      document.body.removeChild(overlay)
      document.body.removeChild(rocket)
      
      sessionStorage.setItem('scrollToContent', 'true')
      router.push('/')
    }, 800)
  }

  return (
    <div className="h-screen p-8 md:p-16 relative overflow-hidden">
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
      <div className="relative z-10 max-w-full h-full">
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
            <h2 className="text-6xl font-petale relative z-1">AIMtoday</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mt-12">
          <div className="space-y-8">
            <div className="font-objectivity">
              <h3 className="text-2xl text-paars mb-4">Over het project</h3>
              <p className="text-base font-[300] leading-relaxed text-gray-700 font-dm-sans">
                AIMtoday is een innovatief marketingnieuws platform ontwikkeld voor 2manydots. 
                Het project omvat een volledig responsive website die professionals voorziet van 
                de laatste trends en ontwikkelingen in de marketingwereld. Als ontwikkelaar was 
                ik verantwoordelijk voor cruciale componenten zoals de navbar, footer en home header.
              </p>
            </div>

            <div className="font-objectivity">
              <h3 className="text-2xl text-paars mb-4">Technieken</h3>
              <ul className="list-disc list-inside text-base font-[300] space-y-2 text-gray-700 font-dm-sans">
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Storyblok</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
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
                  href="https://aimtoday.nl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base font-[300] text-gray-700 hover:underline relative group font-dm-sans"
                >
                  aimtoday.nl
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

          <div className="space-y-8 flex flex-col items-end -mt-20">
            <div className="aspect-[16/10] bg-white rounded-lg overflow-hidden w-[80%] shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-paars">
              <Image
                src="/images/homepage.png"
                alt="AIMtoday Project Preview 1"
                width={1200}
                height={750}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="aspect-[16/10] bg-white rounded-lg overflow-hidden w-[80%] self-start shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-paars">
              <Image
                src="/images/interview.png"
                alt="AIMtoday Project Preview 2"
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
