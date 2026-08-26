import { Award, Trophy, Star, BookOpen } from 'lucide-react';

export default function Achievements() {
  const achievementsList = [
    {
      icon: <Trophy size={28} style={{ color: 'hsl(var(--color-orange))' }} />,
      title: 'Juara 1 Hackathon & Desain UI/UX Nasional',
      event: 'TechFest Indonesia 2025',
      desc: 'Memenangkan kompetisi tingkat nasional dengan mengembangkan aplikasi EcoSphere (Platform Peta Kolaboratif Aksi Hijau) yang dinilai unggul dalam kemudahan navigasi UI/UX serta keunikan fitur.',
    },
    {
      icon: <Star size={28} style={{ color: 'hsl(var(--color-purple))' }} />,
      title: 'Finalis AI Innovation Challenge',
      event: 'AI Spark Summit 2025',
      desc: 'Masuk dalam jajaran 10 besar finalis nasional dengan mengajukan sistem AI-Integrated Code Assistant yang membantu mahasiswa belajar pemrograman dasar secara terpadu.',
    },
    {
      icon: <BookOpen size={28} style={{ color: 'hsl(var(--color-blue))' }} />,
      title: 'Mahasiswa Berprestasi & Cum Laude (IPK 3.92)',
      event: 'Fakultas Ilmu Komputer',
      desc: 'Mempertahankan IPK tinggi secara konsisten dari semester 1-8. Dianugerahi penghargaan Dean\'s List setiap semester dan menjadi lulusan berprestasi program studi.',
    },
    {
      icon: <Award size={28} style={{ color: 'hsl(var(--color-green))' }} />,
      title: 'Lulusan Terbaik Program UI/UX & AI',
      event: 'Studi Independen Bersertifikat',
      desc: 'Menyelesaikan kurikulum intensif UI/UX Design dan AI Integration selama 6 bulan dengan predikat kelulusan Distinction/Sangat Memuaskan.',
    },
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'hsl(var(--color-orange) / 0.1)',
              color: 'hsl(var(--color-orange))',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Trophy size={12} />
            <span>PRESTASI & PENGHARGAAN</span>
          </div>
          <h2>Kompetisi & Pencapaian Akademis</h2>
          <p>
            Bukti nyata dedikasi saya dalam bersaing, berinovasi, dan menjaga standar kualitas terbaik di tingkat akademis maupun nasional.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {achievementsList.map((ach, idx) => (
            <div
              key={idx}
              className="card card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                padding: '30px 24px',
                border: '1px solid hsl(var(--border-color))',
                backgroundColor: 'hsl(var(--bg-card))',
                borderRadius: 'var(--radius-md)',
                height: '100%',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'hsl(var(--bg-secondary))',
                  width: 'fit-content',
                  marginBottom: '20px',
                }}
              >
                {ach.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px', fontWeight: 700, lineHeight: 1.4 }}>
                {ach.title}
              </h3>
              
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'hsl(var(--color-purple))',
                  marginBottom: '16px',
                }}
              >
                {ach.event}
              </div>

              <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.92rem', lineHeight: 1.5, marginTop: 'auto' }}>
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
