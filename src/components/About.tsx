import { Award, Briefcase, GraduationCap, Mail } from "lucide-react";
import photoImg from "../assets/Foto_Niati.jpeg";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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

export default function About() {
  const highlights = [
    {
      icon: (
        <GraduationCap
          size={18}
          style={{ color: "hsl(var(--color-purple))" }}
        />
      ),
      title: "Akademis Unggul (IPK 3.98)",
      description:
        "Lulus dengan predikat Cum Laude/Dean's List. Aktif sebagai asisten laboratorium pemrograman.",
    },
    {
      icon: (
        <Briefcase size={18} style={{ color: "hsl(var(--color-purple))" }} />
      ),
      title: "1 Tahun Magang Industri",
      description:
        "Berperan sebagai Full-Stack & UI/UX Engineer di perusahaan teknologi dengan alur kerja Agile/Scrum.",
    },
    {
      icon: <Award size={18} style={{ color: "hsl(var(--color-purple))" }} />,
      title: "Prestasi Kompetisi",
      description:
        "Memenangkan beberapa kompetisi IT nasional di bidang desain UI/UX dan web hackathon.",
    },
  ];

  return (
    <section
      id="about"
      className="section"
      style={{ backgroundColor: "hsl(var(--bg-secondary) / 0.4)" }}
    >
      <div className="container">
        <div className="section-header">
          <h2>Tentang Saya</h2>
          <p>
            Mengenal lebih dekat perjalanan akademis, pengalaman dalam
            mengembangkan berbagai proyek, serta motivasi saya dalam membangun
            solusi teknologi yang bermanfaat.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left Column: Clean Profile Info Card */}
          <div
            className="card"
            style={{
              textAlign: "center",
              padding: "36px 24px",
              backgroundColor: "hsl(var(--bg-card))",
              border: "1px solid hsl(var(--border-color))",
              borderRadius: "var(--radius-md)",
            }}
          >
            {/* User Profile Photo */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid hsl(var(--color-purple) / 0.3)",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "hsl(var(--bg-secondary))",
              }}
            >
              <img
                src={photoImg}
                alt="Niati"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              Niatii
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "hsl(var(--text-muted))",
                marginBottom: "24px",
                fontWeight: 500,
              }}
            >
              Fresh Graduate Tech Innovator
            </p>

            {/* Quick Details Table */}
            <div
              style={{
                textAlign: "left",
                fontSize: "0.85rem",
                borderTop: "1px solid hsl(var(--border-color))",
                paddingTop: "20px",
                marginBottom: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "hsl(var(--text-muted))" }}>Fokus</span>
                <span style={{ fontWeight: 600 }}>Web, AI, UI/UX</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "hsl(var(--text-muted))" }}>
                  Predikat IPK
                </span>
                <span style={{ fontWeight: 600 }}>3.92 (Cum Laude)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "hsl(var(--text-muted))" }}>
                  Pengalaman
                </span>
                <span style={{ fontWeight: 600 }}>1 Tahun Magang</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "hsl(var(--text-muted))" }}>Lokasi</span>
                <span style={{ fontWeight: 600 }}>Indonesia</span>
              </div>
            </div>

            {/* Minimal Social Links */}
            <div
              style={{ display: "flex", justifyContent: "center", gap: "12px" }}
            >
              <a
                href="https://github.com/Niatii"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "8px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "hsl(var(--bg-secondary))",
                  color: "hsl(var(--text-secondary))",
                  display: "inline-flex",
                }}
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/niatii"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "8px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "hsl(var(--bg-secondary))",
                  color: "hsl(var(--text-secondary))",
                  display: "inline-flex",
                }}
              >
                <LinkedinIcon />
              </a>
              <a
                href="niatiniati545@gmail.com"
                style={{
                  padding: "8px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "hsl(var(--bg-secondary))",
                  color: "hsl(var(--text-secondary))",
                  display: "inline-flex",
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Text Summary & Key Highlights */}
          <div style={{ textAlign: "left" }}>
            <h3
              style={{
                fontSize: "1.6rem",
                marginBottom: "16px",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              Menggabungkan Desain Fungsional dengan Kekuatan Kode & AI
            </h3>
            <p
              style={{
                color: "hsl(var(--text-secondary))",
                marginBottom: "20px",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              Sebagai lulusan baru di bidang teknologi informasi, saya berfokus
              menciptakan solusi digital yang bersih, terstruktur, dan
              menyelesaikan masalah nyata. Saya tidak hanya berfokus pada
              fungsionalitas di balik layar, tetapi juga merancang antarmuka web
              berpusat pada pengguna (user-centered) yang dipadukan dengan modul
              kecerdasan buatan (AI) secara praktis.
            </p>

            {/* Highlights list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "14px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "hsl(var(--bg-card))",
                    border: "1px solid hsl(var(--border-color))",
                  }}
                >
                  <div
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "hsl(var(--bg-secondary))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "hsl(var(--text-secondary))",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "14px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "hsl(var(--bg-card))",
                borderLeft: "3px solid hsl(var(--color-purple))",
                borderTop: "1px solid hsl(var(--border-color))",
                borderRight: "1px solid hsl(var(--border-color))",
                borderBottom: "1px solid hsl(var(--border-color))",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "hsl(var(--text-primary))",
                  fontSize: "0.85rem",
                }}
              >
                "Teknologi yang baik adalah teknologi yang mudah digunakan
                manusia dan cerdas dalam menyelesaikan persoalan mereka."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
