import { motion } from 'framer-motion';

const Languages = () => {
  const languages = [
    { language: 'Suomi', level: 'Äidinkieli', proficiency: 100 },
    { language: 'Englanti', level: 'Erinomainen', proficiency: 90 },
    { language: 'Ruotsi', level: 'Perustaidot', proficiency: 60 }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="section-card"
    >
      <h2 className="section-title">Kielitaito</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {languages.map((lang, index) => (
          <motion.div
            key={lang.language}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              borderRadius: '12px',
              padding: '1.25rem',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.75rem'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'white',
                margin: 0
              }}>
                {lang.language}
              </h3>
              <span style={{
                color: '#60a5fa',
                fontSize: '0.875rem',
                fontWeight: '600',
                padding: '0.25rem 0.75rem',
                background: 'rgba(96, 165, 250, 0.1)',
                borderRadius: '6px',
                border: '1px solid rgba(96, 165, 250, 0.2)'
              }}>
                {lang.level}
              </span>
            </div>
            
            <div style={{
              width: '100%',
              height: '8px',
              background: 'rgba(148, 163, 184, 0.2)',
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${lang.proficiency}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
                  borderRadius: '4px',
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Languages; 