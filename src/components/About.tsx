import { Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import visualImg from '../assets/visual.jpg';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap size={20} style={{ color: 'hsl(var(--color-purple))' }} />,
      title: 'Akademis Unggul (IPK 3.92)',
      description: 'Lulus dengan predikat Cum Laude/Dean\'s List. Aktif sebagai asisten laboratorium pemrograman.',
    },
    {
      icon: <Briefcase size={20} style={{ color: 'hsl(var(--color-blue))' }} />,
      title: '1 Tahun Magang Industri',
      description: 'Berperan sebagai Full-Stack & UI/UX Engineer di perusahaan teknologi dengan alur kerja Agile/Scrum.',
    },
    {
      icon: <Award size={20} style={{ color: 'hsl(var(--color-orange))' }} />,
      title: 'Prestasi Kompetisi',
      description: 'Memenangkan beberapa kompetisi IT nasional di bidang desain UI/UX dan web hackathon.',
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'hsl(var(--bg-secondary) / 0.5)' }}>
      <div className="container">
        <div className="section-header">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'hsl(var(--color-purple) / 0.1)',
              color: 'hsl(var(--color-purple))',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Sparkles size={12} />
            <span>PROFIL PROFESIONAL</span>
          </div>
          <h2>Tentang Saya</h2>
          <p>
            Mengenal lebih dekat latar belakang akademis, pengalaman industri, serta motivasi saya di dunia teknologi.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Visual Artwork */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid hsl(var(--border-color))',
              backgroundColor: 'hsl(var(--bg-card))',
            }}
            className="about-visual-container"
          >
            <img
              src={visualImg}
              alt="Teknologi, AI, dan Desain Integrasi"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform var(--transition-slow)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          {/* Right Column: Text Summary & Key Highlights */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: 600 }}>
              Menggabungkan Desain Estetis dengan Kekuatan Kode & AI
            </h3>
            <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '20px', fontSize: '1rem', lineHeight: 1.6 }}>
              Sebagai lulusan baru (fresh graduate) di bidang teknologi informasi, saya tidak hanya berfokus pada penulisan kode, tetapi juga bagaimana menciptakan solusi yang berpusat pada pengguna (user-centered). Persimpangan antara **Web Development**, **AI**, dan **UI/UX** adalah ruang bermain utama saya.
            </p>
            
            {/* Highlights list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'hsl(var(--bg-card))',
                    border: '1px solid hsl(var(--border-color))',
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'hsl(var(--bg-secondary))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'hsl(var(--bg-card))',
                borderLeft: '4px solid hsl(var(--color-purple))',
                borderTop: '1px solid hsl(var(--border-color))',
                borderRight: '1px solid hsl(var(--border-color))',
                borderBottom: '1px solid hsl(var(--border-color))',
              }}
            >
              <p style={{ fontStyle: 'italic', fontWeight: 500, color: 'hsl(var(--text-primary))', fontSize: '0.9rem' }}>
                "Teknologi yang baik adalah teknologi yang mudah digunakan manusia dan cerdas dalam menyelesaikan persoalan mereka."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-visual-container {
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
