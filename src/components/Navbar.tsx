import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Portofolio', href: '#timeline' },
    { name: 'Prestasi', href: '#achievements' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all var(--transition-normal)',
        padding: scrolled ? '16px 0' : '24px 0',
        backgroundColor: scrolled ? 'hsl(var(--bg-card) / 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid hsl(var(--border-color))' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          {/* Stylized Logo Icon */}
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, hsl(var(--color-purple)), hsl(var(--color-blue)))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(168, 85, 247, 0.25)",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 70 V30 H42 L58 56 V30 H70 V70 H58 L42 44 V70 H30 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <span
            style={{
              background: 'linear-gradient(135deg, hsl(var(--text-primary)), hsl(var(--text-muted)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Niati
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-menu">
          <div style={{ display: 'flex', gap: '24px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'hsl(var(--text-secondary))',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--color-purple))')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--text-secondary))')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              color: 'hsl(var(--text-primary))',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'hsl(var(--bg-secondary))',
              transition: 'background-color var(--transition-fast)',
            }}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              color: 'hsl(var(--text-primary))',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'hsl(var(--bg-secondary))',
            }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'hsl(var(--text-primary))',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'hsl(var(--bg-card))',
            borderBottom: '1px solid hsl(var(--border-color))',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: 'var(--shadow-lg)',
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'hsl(var(--text-secondary))',
                padding: '8px 0',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Inject Media Queries directly in inline style block to make it fully self-contained and clean */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
