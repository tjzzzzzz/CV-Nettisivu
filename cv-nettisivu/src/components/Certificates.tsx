import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      name: 'Tulityökortti',
      validUntil: '2026',
      color: '#10b981'
    },
    {
      name: 'Ensiapu 1-kortti',
      validUntil: '2026',
      color: '#10b981'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="section-card"
    >
      <h2 className="section-title">Kortit ja passit</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              borderRadius: '12px',
              padding: '1.25rem',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              background: cert.color,
              borderRadius: '2px'
            }} />
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: '1rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.25rem'
                }}>
                  {cert.name}
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  Voimassa: {cert.validUntil}
                </p>
              </div>
              <div style={{
                width: '12px',
                height: '12px',
                background: cert.color,
                borderRadius: '50%',
                boxShadow: `0 0 10px ${cert.color}40`
              }} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates; 