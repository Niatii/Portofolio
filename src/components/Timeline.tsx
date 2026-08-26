import React from 'react';
import { Sparkles, Calendar, Tag } from 'lucide-react';

interface Project {
  semester: string;
  title: string;
  category: 'web' | 'ai' | 'design' | 'mixed';
  categoryLabel: string;
  description: string;
  techs: string[];
  role: string;
  achievements?: string;
}

export default function Timeline() {
  const [filter, setFilter] = React.useState<'all' | 'web' | 'ai' | 'design'>('all');

  const projects: Project[] = [
    {
      semester: 'Semester 8 (Tugas Akhir & AI Integration)',
      title: 'Smart Career Assistant',
      category: 'ai',
      categoryLabel: 'AI & Web Dev',
      description: 'Asisten karir pintar untuk mahasiswa akhir. Membaca berkas CV, menilai kecocokan dengan lowongan pekerjaan, dan memberikan simulator wawancara real-time berbasis teks menggunakan Gemini API.',
      techs: ['React', 'TypeScript', 'Gemini API', 'Node.js', 'Vite'],
      role: 'Lead Developer & AI Integrator',
      achievements: 'Peringkat Terbaik Tugas Akhir Jurusan Informatika.',
    },
    {
      semester: 'Semester 7 (Magang Industri - 1 Tahun)',
      title: 'Enterprise Resource Dashboard',
      category: 'web',
      categoryLabel: 'Web Dev & UI/UX',
      description: 'Dashboard manajemen performa bisnis untuk korporasi ritel. Dibuat selama magang satu tahun, mengoptimalkan proses load tabel data besar dan merancang ulang visual charting.',
      techs: ['React', 'Chart.js', 'REST API', 'Figma', 'Agile/Scrum'],
      role: 'Frontend Developer & UI Designer (Magang)',
      achievements: 'Meningkatkan kecepatan render halaman dashboard sebesar 40% dan mendapat predikat magang memuaskan.',
    },
    {
      semester: 'Semester 6 (Kompetisi & Produk Hijau)',
      title: 'EcoSphere Platform',
      category: 'design',
      categoryLabel: 'UI/UX & Web Dev',
      description: 'Platform kolaboratif berbasis peta untuk aksi penanaman pohon dan pelaporan sampah liar di area pemukiman urban.',
      techs: ['Figma', 'LeafletJS', 'React', 'TailwindCSS'],
      role: 'UI/UX Lead & Frontend Developer',
      achievements: 'Juara 1 Hackathon & Desain UI/UX Tingkat Nasional.',
    },
    {
      semester: 'Semester 5 (Web Finansial)',
      title: 'FinFlow Personal Financial Tracker',
      category: 'web',
      categoryLabel: 'Web Development',
      description: 'Aplikasi pelacakan kas pribadi dengan visualisasi grafik interaktif, pencatatan otomatis pengeluaran bulanan, dan ekspor laporan keuangan format PDF.',
      techs: ['React', 'Vanilla CSS', 'Node.js', 'MongoDB'],
      role: 'Full-Stack Developer',
    },
    {
      semester: 'Semester 4 (Web Database Terintegrasi)',
      title: 'MedConnect Reservation System',
      category: 'web',
      categoryLabel: 'Web Development',
      description: 'Portal pasien dan dokter untuk pemesanan jadwal konsultasi rumah sakit secara online. Dilengkapi rekam medis digital terenkripsi.',
      techs: ['HTML/CSS', 'Javascript', 'PHP', 'MySQL'],
      role: 'Backend & Database Engineer',
    },
    {
      semester: 'Semester 3 (Frontend Interaktif)',
      title: 'Taskify Kanban Board',
      category: 'web',
      categoryLabel: 'Web Dev & UI/UX',
      description: 'Aplikasi manajemen proyek model papan kanban dengan fitur drag-and-drop dinamis, penyimpanan otomatis (Local Storage), dan dukungan mode offline.',
      techs: ['React', 'CSS Modules', 'DragDrop API'],
      role: 'Frontend Developer',
    },
    {
      semester: 'Semester 2 (Web Dasar & Game)',
      title: 'QuizMaster Platform',
      category: 'web',
      categoryLabel: 'Web Development',
      description: 'Web game edukasi trivia interaktif berbasis skor yang melatih pengetahuan umum bagi anak-anak usia sekolah.',
      techs: ['Vanilla HTML', 'CSS', 'Javascript', 'JSON'],
      role: 'Solo Developer',
    },
    {
      semester: 'Semester 1 (Karya Awal)',
      title: 'PortoGenesis Profile',
      category: 'design',
      categoryLabel: 'UI/UX Design',
      description: 'Situs portofolio pribadi statis pertama yang dirancang responsif, menandai langkah awal mempelajari arsitektur web dan layouting.',
      techs: ['HTML5', 'CSS3', 'Figma (Layout Design)'],
      role: 'Designer & Developer',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'web') return project.category === 'web' || project.categoryLabel.includes('Web');
    if (filter === 'ai') return project.category === 'ai' || project.categoryLabel.includes('AI');
    if (filter === 'design') return project.category === 'design' || project.categoryLabel.includes('UI/UX');
    return true;
  });

  return (
    <section id="timeline" className="section" style={{ backgroundColor: 'hsl(var(--bg-secondary) / 0.3)' }}>
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
            <Sparkles size={12} />
            <span>KARYA SEMESTER</span>
          </div>
          <h2>Portofolio Produk Setiap Semester</h2>
          <p>
            Rekam jejak produk digital yang secara konsisten dibangun sepanjang perkuliahan, menunjukkan pertumbuhan teknis yang konsisten.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          {(['all', 'web', 'ai', 'design'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn btn-sm"
              style={{
                borderRadius: 'var(--radius-full)',
                backgroundColor: filter === cat ? 'hsl(var(--color-purple))' : 'hsl(var(--bg-card))',
                color: filter === cat ? '#fff' : 'hsl(var(--text-secondary))',
                borderColor: filter === cat ? 'transparent' : 'hsl(var(--border-color))',
                borderWidth: '1px',
                borderStyle: 'solid',
                textTransform: 'capitalize',
              }}
            >
              {cat === 'all' ? 'Semua' : cat === 'web' ? 'Web Dev' : cat === 'ai' ? 'AI' : 'UI/UX'}
            </button>
          ))}
        </div>

        {/* Timeline Grid Layout */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
          className="timeline-container"
        >
          {/* Vertical Center Line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'hsl(var(--border-color))',
              transform: 'translateX(-50%)',
            }}
            className="timeline-line"
          />

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    position: 'relative',
                    width: '100%',
                  }}
                  className={`timeline-item ${isEven ? 'left' : 'right'}`}
                >
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '24px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'hsl(var(--bg-primary))',
                      border: '4px solid hsl(var(--color-purple))',
                      transform: 'translateX(-50%)',
                      zIndex: 2,
                    }}
                    className="timeline-dot"
                  />

                  {/* Card Container */}
                  <div
                    className="card card-hover timeline-card"
                    style={{
                      width: '45%',
                      textAlign: 'left',
                      position: 'relative',
                      zIndex: 1,
                      padding: '28px',
                    }}
                  >
                    {/* Badge & Semester */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        marginBottom: '14px',
                        fontSize: '0.85rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          color: 'hsl(var(--color-purple))',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Calendar size={14} />
                        {project.semester}
                      </span>
                      <span
                        className="badge badge-purple"
                        style={{
                          fontSize: '0.7rem',
                          backgroundColor:
                            project.category === 'ai'
                              ? 'hsl(var(--color-blue) / 0.1)'
                              : project.category === 'design'
                              ? 'hsl(var(--color-orange) / 0.1)'
                              : 'hsl(var(--color-purple) / 0.1)',
                          color:
                            project.category === 'ai'
                              ? 'hsl(var(--color-blue))'
                              : project.category === 'design'
                              ? 'hsl(var(--color-orange))'
                              : 'hsl(var(--color-purple))',
                        }}
                      >
                        {project.categoryLabel}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    
                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))', marginBottom: '12px' }}>
                      Peran: <strong>{project.role}</strong>
                    </div>

                    <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      {project.description}
                    </p>

                    {/* Achievements if any */}
                    {project.achievements && (
                      <div
                        style={{
                          padding: '10px 14px',
                          backgroundColor: 'hsl(var(--color-green) / 0.08)',
                          borderLeft: '3px solid hsl(var(--color-green))',
                          borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                          fontSize: '0.85rem',
                          color: 'hsl(var(--color-green))',
                          marginBottom: '20px',
                          fontWeight: 500,
                        }}
                      >
                        🏆 {project.achievements}
                      </div>
                    )}

                    {/* Technologies Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'hsl(var(--bg-secondary))',
                            color: 'hsl(var(--text-secondary))',
                            fontWeight: 500,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <Tag size={10} />
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

      <style>{`
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
