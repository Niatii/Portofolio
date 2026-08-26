import { ArrowRight } from "lucide-react";
import photoImg from "../assets/Foto_Niati.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "hsl(var(--color-purple) / 0.08)",
                border: "1px solid hsl(var(--color-purple) / 0.15)",
                color: "hsl(var(--color-purple))",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              <span>FRESH GRADUATE PORTFOLIO</span>
            </div>

            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
                fontFamily: "var(--font-heading)",
              }}
              className="hero-title"
            >
              Membangun Web,{" "}
              <span style={{ color: "hsl(var(--color-purple))" }}>
                Integrasi AI & UI/UX Desain
              </span>{" "}
              secara Presisi.
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                color: "hsl(var(--text-secondary))",
                marginBottom: "32px",
                maxWidth: "560px",
                lineHeight: 1.6,
              }}
            >
              Saya adalah lulusan baru yang berfokus pada pengembangan solusi
              web modern, cerdas, dan berpusat pada pengguna. Saya menggabungkan
              pengembangan aplikasi yang fungsional dan andal dengan integrasi
              teknologi AI serta desain visual yang bersih untuk membangun
              produk digital yang relevan dan bermanfaat.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
                display: "flex",
                gap: "32px",
                marginTop: "48px",
                borderTop: "1px solid hsl(var(--border-color))",
                paddingTop: "24px",
              }}
              className="hero-metrics"
            >
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "hsl(var(--color-purple))",
                  }}
                >
                  1 Tahun
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "hsl(var(--text-muted))",
                  }}
                >
                  Magang Industri
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "hsl(var(--color-purple))",
                  }}
                >
                  3.98 / 4.00
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "hsl(var(--text-muted))",
                  }}
                >
                  IPK Cum Laude
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "hsl(var(--color-purple))",
                  }}
                >
                  8+ Produk
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "hsl(var(--text-muted))",
                  }}
                >
                  Karya Semester
                </div>
              </div>
            </div>
          </div>

          {/* User Profile Photo on Right */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid hsl(var(--color-purple) / 0.15)",
                boxShadow: "var(--shadow-lg)",
                backgroundColor: "hsl(var(--bg-card))",
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
                  transition: "transform var(--transition-slow)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
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
