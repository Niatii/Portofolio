import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Navbar with theme support */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Semester-by-Semester Products Timeline */}
        <Timeline />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid hsl(var(--border-color))',
          padding: '40px 0',
          backgroundColor: 'hsl(var(--bg-card))',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: 'hsl(var(--text-secondary))',
        }}
      >
        <div className="container">
          <p>© {new Date().getFullYear()} Niati.dev. Hak Cipta Dilindungi.</p>
          <p style={{ marginTop: '8px', fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>
            Built with React, TypeScript, Vite & Lucide Icons.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
