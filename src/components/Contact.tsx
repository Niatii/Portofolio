import { Mail } from "lucide-react";

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
  return (
    <section
      id="contact"
      className="section"
      style={{ backgroundColor: "hsl(var(--bg-secondary) / 0.4)" }}
    >
      <div className="container">
        <div
          className="card"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "40px",
            textAlign: "center",
            backgroundColor: "hsl(var(--bg-card))",
            border: "1px solid hsl(var(--border-color))",
            borderRadius: "var(--radius-md)",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Mari Kolaborasi & Berkarya Bersama
          </h2>

          <p
            style={{
              color: "hsl(var(--text-secondary))",
              marginBottom: "32px",
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}
          >
            Punya ide, proyek, atau peluang yang ingin dikembangkan bersama?
            Saya terbuka untuk kolaborasi di bidang Web Development, AI, dan
            UI/UX. Jangan ragu untuk menghubungi saya.
          </p>

          {/* List of clean contact links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "32px",
              textAlign: "left",
              maxWidth: "380px",
              margin: "0 auto 32px",
            }}
          >
            <a
              href="mailto:niatiniati545@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                color: "hsl(var(--text-primary))",
              }}
              className="contact-link-row"
            >
              <div
                style={{
                  padding: "8px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "hsl(var(--color-purple) / 0.08)",
                  color: "hsl(var(--color-purple))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mail size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "hsl(var(--text-muted))",
                  }}
                >
                  Email Resmi
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  niatiniati545@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/niati/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                color: "hsl(var(--text-primary))",
              }}
              className="contact-link-row"
            >
              <div
                style={{
                  padding: "8px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "hsl(var(--color-purple) / 0.08)",
                  color: "hsl(var(--color-purple))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LinkedinIcon size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "hsl(var(--text-muted))",
                  }}
                >
                  LinkedIn
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  linkedin.com/in/niati
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Niatii"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                color: "hsl(var(--text-primary))",
              }}
              className="contact-link-row"
            >
              <div
                style={{
                  padding: "8px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "hsl(var(--color-purple) / 0.08)",
                  color: "hsl(var(--color-purple))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GithubIcon size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "hsl(var(--text-muted))",
                  }}
                >
                  GitHub
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  github.com/Niatii
                </div>
              </div>
            </a>
          </div>

          {/* Resume CV Download sleeker section */}

        </div>
      </div>

      <style>{`
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
