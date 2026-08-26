import React from 'react';
import { Mail, Send, FileText, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'hsl(var(--bg-secondary) / 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'hsl(var(--color-purple) / 0.08)',
              color: 'hsl(var(--color-purple))',
              fontSize: '0.75rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Mail size={12} />
            <span>HUBUNGI SAYA</span>
          </div>
          <h2>Mari Kolaborasi & Berkarya Bersama</h2>
          <p>
            Tertarik untuk merekrut, bekerja sama dalam proyek AI/Web Dev, atau sekadar berdiskusi tentang UI/UX? Hubungi saya kapan saja!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'stretch',
            maxWidth: '960px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Links Card */}
          <div
            className="card"
            style={{
              padding: '36px',
              backgroundColor: 'hsl(var(--bg-card))',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              border: '1px solid hsl(var(--border-color))',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '12px' }}>
                Informasi Kontak
              </h3>
              <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '28px', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Silakan hubungi saya melalui jalur resmi di bawah ini untuk peluang karir, kolaborasi proyek, atau sekadar berdiskusi.
              </p>

              {/* List of clean contact links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
                <a
                  href="mailto:niatiniati545@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: 'hsl(var(--text-primary))',
                  }}
                  className="contact-link-row"
                >
                  <div style={{ padding: '8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'hsl(var(--color-purple) / 0.08)', color: 'hsl(var(--color-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>Email Resmi</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>niatiniati545@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/niatii"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: 'hsl(var(--text-primary))',
                  }}
                  className="contact-link-row"
                >
                  <div style={{ padding: '8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'hsl(var(--color-purple) / 0.08)', color: 'hsl(var(--color-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>LinkedIn</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>linkedin.com/in/niatii</div>
                  </div>
                </a>

                <a
                  href="https://github.com/Niatii"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: 'hsl(var(--text-primary))',
                  }}
                  className="contact-link-row"
                >
                  <div style={{ padding: '8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'hsl(var(--color-purple) / 0.08)', color: 'hsl(var(--color-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>GitHub</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>github.com/Niatii</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume CV Download sleeker section */}
            <div
              style={{
                borderTop: '1px solid hsl(var(--border-color))',
                paddingTop: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <FileText size={18} style={{ color: 'hsl(var(--color-purple))' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Unduh Curriculum Vitae</span>
              </div>
              <button
                className="btn btn-primary btn-sm"
                style={{ width: '100%', borderRadius: 'var(--radius-sm)' }}
                onClick={() => alert('Unduh CV: Berkas CV_Niati.pdf akan segera diunduh.')}
              >
                Unduh CV (PDF)
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="card"
            style={{
              padding: '36px',
              backgroundColor: 'hsl(var(--bg-card))',
              border: '1px solid hsl(var(--border-color))',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '20px', textAlign: 'left' }}>
              Kirim Pesan
            </h3>

            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px 0',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={40} style={{ color: 'hsl(var(--color-green))', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '6px', color: 'hsl(var(--color-green))' }}>
                  Pesan Terkirim!
                </h4>
                <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.85rem' }}>
                  Terima kasih atas pesan Anda. Saya akan segera menghubungi Anda kembali secepatnya.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                      color: 'hsl(var(--text-primary))',
                    }}
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid hsl(var(--border-color))',
                      backgroundColor: 'hsl(var(--bg-primary))',
                      color: 'hsl(var(--text-primary))',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                      color: 'hsl(var(--text-primary))',
                    }}
                  >
                    Email Kontak
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid hsl(var(--border-color))',
                      backgroundColor: 'hsl(var(--bg-primary))',
                      color: 'hsl(var(--text-primary))',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                      color: 'hsl(var(--text-primary))',
                    }}
                  >
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan atau detail penawaran kerja sama..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid hsl(var(--border-color))',
                      backgroundColor: 'hsl(var(--bg-primary))',
                      color: 'hsl(var(--text-primary))',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                  Kirim Pesan <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        .contact-link-row {
          transition: transform var(--transition-fast) !important;
        }
        .contact-link-row:hover {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
