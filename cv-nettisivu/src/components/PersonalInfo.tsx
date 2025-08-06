import { motion } from 'framer-motion';

const PersonalInfo = () => {
  const personalDetails = [
    { label: 'Nimi', value: 'Tuure Hannes Santeri Salonen' },
    { label: 'Syntymäaika', value: '11.12.2005' },
    { label: 'Syntymäpaikka', value: 'Turku' },
    { label: 'Ajokortti', value: 'B' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="section-card"
    >
      <h2 className="section-title">Henkilötiedot</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {personalDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <span style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
              {detail.label}
            </span>
            <span style={{ color: 'white', fontSize: '1.125rem' }}>
              {detail.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PersonalInfo; 