import { Palette, Code, Cpu, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: <Palette size={28} style={{ color: 'hsl(var(--color-orange))' }} />,
      color: 'orange',
      description: 'Mendesain pengalaman digital yang indah, fungsional, dan berpusat pada pengguna.',
      skills: [
        'Figma Prototyping',
        'Wireframing & Storyboarding',
        'Design Systems creation',
        'User Research & Usability Testing',
        'Visual Design & Typography',
      ],
    },
    {
      title: 'Web Development',
      icon: <Code size={28} style={{ color: 'hsl(var(--color-purple))' }} />,
      color: 'purple',
      description: 'Membangun aplikasi web frontend & backend dengan kode yang bersih dan performa tinggi.',
      skills: [
        'React & TypeScript',
        'HTML5 & CSS3 (Modern Flex/Grid)',
        'Node.js & Express.js',
        'RESTful API Development',
        'Version Control (Git & GitHub)',
      ],
    },
    {
      title: 'AI Integration',
      icon: <Cpu size={28} style={{ color: 'hsl(var(--color-blue))' }} />,
      color: 'blue',
      description: 'Membawa fungsionalitas cerdas kecerdasan buatan ke dalam produk web modern.',
      skills: [
        'Prompt Engineering',
        'Gemini & OpenAI API Integration',
        'Retrieval-Augmented Generation (RAG)',
        'Python & Basic Data Processing',
        'Vector Databases & LangChain basics',
      ],
    },
  ];

  return (
    <section id="skills" className="section">
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
            <Cpu size={12} />
            <span>KEAHLIAN TEKNIS</span>
          </div>
          <h2>Pilar Keahlian Utama (The Trifecta)</h2>
          <p>
            Perpaduan unik antara kreativitas desain UI/UX, keandalan kode web development, dan kecerdasan kecerdasan buatan (AI).
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {skillCategories.map((cat, idx) => {
            const accentColor = `var(--color-${cat.color})`;
            return (
              <div
                key={idx}
                className="card card-hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '36px 30px',
                }}
              >
                {/* Border Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: `hsl(${accentColor})`,
                  }}
                />

                <div
                  style={{
                    display: 'inline-flex',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: `hsl(${accentColor} / 0.1)`,
                    width: 'fit-content',
                    marginBottom: '24px',
                  }}
                >
                  {cat.icon}
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: 700 }}>
                  {cat.title}
                </h3>
                <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '28px', fontSize: '0.98rem' }}>
                  {cat.description}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '0.9rem',
                        color: 'hsl(var(--text-primary))',
                      }}
                    >
                      <CheckCircle size={16} style={{ color: `hsl(${accentColor})`, flexShrink: 0 }} />
                      <span>{skill}</span>
                    </div>
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
