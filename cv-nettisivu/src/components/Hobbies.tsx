import { motion } from 'framer-motion';

const Hobbies = () => {
  const hobbies = [
    { name: 'Kuntosali', icon: '💪', color: '#3b82f6' },
    { name: 'Musiikin kuuntelu', icon: '🎵', color: '#8b5cf6' },
    { name: 'Kalastus', icon: '🎣', color: '#06b6d4' },
    { name: 'Koneiden korjaus', icon: '🔧', color: '#f59e0b' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="section-card"
    >
      <h2 className="section-title">Harrastukset</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            className="hobby-card"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
            }}>
              {hobby.icon}
            </div>
            <span style={{ 
              color: 'white', 
              fontWeight: '600', 
              fontSize: '1rem',
              letterSpacing: '0.025em'
            }}>
              {hobby.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Hobbies; 