import React from "react";
import { Calendar, Tag, ExternalLink, Award } from "lucide-react";
import magangImg from "../assets/magang.jpeg";

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



interface Project {
  semester: string;
  title: string;
  category: "web" | "ai" | "design" | "mixed";
  categoryLabel: string;
  description: string;
  techs: string[];
  role: string;
  achievements?: string;
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  image?: string;
}

export default function Timeline() {
  const [filter, setFilter] = React.useState<"all" | "web" | "ai">("all");
  const [lightboxImg, setLightboxImg] = React.useState<string | null>(null);

  const projects: Project[] = [
    {
      semester: "Juli 2025 - Juli 2026 (Magang)",
      title: "Frontend & System Developer Intern",
      category: "web",
      categoryLabel: "Apprenticeship",
      description:
        "Mengembangkan aplikasi bisnis responsif menggunakan Vue.js dan Quasar Framework, mengintegrasikan frontend dengan REST API, membangun modul kustom di Odoo 17, serta berkolaborasi dalam lingkungan kerja Agile Scrum.",
      techs: [
        "Vue.js",
        "Quasar Framework",
        "Odoo 17",
        "PostgreSQL",
        "REST APIs",
        "Agile Scrum",
      ],
      role: "Frontend & System Developer Intern di PT Sat Nusapersada Tbk (PTSN)",
      image: magangImg,
    },
    {
      semester: "Semester 5 & 6 (Proyek Akhir)",
      title:
        "Sistem Informasi Pengelolaan Kepanitiaan Organisasi Mahasiswa Berbasis Website (EVOMA)",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "EVOMA adalah platform web terpusat untuk mengelola kepanitiaan event organisasi mahasiswa secara terintegrasi, mendokumentasikan alur kerja manual ke dalam sistem digital yang efisien, terstruktur, dan transparan.",
      techs: [
        "Vue.js",
        "Quasar Framework",
        "NestJS",
        "TypeScript",
        "JavaScript",
        "MySQL",
      ],
      role: "Fullstack Developer",
      githubUrl: "https://github.com/Niatii/Tugas-Akhir-Niati",
      demoUrl:
        "https://drive.google.com/file/d/1NMJp9Y9JuTJ34LHMawTatD8zeIAqdn97/view?usp=sharing",
    },
    {
      semester: "Semester 4 & 5 (Aplikasi Web dengan AI)",
      title:
        "SkillBridge: Platform Penghubung Trainee dan Mentor dalam Industri Fabrikasi",
      category: "ai",
      categoryLabel: "Web Dev & AI",
      description:
        "Platform pelatihan web industri fabrikasi untuk calon tenaga kerja dengan mentor profesional. Dilengkapi AI-powered course recommendation dan sentiment analysis kepuasan peserta.",
      techs: [
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Tailwind CSS",
        "NLP",
        "DSS",
        "Analisis Sentimen",
      ],
      role: "Frontend Developer & QA Engineer",
    },
    {
      semester: "Semester 2",
      title: "Aplikasi Website Startup Tax Digital",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "Platform web kalkulasi dan edukasi perpajakan digital untuk mempermudah startup dan UMKM dalam mengelola administrasi serta mengakses informasi pajak dengan cepat.",
      techs: ["Tailwind CSS", "PHP", "Laravel", "MySQL"],
      role: "Frontend Developer & QA Engineer",
      githubUrl: "https://github.com/lilChiie/PBL-kita",
    },
    {
      semester: "Semester 1 (Karya Awal)",
      title: "Aplikasi Web Penjualan Jilbab",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "Aplikasi e-commerce penjualan hijab berbasis web yang mencakup katalog produk responsif serta sistem backend CRUD manajemen produk terstruktur bagi penjual.",
      techs: ["HTML5", "CSS3", "CodeIgniter", "MySQL"],
      role: "Frontend Developer",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "web")
      return (
        project.category === "web" || project.categoryLabel.includes("Web")
      );
    if (filter === "ai")
      return project.category === "ai" || project.categoryLabel.includes("AI");
    return true;
  });



  return (
    <section
      id="timeline"
      className="section"
      style={{ backgroundColor: "hsl(var(--bg-secondary) / 0.2)" }}
    >
      <div className="container">
        <div className="section-header">
          <h2>Portofolio Produk Setiap Semester</h2>
          <p>
            Kumpulan produk digital yang dikembangkan sepanjang perkuliahan,
            mencerminkan perjalanan belajar dan perkembangan kemampuan teknis
            saya.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {(["all", "web", "ai"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn btn-sm"
              style={{
                borderRadius: "var(--radius-sm)",
                backgroundColor:
                  filter === cat
                    ? "hsl(var(--color-purple))"
                    : "hsl(var(--bg-card))",
                color: filter === cat ? "#fff" : "hsl(var(--text-secondary))",
                borderColor:
                  filter === cat ? "transparent" : "hsl(var(--border-color))",
                borderWidth: "1px",
                borderStyle: "solid",
                textTransform: "capitalize",
              }}
            >
              {cat === "all" ? "Semua" : cat === "web" ? "Web Dev" : "AI"}
            </button>
          ))}
        </div>

        {/* Timeline Grid Layout */}
        <div
          style={{
            position: "relative",
            maxWidth: "840px",
            margin: "0 auto",
          }}
          className="timeline-container"
        >
          {/* Vertical Center Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              backgroundColor: "hsl(var(--border-color))",
              transform: "translateX(-50%)",
            }}
            className="timeline-line"
          />

          {/* Timeline Cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "36px" }}
          >
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: isEven ? "flex-start" : "flex-end",
                    position: "relative",
                    width: "100%",
                  }}
                  className={`timeline-item ${isEven ? "left" : "right"}`}
                >
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "24px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "hsl(var(--bg-primary))",
                      border: "3px solid hsl(var(--color-purple))",
                      transform: "translateX(-50%)",
                      zIndex: 2,
                    }}
                    className="timeline-dot"
                  />

                  {/* Card Container */}
                  <div
                    className="card card-hover timeline-card"
                    style={{
                      width: "45%",
                      textAlign: "left",
                      position: "relative",
                      zIndex: 1,
                      padding: "24px",
                      border: "1px solid hsl(var(--border-color))",
                    }}
                  >
                    {/* Badge & Semester */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        marginBottom: "12px",
                        fontSize: "0.8rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          color: "hsl(var(--color-purple))",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Calendar size={12} />
                        {project.semester}
                      </span>
                      <span
                        className="badge badge-purple"
                        style={{
                          fontSize: "0.65rem",
                          backgroundColor: "hsl(var(--color-purple) / 0.08)",
                          color: "hsl(var(--color-purple))",
                        }}
                      >
                        {project.categoryLabel}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.15rem",
                        marginBottom: "6px",
                        fontWeight: 700,
                      }}
                    >
                      {project.title}
                    </h3>

                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "hsl(var(--text-muted))",
                        marginBottom: "10px",
                      }}
                    >
                      Peran: <strong>{project.role}</strong>
                    </div>

                    <p
                      style={{
                        color: "hsl(var(--text-secondary))",
                        marginBottom: "16px",
                        fontSize: "0.85rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {project.description}
                    </p>

                    {project.image && (
                      <div
                        style={{
                          marginBottom: "16px",
                          borderRadius: "var(--radius-sm)",
                          overflow: "hidden",
                          border: "1px solid hsl(var(--border-color))",
                          backgroundColor: "hsl(var(--bg-secondary) / 0.5)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "180px",
                          cursor: "zoom-in",
                        }}
                        onClick={() => setLightboxImg(project.image!)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}

                    {/* Action Links */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "16px",
                      }}
                    >
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.75rem",
                            padding: "6px 12px",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "hsl(var(--bg-secondary))",
                            border: "1px solid hsl(var(--border-color))",
                            color: "hsl(var(--text-primary))",
                            fontWeight: 500,
                            transition: "all var(--transition-fast)",
                          }}
                        >
                          <GithubIcon size={12} />
                          <span>Code</span>
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.75rem",
                            padding: "6px 12px",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "hsl(var(--bg-secondary))",
                            border: "1px solid hsl(var(--border-color))",
                            color: "hsl(var(--text-primary))",
                            fontWeight: 500,
                            transition: "all var(--transition-fast)",
                          }}
                        >
                          <ExternalLink size={12} />
                          <span>{project.demoLabel || "Demo"}</span>
                        </a>
                      )}

                      {project.achievements && (
                        <button
                          onClick={() =>
                            alert(
                              `Bukti Kredensial/Sertifikat untuk '${project.title}' terverifikasi.`,
                            )
                          }
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.75rem",
                            padding: "6px 12px",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "hsl(var(--bg-secondary))",
                            border: "1px solid hsl(var(--border-color))",
                            color: "hsl(var(--text-primary))",
                            fontWeight: 500,
                            cursor: "pointer",
                          }}
                        >
                          <Award size={12} />
                          <span>Sertifikat</span>
                        </button>
                      )}
                    </div>

                    {/* Technologies Badges */}
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {project.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: "0.7rem",
                            padding: "3px 6px",
                            borderRadius: "4px",
                            backgroundColor: "hsl(var(--bg-secondary))",
                            color: "hsl(var(--text-secondary))",
                            fontWeight: 500,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Tag size={8} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
            alt="Pratinjau Magang Besar"
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
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-item {
            justify-content: flex-start !important;
          }
          .timeline-dot {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-card {
            width: calc(100% - 40px) !important;
            margin-left: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
