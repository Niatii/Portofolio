import { Palette, Code, Cpu, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: <Palette size={24} style={{ color: 'hsl(var(--color-purple))' }} />,
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
      icon: <Code size={24} style={{ color: 'hsl(var(--color-purple))' }} />,
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
      icon: <Cpu size={24} style={{ color: 'hsl(var(--color-purple))' }} />,
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
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'hsl(var(--color-purple) / 0.08)',
              color: 'hsl(var(--color-purple))',
              fontSize: '0.75rem',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {skillCategories.map((cat, idx) => {
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
                  padding: '30px 24px',
                  border: '1px solid hsl(var(--border-color))',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                {/* Subtle top border indicator in blue */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: 'hsl(var(--color-purple))',
                  }}
                />

                <div
                  style={{
                    display: 'inline-flex',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'hsl(var(--color-purple) / 0.08)',
                    width: 'fit-content',
                    marginBottom: '20px',
                  }}
                >
                  {cat.icon}
                </div>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: 700 }}>
                  {cat.title}
                </h3>
                <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '24px', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {cat.description}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.85rem',
                        color: 'hsl(var(--text-primary))',
                      }}
                    >
                      <CheckCircle size={14} style={{ color: 'hsl(var(--color-purple))', flexShrink: 0 }} />
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
