import { ArrowRight, Code, Cpu, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Decorative Orbs */}
      <div className="gradient-bg-orb orb-purple" />
      <div className="gradient-bg-orb orb-blue" style={{ bottom: '10%', left: '0%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Hero Content */}
          <div style={{ textAlign: 'left' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'hsl(var(--color-purple) / 0.1)',
                border: '1px solid hsl(var(--color-purple) / 0.2)',
                color: 'hsl(var(--color-purple))',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '24px',
              }}
            >
              <Cpu size={14} />
              <span>FRESH GRADUATE & TECH INNOVATOR</span>
            </div>

            <h1
              style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
                fontFamily: 'var(--font-heading)',
              }}
              className="hero-title"
            >
              Bridging{' '}
              <span style={{ color: 'hsl(var(--color-blue))' }}>Code</span>,{' '}
              <span style={{ color: 'hsl(var(--color-purple))' }}>AI</span>, &{' '}
              <span style={{ color: 'hsl(var(--color-orange))' }}>Design</span>{' '}
              to Create Smart Products.
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'hsl(var(--text-secondary))',
                marginBottom: '36px',
                maxWidth: '620px',
                lineHeight: 1.6,
              }}
            >
              Saya adalah pengembang teknologi yang berdedikasi menciptakan produk digital modern, 
              cerdas, dan intuitif. Mengombinasikan arsitektur web yang tangguh, integrasi AI, serta 
              desain antarmuka berpusat pada pengguna yang diuji lewat pembuatan produk setiap semester.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#timeline" className="btn btn-primary">
                Lihat Karya Semester <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Hubungi Saya
              </a>
            </div>

            {/* Quick Metrics */}
            <div
              style={{
                display: 'flex',
                gap: '40px',
                marginTop: '60px',
                borderTop: '1px solid hsl(var(--border-color))',
                paddingTop: '32px',
              }}
              className="hero-metrics"
            >
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--color-purple))' }}>1 Tahun</div>
                <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Pengalaman Magang</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--color-blue))' }}>3.90+</div>
                <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>IPK Akademik</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--color-orange))' }}>8+</div>
                <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Produk Semesteran</div>
              </div>
            </div>
          </div>

          {/* Interactive Hero Graphic (Web, AI, UI/UX illustration) */}
          <div className="animate-float" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '350px' }}>
            <svg
              viewBox="0 0 400 400"
              style={{
                width: '100%',
                maxHeight: '400px',
                overflow: 'visible',
              }}
            >
              {/* Central Glowing Shield */}
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--color-purple))" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="hsl(var(--color-purple))" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#glow)" />

              {/* Connecting Lines for Network Graph (AI Theme) */}
              <line x1="200" y1="90" x2="110" y2="240" stroke="hsl(var(--border-color))" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="200" y1="90" x2="290" y2="240" stroke="hsl(var(--border-color))" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="110" y1="240" x2="290" y2="240" stroke="hsl(var(--border-color))" strokeWidth="2" />
              
              <line x1="200" y1="90" x2="200" y2="200" stroke="hsl(var(--color-purple) / 0.4)" strokeWidth="1.5" />
              <line x1="110" y1="240" x2="200" y2="200" stroke="hsl(var(--color-blue) / 0.4)" strokeWidth="1.5" />
              <line x1="290" y1="240" x2="200" y2="200" stroke="hsl(var(--color-orange) / 0.4)" strokeWidth="1.5" />

              {/* Web Development Node (Top) */}
              <g transform="translate(200, 90)">
                <circle r="45" fill="hsl(var(--bg-card))" stroke="hsl(var(--color-purple))" strokeWidth="3" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))' }} />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'hsl(var(--color-purple))' }}>
                    <Code size={24} />
                  </div>
                </foreignObject>
                <text x="0" y="65" textAnchor="middle" fill="hsl(var(--text-primary))" fontWeight="600" fontSize="12">Web Development</text>
              </g>

              {/* AI & Intelligence Node (Left) */}
              <g transform="translate(110, 240)">
                <circle r="45" fill="hsl(var(--bg-card))" stroke="hsl(var(--color-blue))" strokeWidth="3" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))' }} />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'hsl(var(--color-blue))' }}>
                    <Cpu size={24} />
                  </div>
                </foreignObject>
                <text x="0" y="65" textAnchor="middle" fill="hsl(var(--text-primary))" fontWeight="600" fontSize="12">AI Integration</text>
              </g>

              {/* UI/UX Design Node (Right) */}
              <g transform="translate(290, 240)">
                <circle r="45" fill="hsl(var(--bg-card))" stroke="hsl(var(--color-orange))" strokeWidth="3" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))' }} />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'hsl(var(--color-orange))' }}>
                    <Palette size={24} />
                  </div>
                </foreignObject>
                <text x="0" y="65" textAnchor="middle" fill="hsl(var(--text-primary))" fontWeight="600" fontSize="12">UI/UX Design</text>
              </g>

              {/* Core Convergence Node (Center) */}
              <circle cx="200" cy="200" r="10" fill="hsl(var(--color-purple))">
                <animate attributeName="r" values="8;13;8" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="22" fill="none" stroke="hsl(var(--color-purple))" strokeWidth="1" opacity="0.5">
                <animate attributeName="r" values="18;28;18" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-grid > div {
            text-align: center !important;
            margin: 0 auto !important;
          }
          .hero-title {
            font-size: 2.8rem !important;
          }
          .hero-metrics {
            justify-content: center !important;
          }
        }
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.2rem !important;
          }
          .hero-metrics {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
