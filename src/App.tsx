import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// 1. Definimos los textos en ambos idiomas
const translations = {
  es: {
    role: "Ingeniero en Sistemas | Desarrollador de Software | Entusiasta de Data Science",
    about: "Apasionado por el desarrollo de software, sistemas distribuidos y la inteligencia artificial. Actualmente trabajando en proyectos de RAG y análisis de datos.",
    likes: "Me gusta",
    downloadCV: "Descargar CV (Español)",
    cvFile: "/portafolio/CV Samuel Argueta-ES.pdf",
    projectsTitle: "🚀 Proyectos Destacados",
    project1Title: "Proyecto de Tesis: Chatbot RAG",
    project1Desc: "Desarrollo de un chatbot inteligente usando FastAPI, React y técnicas de Retrieval-Augmented Generation.",
    project2Title: "Patrones de Sistemas Distribuidos",
    project2Desc: "Implementación de patrones de diseño para sistemas escalables y resilientes.",
    connectTitle: "🌐 Conectemos",
    connectDesc: "¿Tienes una propuesta o quieres charlar de tecnología?",
    footer: "© 2026 - Desarrollado con React 19 + Vite"
  },
  en: {
    role: "Systems Engineer | Software Developer | Data Science Enthusiast",
    about: "Passionate about software development, distributed systems, and AI. Currently working on RAG projects and data analysis.",
    likes: "Likes",
    downloadCV: "Download Resume (English)",
    cvFile: "/portafolio/CV Samuel Argueta-EN.pdf",
    projectsTitle: "🚀 Featured Projects",
    project1Title: "Thesis Project: RAG Chatbot",
    project1Desc: "Developing an intelligent chatbot using FastAPI, React, and Retrieval-Augmented Generation techniques.",
    project2Title: "Distributed Systems Patterns",
    project2Desc: "Implementation of design patterns for scalable and resilient systems.",
    connectTitle: "🌐 Let's Connect",
    connectDesc: "Have a proposal or want to talk tech?",
    footer: "© 2026 - Built with React 19 + Vite"
  }
}

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [likes, setLikes] = useState(0)

  // Acceso directo a los textos según el idioma seleccionado
  const t = translations[lang]

  return (
    <>
      {/* Selector de Idioma Flotante */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100, display: 'flex', gap: '5px' }}>
        <button className={lang === 'es' ? 'active-lang' : ''} onClick={() => setLang('es')}>ES</button>
        <button className={lang === 'en' ? 'active-lang' : ''} onClick={() => setLang('en')}>EN</button>
      </div>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Samuel Argueta" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Samuel Argueta</h1>
          <p style={{ fontSize: '1.2rem', color: '#646cff', fontWeight: 'bold' }}>
            {t.role}
          </p>
          <p>{t.about}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
          <button className="counter" onClick={() => setLikes(likes + 1)}>
            ❤️ {likes} {t.likes}
          </button>
          
          {/* El enlace cambia según el idioma seleccionado */}
          <a href={t.cvFile} download className="counter" style={{ textDecoration: 'none', background: '#4a4a4a' }}>
            📥 {t.downloadCV}
          </a>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>{t.projectsTitle}</h2>
          <ul style={{ textAlign: 'left' }}>
            <li>
              <strong>{t.project1Title}</strong>
              <p>{t.project1Desc}</p>
            </li>
            <li>
              <strong>{t.project2Title}</strong>
              <p>{t.project2Desc}</p>
            </li>
          </ul>
        </div>

        <div id="social">
          <h2>{t.connectTitle}</h2>
          <p>{t.connectDesc}</p>
          <ul className="social-links">
            <li>
              <a href="https://github.com/Gustixa" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      
      <footer style={{ padding: '2rem', opacity: 0.6 }}>
        <p>{t.footer}</p>
      </footer>
    </>
  )
}

export default App