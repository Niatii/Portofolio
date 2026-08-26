import React from "react";
import {
  Trophy,
  Star,
  BookOpen,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import certHackathon1 from "../assets/Sertifikat_Hackethon_1.jpg";
import certHackathon2 from "../assets/Sertifikat_Hackethon_2.jpg";
import certDeltaIota from "../assets/sertifikat_delta_iota.jpg";
import batam1 from "../assets/batam_1.jpeg";
import batam2 from "../assets/batam_2.jpeg";
import batam3 from "../assets/batam_3.jpeg";
import ui1 from "../assets/ui_1.jpeg";
import ui2 from "../assets/ui_2.jpeg";
import ui3 from "../assets/ui_3.jpeg";

const GithubIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface Achievement {
  badgeText: string;
  themeColor: string;
  glowColor: string;
  icon: React.ReactNode;
  title: string;
  event: string;
  desc: string;
  credentialId: string;
  badgeSvg: React.ReactNode;
  details: {
    date: string;
    role?: string;
    figmaUrl?: string;
    githubUrl?: string;
    githubUrls?: { label: string; url: string }[];
    demoUrl?: string;
    features?: string[];
    extraCertSlides?: React.ReactNode[];
    documentationSlides?: React.ReactNode[];
  };
}

export default function Achievements() {
  const [activeAch, setActiveAch] = React.useState<Achievement | null>(null);
  const [currentCertIdx, setCurrentCertIdx] = React.useState(0);
  const [currentDocIdx, setCurrentDocIdx] = React.useState(0);
  const [lightboxImg, setLightboxImg] = React.useState<string | null>(null);

  const achievementsList: Achievement[] = [
    {
      badgeText: "🥈 1st Runner Up",
      themeColor: "hsl(var(--color-purple))",
      glowColor: "rgba(168, 85, 247, 0.15)",
      icon: <Trophy size={22} style={{ color: "#C0C0C0" }} />, // Silver Trophy
      title: "1st Runner Up Batam Singapore Hackathon 2026",
      event: "Batam Singapore Hackathon 2026",
      desc: "Meraih posisi 1st Runner Up dalam Batam Singapore 2026 Hackathon melalui pengembangan MOYA, platform pariwisata inklusif berbasis AI yang menggabungkan DSS untuk rekomendasi perjalanan dan computer vision untuk pelaporan sampah.",
      credentialId: "BSH-2026-RUN-042",
      badgeSvg: (
        <img
          src={certHackathon1}
          alt="Sertifikat Hackathon 1"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "140px",
            objectFit: "contain",
            borderRadius: "4px",
            cursor: "zoom-in",
          }}
          onClick={() => setLightboxImg(certHackathon1)}
        />
      ),
      details: {
        date: "Agustus 2026",
        role: "Frontend Web Developer & Team Leader",
        figmaUrl: "",
        githubUrls: [
          {
            label: "GitHub: Mobile App (Flutter)",
            url: "https://github.com/lilChiie/Moya-Frontend-Mobile",
          },
          {
            label: "GitHub: Web (Vue/Quasar)",
            url: "https://github.com/lilChiie/Moya-Frontend-Web",
          },
          {
            label: "GitHub: Backend API (Flask)",
            url: "https://github.com/lilChiie/Moya-Backend",
          },
        ],
        demoUrl: "https://youtu.be/-4TVD3-iqFo",
        features: [
          "Mengembangkan platform pariwisata inklusif berbasis AI untuk membantu pengguna menemukan destinasi sesuai kebutuhan aksesibilitas, anggaran, durasi, dan kebersihan.",
          "Mengintegrasikan DSS + SAW untuk rekomendasi itinerary dan YOLO11s untuk deteksi sampah berbasis computer vision.",
          "Mengembangkan ekosistem mobile app, web, dan backend API menggunakan Flutter, Vue/Quasar, dan Python Flask.",
          "Berkolaborasi dalam tim Gas Terus dan menyelesaikan pengembangan serta pitching MOYA dalam 16 jam pada Batam Singapore 2026 Hackathon, hingga meraih 1st Runner Up.",
        ],
        extraCertSlides: [
          <div
            key="cert-slide-2"
            style={{ width: "100%", textAlign: "center" }}
          >
            <img
              src={certHackathon2}
              alt="Sertifikat Hackathon 2"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "140px",
                objectFit: "contain",
                borderRadius: "4px",
                cursor: "zoom-in",
              }}
              onClick={() => setLightboxImg(certHackathon2)}
            />
          </div>,
        ],
        documentationSlides: [
          <div
            key="doc-slide-1"
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundColor: "hsl(var(--bg-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-sm)",
              border: "1px solid hsl(var(--border-color))",
              overflow: "hidden",
            }}
          >
            <img
              src={batam1}
              alt="Kerja Sama Tim Lintas Batas"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "zoom-in",
              }}
              onClick={() => setLightboxImg(batam1)}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#fff",
                padding: "6px 12px",
                fontSize: "0.75rem",
                backdropFilter: "blur(4px)",
                textAlign: "left",
              }}
            ></div>
          </div>,
          <div
            key="doc-slide-2"
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundColor: "hsl(var(--bg-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-sm)",
              border: "1px solid hsl(var(--border-color))",
              overflow: "hidden",
            }}
          >
            <img
              src={batam2}
              alt="Sesi Presentasi Akhir (Pitching)"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "zoom-in",
              }}
              onClick={() => setLightboxImg(batam2)}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#fff",
                padding: "6px 12px",
                fontSize: "0.75rem",
                backdropFilter: "blur(4px)",
                textAlign: "left",
              }}
            ></div>
          </div>,
          <div
            key="doc-slide-3"
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundColor: "hsl(var(--bg-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-sm)",
              border: "1px solid hsl(var(--border-color))",
              overflow: "hidden",
            }}
          >
            <img
              src={batam3}
              alt="Penerimaan Penghargaan Pemenang"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "zoom-in",
              }}
              onClick={() => setLightboxImg(batam3)}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#fff",
                padding: "6px 12px",
                fontSize: "0.75rem",
                backdropFilter: "blur(4px)",
                textAlign: "left",
              }}
            >
            
            </div>
          </div>,
        ],
      },
    },
    {
      badgeText: "TOP 10 FINALIST",
      themeColor: "#3b82f6",
      glowColor: "rgba(59, 130, 246, 0.15)",
      icon: <Star size={22} style={{ color: "#3b82f6" }} />,
      title: "Top 10 Finalist — AI Innovation Challenge",
      event: "Del AI Hackethon Tourism 2026",
      desc: "Masuk dalam jajaran 10 besar finalis nasional Del AI Hackathon 2026 melalui pengembangan solusi AI untuk mendukung pengelolaan pariwisata dan kebersihan kawasan Danau Toba.",
      credentialId: "AI-2025-FIN-012",
      badgeSvg: (
        <svg
          viewBox="0 0 100 100"
          width="80"
          height="80"
          style={{ display: "block", margin: "0 auto" }}
        >
          <defs>
            <linearGradient
              id="blue-shield"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient
              id="silver-star"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F3F4F6" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>
          <path
            d="M50 15 L78 25 L78 55 C78 70 65 80 50 85 C35 80 22 70 22 55 L22 25 Z"
            fill="url(#blue-shield)"
            stroke="#1E40AF"
            strokeWidth="1.5"
          />
          <path
            d="M50 20 L72 28 L72 53 C72 65 62 74 50 78 C38 74 28 65 28 53 L28 28 Z"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <path
            d="M50 30 L54 40 L64 40 L56 47 L59 57 L50 51 L41 57 L44 47 L36 40 L46 40 Z"
            fill="url(#silver-star)"
            stroke="#4B5563"
            strokeWidth="0.5"
          />
          <text
            x="50"
            y="69"
            textAnchor="middle"
            fontSize="6.5"
            fill="#E0F2FE"
            fontWeight="bold"
          >
            FINALIST
          </text>
        </svg>
      ),
      details: {
        date: "Agustus 2026",
        role: "AI, Frontend Developer & Team Leader",
        githubUrls: [
          {
            label: "GitHub: Frontend",
            url: "https://github.com/lilChiie/Mavion-Frontend",
          },
          {
            label: "GitHub: Backend API",
            url: "https://github.com/lilChiie/Mavion-Backend",
          },
        ],
        demoUrl: "https://youtu.be/2ldw4lseucM",
        features: [
          "Computer vision untuk deteksi sampah (YOLOv11s).",
          "Sentiment analysis untuk menganalisis tanggapan pengguna.",
          "DSS dan data spasial untuk mendukung pengambilan keputusan.",
          "Kategori risiko untuk membantu menentukan prioritas penanganan sampah.",
        ],
      },
    },
    {
      badgeText: "Juara 3 — UI/UX IT FEST 2025",
      themeColor: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.15)",
      icon: <BookOpen size={22} style={{ color: "#10b981" }} />,
      title:
        "BridgeUp: A Digital Transformation Platform for Student Organizations",
      event: "IT FEST 2025 — UI/UX Design",
      desc: "Merancang prototype platform digital untuk membantu organisasi mahasiswa mengelola kegiatan, anggota, komunikasi, dan aktivitas organisasi secara lebih terstruktur dan terintegrasi.",
      credentialId: "UNI-CS-GRAD-398",
      badgeSvg: (
        <img
          src={certDeltaIota}
          alt="Sertifikat BridgeUp"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "140px",
            objectFit: "contain",
            borderRadius: "4px",
            cursor: "zoom-in",
          }}
          onClick={() => setLightboxImg(certDeltaIota)}
        />
      ),
      details: {
        date: "Oktober 2025",
        role: "UI/UX Designer",
        figmaUrl:
          "http://figma.com/proto/nwGHFOKuu7lrlJ6kBpag18/Delta-Iota?node-id=0-1&t=MGHfRWEb7ba9vqio-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=403%3A7180&show-proto-sidebar=1&fuid=1548728626651457395",
        features: [
          "Merancang pengalaman pengguna untuk pengurus, anggota, manajemen, dan guest.",
          "Mendesain user flow dan antarmuka untuk manajemen organisasi, acara, rapat, forum, dan profil.",
          "Mengembangkan fitur notifikasi, reminder, leaderboard, badge, dan reward untuk meningkatkan keterlibatan pengguna.",
          "Menghasilkan interactive prototype menggunakan Figma.",
        ],
        documentationSlides: [
          <div
            key="doc-slide-1"
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundColor: "hsl(var(--bg-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-sm)",
              border: "1px solid hsl(var(--border-color))",
              overflow: "hidden",
            }}
          >
            <img
              src={ui1}
              alt="Sesi Brainstorming & Wireframing"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "zoom-in",
              }}
              onClick={() => setLightboxImg(ui1)}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#fff",
                padding: "6px 12px",
                fontSize: "0.75rem",
                backdropFilter: "blur(4px)",
                textAlign: "left",
              }}
            ></div>
          </div>,
          <div
            key="doc-slide-2"
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundColor: "hsl(var(--bg-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-sm)",
              border: "1px solid hsl(var(--border-color))",
              overflow: "hidden",
            }}
          >
            <img
              src={ui2}
              alt="Desain Antarmuka High-Fidelity"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "zoom-in",
              }}
              onClick={() => setLightboxImg(ui2)}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#fff",
                padding: "6px 12px",
                fontSize: "0.75rem",
                backdropFilter: "blur(4px)",
                textAlign: "left",
              }}
            ></div>
          </div>,
          <div
            key="doc-slide-3"
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundColor: "hsl(var(--bg-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-sm)",
              border: "1px solid hsl(var(--border-color))",
              overflow: "hidden",
            }}
          >
            <img
              src={ui3}
              alt="Pitching & Demo Interaktif"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "zoom-in",
              }}
              onClick={() => setLightboxImg(ui3)}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#fff",
                padding: "6px 12px",
                fontSize: "0.75rem",
                backdropFilter: "blur(4px)",
                textAlign: "left",
              }}
            >
             
            </div>
          </div>,
        ],
      },
    },
  ];

  return (
    <section
      id="achievements"
      className="section"
      style={{ backgroundColor: "hsl(var(--bg-secondary) / 0.15)" }}
    >
      <div className="container">
        <div className="section-header">
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800 }}>
            Kompetisi & Pencapaian Akademis
          </h2>
          <p style={{ maxWidth: "680px", margin: "0 auto" }}>
            Bukti nyata dedikasi saya dalam bersaing, berinovasi, dan menjaga
            standar kualitas terbaik di tingkat akademis maupun nasional.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {achievementsList.map((ach, idx) => (
            <div
              key={idx}
              className="card achievement-card"
              onClick={() => {
                setActiveAch(ach);
                setCurrentCertIdx(0);
                setCurrentDocIdx(0);
              }}
              style={
                {
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  padding: "24px",
                  border: "1px solid hsl(var(--border-color))",
                  backgroundColor: "hsl(var(--bg-card))",
                  borderRadius: "var(--radius-md)",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  height: "100%",
                  boxShadow: "var(--shadow-sm)",
                  overflow: "hidden",
                  cursor: "pointer",
                  "--hover-border": ach.themeColor,
                } as React.CSSProperties
              }
            >
              {/* Header Row: Icon and Badge inline */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "8px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: `${ach.themeColor}08`,
                    border: `1px solid ${ach.themeColor}15`,
                  }}
                >
                  {ach.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    padding: "3px 6px",
                    borderRadius: "4px",
                    backgroundColor: `${ach.themeColor}10`,
                    color: ach.themeColor,
                    border: `1px solid ${ach.themeColor}20`,
                    letterSpacing: "0.01em",
                  }}
                >
                  {ach.badgeText}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "4px",
                  fontWeight: 800,
                  lineHeight: 1.4,
                }}
              >
                {ach.title}
              </h3>

              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "hsl(var(--text-muted))",
                  marginBottom: "16px",
                }}
              >
                {ach.event}
              </div>

              <p
                style={{
                  color: "hsl(var(--text-secondary))",
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                  marginBottom: "24px",
                }}
              >
                {ach.desc}
              </p>

              {/* Action Button: Open Detail Modal */}
              <div
                style={{
                  marginTop: "auto",
                  borderTop: "1px solid hsl(var(--border-color))",
                  paddingTop: "16px",
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveAch(ach);
                    setCurrentCertIdx(0);
                    setCurrentDocIdx(0);
                  }}
                  style={
                    {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      width: "100%",
                      justifyContent: "center",
                      padding: "8px 14px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "hsl(var(--bg-secondary))",
                      border: "1px solid hsl(var(--border-color))",
                      color: "hsl(var(--text-primary))",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "--hover-bg": ach.themeColor,
                    } as React.CSSProperties
                  }
                  className="verify-cert-btn"
                >
                  <CheckCircle
                    size={12}
                    style={{ color: ach.themeColor }}
                    className="verify-icon"
                  />
                  <span>Lihat Detail & Dokumen</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup Detail System */}
      {activeAch && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(6, 8, 20, 0.8)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            animation: "fadeIn 0.2s ease-out",
          }}
          onClick={() => setActiveAch(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "680px",
              backgroundColor: "hsl(var(--bg-card))",
              border: "1px solid stroke hsl(var(--border-color))",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              position: "relative",
              overflow: "hidden",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Top Ribbon */}
            <div
              style={{ height: "4px", backgroundColor: activeAch.themeColor }}
            />

            {/* Modal Close Button */}
            <button
              onClick={() => setActiveAch(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "hsl(var(--bg-secondary))",
                border: "1px solid hsl(var(--border-color))",
                color: "hsl(var(--text-primary))",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: "bold",
                zIndex: 10,
                outline: "none",
              }}
              aria-label="Tutup"
            >
              ✕
            </button>

            {/* Modal Body Container */}
            <div style={{ padding: "36px", overflowY: "auto" }}>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: "4px",
                  backgroundColor: `${activeAch.themeColor}12`,
                  color: activeAch.themeColor,
                  border: `1px solid ${activeAch.themeColor}25`,
                  marginBottom: "14px",
                  letterSpacing: "0.02em",
                }}
              >
                {activeAch.badgeText}
              </div>

              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  marginBottom: "6px",
                  paddingRight: "40px",
                  lineHeight: 1.3,
                }}
              >
                {activeAch.title}
              </h3>

              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: activeAch.themeColor,
                  marginBottom: "24px",
                }}
              >
                {activeAch.event}
              </div>

              {/* Grid split inside Modal */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.1fr",
                  gap: "28px",
                }}
                className="modal-grid"
              >
                {/* Left Column: Trophy/Medal & digital stamp */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        backgroundColor: "hsl(var(--bg-secondary) / 0.4)",
                        border: "1px solid hsl(var(--border-color))",
                        borderRadius: "var(--radius-sm)",
                        padding: "24px 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "radial-gradient(circle, hsl(var(--bg-card)) 0%, hsl(var(--bg-secondary) / 0.6) 100%)",
                        minHeight: "140px",
                      }}
                    >
                      {
                        [
                          activeAch.badgeSvg,
                          ...(activeAch.details.extraCertSlides || []),
                        ][currentCertIdx]
                      }
                    </div>
                    {[
                      activeAch.badgeSvg,
                      ...(activeAch.details.extraCertSlides || []),
                    ].length > 1 && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "8px",
                        }}
                      >
                        <button
                          onClick={() =>
                            setCurrentCertIdx((prev) =>
                              prev === 0
                                ? [
                                    activeAch.badgeSvg,
                                    ...(activeAch.details.extraCertSlides ||
                                      []),
                                  ].length - 1
                                : prev - 1,
                            )
                          }
                          style={{
                            padding: "2px 8px",
                            fontSize: "0.65rem",
                            cursor: "pointer",
                            background: "hsl(var(--bg-secondary))",
                            border: "1px solid hsl(var(--border-color))",
                            borderRadius: "4px",
                            color: "hsl(var(--text-primary))",
                          }}
                        >
                          ‹ Prev
                        </button>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            color: "hsl(var(--text-muted))",
                          }}
                        >
                          Sertifikat {currentCertIdx + 1} /{" "}
                          {
                            [
                              activeAch.badgeSvg,
                              ...(activeAch.details.extraCertSlides || []),
                            ].length
                          }
                        </span>
                        <button
                          onClick={() =>
                            setCurrentCertIdx((prev) =>
                              prev ===
                              [
                                activeAch.badgeSvg,
                                ...(activeAch.details.extraCertSlides || []),
                              ].length -
                                1
                                ? 0
                                : prev + 1,
                            )
                          }
                          style={{
                            padding: "2px 8px",
                            fontSize: "0.65rem",
                            cursor: "pointer",
                            background: "hsl(var(--bg-secondary))",
                            border: "1px solid hsl(var(--border-color))",
                            borderRadius: "4px",
                            color: "hsl(var(--text-primary))",
                          }}
                        >
                          Next ›
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Metadata details & Action Links */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ marginBottom: "16px" }}>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "hsl(var(--text-muted))",
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}
                      >
                        DESKRIPSI:
                      </div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "hsl(var(--text-secondary))",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {activeAch.desc}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        marginBottom: "16px",
                        fontSize: "0.8rem",
                      }}
                    >
                      <div>
                        <span style={{ color: "hsl(var(--text-muted))" }}>
                          Tanggal:
                        </span>{" "}
                        <strong>{activeAch.details.date}</strong>
                      </div>
                      {activeAch.details.role && (
                        <div>
                          <span style={{ color: "hsl(var(--text-muted))" }}>
                            Peran:
                          </span>{" "}
                          <strong>{activeAch.details.role}</strong>
                        </div>
                      )}
                    </div>

                    {activeAch.details.features && (
                      <div style={{ marginBottom: "20px" }}>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "hsl(var(--text-muted))",
                            fontWeight: 600,
                            marginBottom: "6px",
                          }}
                        >
                          POIN KUNCI / CAPAIAN:
                        </div>
                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: "16px",
                            fontSize: "0.8rem",
                            color: "hsl(var(--text-secondary))",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            lineHeight: 1.4,
                          }}
                        >
                          {activeAch.details.features.map((feat, fIdx) => (
                            <li key={fIdx}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions Links inside Modal */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      borderTop: "1px solid hsl(var(--border-color))",
                      paddingTop: "16px",
                    }}
                  >
                    {activeAch.details.demoUrl && (
                      <a
                        href={activeAch.details.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        Lihat Live Demo/Drive{" "}
                        <ExternalLink size={12} style={{ marginLeft: "4px" }} />
                      </a>
                    )}
                    {activeAch.details.githubUrls &&
                    activeAch.details.githubUrls.length > 0
                      ? activeAch.details.githubUrls.map((git, gIdx) => (
                          <a
                            key={gIdx}
                            href={git.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary btn-sm"
                            style={{
                              width: "100%",
                              justifyContent: "center",
                              gap: "6px",
                            }}
                          >
                            <GithubIcon size={12} /> {git.label}
                          </a>
                        ))
                      : activeAch.details.githubUrl && (
                          <a
                            href={activeAch.details.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary btn-sm"
                            style={{
                              width: "100%",
                              justifyContent: "center",
                              gap: "6px",
                            }}
                          >
                            <GithubIcon size={12} /> Buka Repositori Kode
                          </a>
                        )}
                    {activeAch.details.figmaUrl && (
                      <a
                        href={activeAch.details.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-sm"
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <ExternalLink size={12} /> Buka Figma Prototype
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Documentation Slideshow Section at the very bottom */}
              {activeAch.details.documentationSlides &&
                activeAch.details.documentationSlides.length > 0 && (
                  <>
                    <hr
                      style={{
                        border: "none",
                        borderTop: "1px solid hsl(var(--border-color))",
                        margin: "28px 0 20px 0",
                      }}
                    />
                    <div>
                      <h4
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          marginBottom: "12px",
                          color: "hsl(var(--text-primary))",
                          letterSpacing: "0.02em",
                        }}
                      >
                        DOKUMENTASI KEGIATAN
                      </h4>
                      <div style={{ position: "relative" }}>
                        {activeAch.details.documentationSlides[currentDocIdx]}

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "12px",
                          }}
                        >
                          <button
                            onClick={() =>
                              setCurrentDocIdx((prev) =>
                                prev === 0
                                  ? activeAch.details.documentationSlides!
                                      .length - 1
                                  : prev - 1,
                              )
                            }
                            className="btn btn-secondary btn-sm"
                            style={{
                              padding: "4px 12px",
                              fontSize: "0.7rem",
                            }}
                          >
                            ‹ Prev
                          </button>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "hsl(var(--text-muted))",
                              fontWeight: 600,
                            }}
                          >
                            Dokumentasi {currentDocIdx + 1} /{" "}
                            {activeAch.details.documentationSlides.length}
                          </span>
                          <button
                            onClick={() =>
                              setCurrentDocIdx((prev) =>
                                prev ===
                                activeAch.details.documentationSlides!.length -
                                  1
                                  ? 0
                                  : prev + 1,
                              )
                            }
                            className="btn btn-secondary btn-sm"
                            style={{
                              padding: "4px 12px",
                              fontSize: "0.7rem",
                            }}
                          >
                            Next ›
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal System */}
      {lightboxImg && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(6, 8, 20, 0.95)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "20px",
            cursor: "zoom-out",
            animation: "fadeIn 0.25s ease-out",
          }}
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "bold",
              zIndex: 10,
            }}
          >
            ✕
          </button>
          <img
            src={lightboxImg}
            alt="Pratinjau Sertifikat Besar"
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              animation: "zoomIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 600px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        .achievement-card:hover {
          transform: translateY(-4px);
          border-color: var(--hover-border) !important;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15) !important;
        }
        .verify-cert-btn {
          outline: none;
        }
        .verify-cert-btn:hover {
          background-color: var(--hover-bg) !important;
          color: #ffffff !important;
          border-color: transparent !important;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .verify-cert-btn:hover .verify-icon {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
