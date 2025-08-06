import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'Java',
    'JavaScript',
    'Lua',
    'SourcePawn',
    'SQL',
    'Python',
    'MongoDB',
    'Redis',
    'HTML / CSS',
    'Paper API',
    'Verkkoprotokollat',
    'Backend-/palvelinhallinta'
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="section-card"
    >
      <h2 className="section-title">IT-Taidot</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ 
          background: 'rgba(30, 41, 59, 0.6)', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          border: '1px solid rgba(148, 163, 184, 0.1)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <p style={{ 
          color: '#cbd5e1', 
          fontSize: '1.125rem',
          marginBottom: '1.5rem',
          lineHeight: '1.6'
        }}>
          Ohjelmistokehittäjä Taustaa
        </p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="skill-badge"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills; 