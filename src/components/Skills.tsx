import { Palette, Code, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: <Palette size={24} style={{ color: "hsl(var(--color-purple))" }} />,
      description:
        "Merancang antarmuka dan pengalaman digital yang intuitif, fungsional, dan berorientasi pada pengguna.",
      skills: [
        "Figma Prototyping",
        "Wireframing",
        "Design System",
        "User Research & Usability Testing",
        "Visual Design",
      ],
    },
    {
      title: "Web Development",
      icon: <Code size={24} style={{ color: "hsl(var(--color-purple))" }} />,
      description:
        "Membangun aplikasi web yang responsif, terstruktur, dan andal, dari frontend hingga backend.",
      skills: [
        "Vue.js, React & Quasar Framework",
        "React & TypeScript",
        "HTML5 & CSS3",
        "RESTful API Integration",
        "Odoo 17 & Custom Modules",
        "PostgreSQL",
        "Git & GitHub",
      ],
    },
    {
      title: "AI Integration",
      icon: <Cpu size={24} style={{ color: "hsl(var(--color-purple))" }} />,
      description:
        "Mengintegrasikan teknologi AI ke dalam produk digital untuk menghadirkan solusi yang lebih cerdas dan relevan.",
      skills: [
        "Python",
        "YOLO & Computer Vision",
        "Sentiment Analysis",
        "AI Integration",
        "Decision Support System",
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Pilar Keahlian Utama (The Trifecta)</h2>
          <p>
            Tiga bidang yang menjadi fokus saya: merancang pengalaman pengguna
            melalui UI/UX, membangun solusi web yang andal, dan mengintegrasikan
            AI untuk menghadirkan produk digital yang lebih cerdas.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {skillCategories.map((cat, idx) => {
            return (
              <div
                key={idx}
                className="card card-hover"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  padding: "30px 24px",
                  border: "1px solid hsl(var(--border-color))",
                  borderRadius: "var(--radius-md)",
                }}
              >
                {/* Subtle top border indicator in blue */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    backgroundColor: "hsl(var(--color-purple))",
                  }}
                />

                <div
                  style={{
                    display: "inline-flex",
                    padding: "10px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "hsl(var(--color-purple) / 0.08)",
                    width: "fit-content",
                    marginBottom: "20px",
                  }}
                >
                  {cat.icon}
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "10px",
                    fontWeight: 700,
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    color: "hsl(var(--text-secondary))",
                    marginBottom: "24px",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {cat.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "8px",
                  }}
                >
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: "0.8rem",
                        padding: "5px 12px",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "hsl(var(--color-purple) / 0.06)",
                        color: "hsl(var(--color-purple))",
                        fontWeight: 500,
                        border: "1px solid hsl(var(--color-purple) / 0.1)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
