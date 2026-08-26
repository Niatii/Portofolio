import { ArrowRight, Terminal } from 'lucide-react';

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
        paddingTop: '100px',
        paddingBottom: '60px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div style={{ textAlign: 'left' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'hsl(var(--color-purple) / 0.08)',
                border: '1px solid hsl(var(--color-purple) / 0.15)',
                color: 'hsl(var(--color-purple))',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              <span>FRESH GRADUATE PORTFOLIO</span>
            </div>

            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
              }}
              className="hero-title"
            >
              Membangun Web,{' '}
              <span style={{ color: 'hsl(var(--color-purple))' }}>Integrasi AI</span>, &{' '}
              <span style={{ color: 'hsl(var(--color-purple))' }}>UI/UX Desain</span> secara Presisi.
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'hsl(var(--text-secondary))',
                marginBottom: '32px',
                maxWidth: '560px',
                lineHeight: 1.6,
              }}
            >
              Saya adalah lulusan baru yang berfokus menciptakan solusi web modern, cerdas, 
              dan berpusat pada pengguna. Menghubungkan fungsionalitas kode yang andal, integrasi model AI, 
              dan estetika visual bersih yang terasah melalui pembuatan produk digital setiap semester.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#timeline" className="btn btn-primary">
                Lihat Portofolio <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Hubungi Saya
              </a>
            </div>

            {/* Quick Metrics (All Blue Theme) */}
            <div
              style={{
                display: 'flex',
                gap: '32px',
                marginTop: '48px',
                borderTop: '1px solid hsl(var(--border-color))',
                paddingTop: '24px',
              }}
              className="hero-metrics"
            >
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--color-purple))' }}>1 Tahun</div>
                <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>Magang Industri</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--color-purple))' }}>3.92 / 4.00</div>
                <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>IPK Cum Laude</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--color-purple))' }}>8+ Produk</div>
                <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>Karya Semester</div>
              </div>
            </div>
          </div>

          {/* Simple & Clean Browser/Code Editor Mockup on Right */}
          <div className="animate-float" style={{ width: '100%' }}>
            <div
              style={{
                backgroundColor: 'hsl(var(--bg-card))',
                border: '1px solid hsl(var(--border-color))',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden',
                textAlign: 'left',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  backgroundColor: 'hsl(var(--bg-secondary))',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid hsl(var(--border-color))',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }} />
                </div>
                <div
                  style={{
                    backgroundColor: 'hsl(var(--bg-card))',
                    fontSize: '0.75rem',
                    color: 'hsl(var(--text-muted))',
                    padding: '2px 24px',
                    borderRadius: '4px',
                    margin: '0 auto',
                    fontFamily: 'monospace',
                    border: '1px solid hsl(var(--border-color))',
                  }}
                >
                  niatii.dev/portfolio
                </div>
              </div>

              {/* Editor Code/Design Content */}
              <div style={{ padding: '24px', fontFamily: 'monospace', fontSize: '0.85rem', color: 'hsl(var(--text-secondary))', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'hsl(var(--color-purple))', fontWeight: 600, borderBottom: '1px solid hsl(var(--border-color))', paddingBottom: '8px' }}>
                  <Terminal size={14} />
                  <span>developer.ts</span>
                </div>
                
                <div>
                  <span style={{ color: 'hsl(var(--color-purple))' }}>const</span> <span style={{ color: 'hsl(var(--text-primary))' }}>profile</span> = &#123;
                  <div style={{ paddingLeft: '16px', marginTop: '4px' }}>
                    name: <span style={{ color: 'hsl(var(--color-blue))' }}>"Niatii"</span>,
                  </div>
                  <div style={{ paddingLeft: '16px' }}>
                    role: <span style={{ color: 'hsl(var(--color-blue))' }}>"Developer & Designer"</span>,
                  </div>
                  <div style={{ paddingLeft: '16px' }}>
                    focus: [<span style={{ color: 'hsl(var(--color-blue))' }}>"Web"</span>, <span style={{ color: 'hsl(var(--color-blue))' }}>"AI"</span>, <span style={{ color: 'hsl(var(--color-blue))' }}>"UI/UX"</span>],
                  </div>
                  <div style={{ paddingLeft: '16px' }}>
                    gpa: <span style={{ color: 'hsl(var(--color-purple))' }}>3.92</span>,
                  </div>
                  <div style={{ paddingLeft: '16px' }}>
                    internship: <span style={{ color: 'hsl(var(--color-blue))' }}>"1 Year"</span>,
                  </div>
                  <div style={{ paddingLeft: '16px' }}>
                    passion: <span style={{ color: 'hsl(var(--color-blue))' }}>"Crafting clean digital products"</span>
                  </div>
                  &#125;;
                </div>

                <div style={{ borderTop: '1px solid hsl(var(--border-color))', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ color: 'hsl(var(--text-muted))' }}>// Output:</span>
                  <div style={{ padding: '10px', backgroundColor: 'hsl(var(--bg-secondary))', borderRadius: '4px', fontSize: '0.8rem', color: 'hsl(var(--color-purple))' }}>
                    &gt; Running build... Successful. 0 errors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center !important;
          }
          .hero-grid > div {
            text-align: center !important;
            margin: 0 auto !important;
          }
          .hero-title {
            font-size: 2.4rem !important;
          }
          .hero-metrics {
            justify-content: center !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
