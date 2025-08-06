import { motion } from 'framer-motion';

const WorkExperience = () => {
  const workHistory = [
    {
      period: '2024 / 2.5 kk',
      title: 'Kokoonpanija',
      company: 'Oras Oy',
      location: 'Rauma',
      employmentType: 'Kokopäivätyö (Kesätyö)',
      tasks: ['Kokoonpano', 'Pakkaus']
    },
    {
      period: '2025 / 4 kk',
      title: 'Tuotanto',
      company: 'Finnchain Oy',
      location: 'Rauma',
      employmentType: 'Kokopäivätyö',
      tasks: ['Kokoamista', 'Pakkaamista', 'Asennusta']
    },
    {
      period: '2023-2025 / 1 v 1.5 kk',
      title: 'Kiinteistö\nHuoltomies',
      company: 'Pihapalvelu Rauma Oy',
      location: 'Rauma',
      employmentType: 'Osaaikatyö',
      tasks: ['Kiinteistöhuolto', 'Siivous', 'Korjaustyöt', 'Yleishuolto']
    },
    {
      period: '2023 / 4 kk',
      title: 'Koneistaja',
      company: 'Kolmikoneistus Oy',
      location: 'Rauma',
      employmentType: 'Kokopäivätyö (Oppisopimus)',
      tasks: ['Sorvaus', 'Hitsaus', 'Laadunvarmistus', 'Jyrsintä']
    },
    {
      period: '2022 / 3 kk',
      title: 'Kesätyö',
      company: 'Kolmikoneistus Oy',
      location: 'Rauma',
      employmentType: 'Kokopäivätyö(Kesätyö)',
      tasks: ['Kappaleiden pakkaus', 'Maalaus', 'Siivous', 'Materiaalin sahaus']
    },
    {
      period: '2021-2022 / 1 v',
      title: 'Laadunvarmistaja',
      company: 'R-Sarkon Oy',
      location: 'Rauma',
      employmentType: 'Iltatyö',
      tasks: ['Laadunvarmistus', 'Pakkaus']
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="section-card"
    >
      <h2 className="section-title">Työkokemus</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {workHistory.map((job, index) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="timeline-item"
          >
            <div style={{
              background: 'rgba(30, 41, 59, 0.6)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.75rem', 
                marginBottom: '1rem' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ 
                      fontSize: '1.375rem', 
                      fontWeight: '700', 
                      color: 'white',
                      marginBottom: '0.25rem',
                      wordBreak: 'break-word'
                    }}>
                      {job.title}
                    </h3>
                    <p style={{ 
                      color: '#60a5fa', 
                      fontWeight: '600',
                      fontSize: '1.125rem',
                      marginBottom: '0.25rem'
                    }}>
                      {job.company}, {job.location}
                    </p>
                    <p style={{ 
                      color: '#94a3b8', 
                      fontWeight: '500',
                      fontSize: '1rem',
                      whiteSpace: 'nowrap'
                    }}>
                      Työsuhteen Muoto: {job.employmentType}
                    </p>
                  </div>
                  <span style={{ 
                    color: '#94a3b8', 
                    fontSize: '0.875rem', 
                    fontWeight: '600',
                    padding: '0.5rem 1rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    alignSelf: 'flex-start'
                  }}>
                    {job.period}
                  </span>
                </div>
              </div>
              <ul style={{ 
                listStyleType: 'none', 
                color: '#cbd5e1', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.5rem',
                padding: 0,
                margin: 0
              }}>
                {job.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} style={{ 
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkExperience; 