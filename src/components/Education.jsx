import React from 'react';

// Newest → Oldest
const educationData = [
  {
    period: 'March 2026 - Present',
    flagSrc: 'https://flagcdn.com/w80/my.png',
    flagAlt: 'Malaysia Flag',
    flagDelay: '0.5s',
    institution: 'Universiti Malaya',
    degree: 'Undergraduate Exchange Programme (Inbound)',
    classNote: 'Focus in Computer Science & Information System',
    courseworkLabel: 'Relevant Coursework',
    coursework: 'Computational Thinking with Robotics, Internet Technology, Soft Computing, Trends in Information Systems.',
    description: [
      'Selected for the Long-Term Mobility Programme (BINUS Global Class track) as a full-time exchange student for the Semester 2, 2025/2026 academic session.',
      'Engaged in cross-cultural academic collaboration with diverse international student teams at Malaysia\'s top ranked university.'
    ],
    accent: '#003B71',
    blobColor: 'rgba(0,59,113,0.13)',
  },
  {
    period: 'September 2023 - Present',
    flagSrc: 'https://flagcdn.com/w80/id.png',
    flagAlt: 'Indonesia Flag',
    flagDelay: '0s',
    institution: 'BINUS University',
    degree: 'Bachelor of Computer Science (Artificial Intelligence)',
    classNote: 'Global Class',
    courseworkLabel: 'Relevant Coursework',
    coursework: 'Data Structures, Artificial Intelligence, Database Technology, Machine Learning, Object-Oriented Programming, Software Engineering, Data Mining, Natural Language Processing, Web Programming.',
    description: [
      'Student Activist at HIMTI (Computer Science Association), contributing to the organization and success of high-impact student events and academic initiatives.',
      'Successfully reached the Finalist stage of the 2024 Microsoft x BINUS Hackathon, competing against top teams with AI-driven accessibility solutions.'
    ],
    accent: '#F5821F',
    blobColor: 'rgba(245,130,31,0.15)',
  },
  {
    period: 'July 2020 – May 2023',
    flagSrc: 'https://flagcdn.com/w80/id.png',
    flagAlt: 'Indonesia Flag',
    flagDelay: '1s',
    institution: 'PENABUR Senior High School',
    degree: 'High School Diploma (Natural Sciences)',
    classNote: 'Informatics Specialization',
    courseworkLabel: null,
    coursework: null,
    description: 'Awarded recognition in the BEBRAS Challenge 2021 & 2022 (Enforcer Category) by BEBRAS Indonesia, a prestigious nationwide competition focusing on logic and computational thinking skills.',
    accent: '#CC0000',
    blobColor: 'rgba(204,0,0,0.12)',
  },
];

const EducationCard = ({
  period, flagSrc, flagAlt, flagDelay,
  institution, degree, classNote,
  courseworkLabel, coursework, description, accent, blobColor,
  side, // 'left' | 'right'
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`edu-glass-card ${side === 'left' ? 'edu-card-left' : 'edu-card-right'}`}
      style={{ padding: '1.75rem 2rem', width: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner blob */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '6rem',
        height: '6rem',
        borderBottomLeftRadius: '9999px',
        background: blobColor,
        transition: 'transform 0.5s ease',
        transform: hovered ? 'scale(1.5)' : 'scale(1)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Flag */}
      <img
        src={flagSrc}
        alt={flagAlt}
        className="animate-flag"
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          width: '2.4rem',
          borderRadius: '0.25rem',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.6)',
          animationDelay: flagDelay,
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Date pill */}
        <span style={{
          display: 'inline-block',
          padding: '0.2rem 0.85rem',
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '9999px',
          fontSize: '0.72rem',
          fontWeight: 700,
          color: accent,
          marginBottom: '0.85rem',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          fontFamily: 'Inter, sans-serif',
        }}>{period}</span>

        {/* Institution */}
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          fontSize: '1.2rem',
          lineHeight: 1.2,
          marginBottom: '0.3rem',
          color: hovered ? accent : '#1b1b1b',
          transition: 'color 0.3s ease',
        }}>{institution}</h3>

        {/* Degree */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.93rem',
          fontWeight: 500,
          color: '#2d2d2d',
          marginBottom: '0.3rem',
          lineHeight: 1.5,
        }}>{degree}</p>

        {/* Class note */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'italic',
          fontSize: '0.78rem',
          color: '#7e7576',
          marginBottom: '0.85rem',
        }}>{classNote}</p>

        {/* Coursework + description */}
        <div style={{ fontSize: '0.83rem', color: '#4c4546', lineHeight: 1.65, fontFamily: 'Inter, sans-serif' }}>
          {coursework && (
            <p style={{ margin: '0 0 0.4rem 0' }}>
              <strong style={{ color: accent }}>{courseworkLabel}: </strong>
              {coursework}
            </p>
          )}
          {description && (
            <div style={{ margin: 0 }}>
              {Array.isArray(description) ? (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'disc' }}>
                  {description.map((item, i) => (
                    <li key={i} style={{ marginBottom: i === description.length - 1 ? 0 : '0.4rem' }}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ margin: 0 }}>{description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const [visibleCards, setVisibleCards] = React.useState({});
  const itemRefs = React.useRef([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = entry.target.getAttribute('data-index');
          setVisibleCards((prev) => ({
            ...prev,
            [idx]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section 
      className="pt-8 pb-section-gap px-container-padding bg-surface scroll-mt-24" 
      id="academic-history"
    >
      <div className="col-span-full flex justify-center mb-24">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[6vw]">ACADEMIC HISTORY</h2>
      </div>

      {/* Timeline container */}
      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative' }}>

        {/* Center vertical line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, #003B71 0%, #F5821F 50%, #CC0000 100%)',
          opacity: 0.25,
          zIndex: 0,
        }} />

        {educationData.map((item, idx) => {
          const isLeft = idx % 2 === 0; // UM=left, BINUS=right, PENABUR=left
          const isCardVisible = visibleCards[idx];

          return (
            <div
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              data-index={idx}
              className={`edu-item-${idx} ${isCardVisible ? 'animate-in' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 56px 1fr',
                alignItems: 'start',
                marginBottom: idx < educationData.length - 1 ? '2.5rem' : 0,
              }}
            >
              {/* Left slot */}
              <div style={{ paddingRight: '1.5rem' }}>
                {isLeft && <EducationCard {...item} side="left" />}
              </div>

              {/* Center: dot + connector tick */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.9rem', position: 'relative', zIndex: 1 }}>
                <div
                  className="timeline-dot animate-in"
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: item.accent,
                    border: '3px solid #f9f9f9',
                    boxShadow: `0 0 0 2.5px ${item.accent}, 0 2px 8px rgba(0,0,0,0.12)`,
                    flexShrink: 0,
                  }}
                />
                {/* Short horizontal tick toward the card */}
                <div style={{
                  position: 'absolute',
                  top: 'calc(1.9rem + 7px)',
                  [isLeft ? 'right' : 'left']: '50%',
                  width: '1.5rem',
                  height: '2px',
                  background: item.accent,
                  opacity: 0.45,
                }} />
              </div>

              {/* Right slot */}
              <div style={{ paddingLeft: '1.5rem' }}>
                {!isLeft && <EducationCard {...item} side="right" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
