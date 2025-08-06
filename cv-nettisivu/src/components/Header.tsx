import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Ansioluettelo';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ textAlign: 'center', position: 'relative' }}
    >
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1
      }} />

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          marginBottom: '2rem',
          letterSpacing: '0.05em',
          lineHeight: '1.1',
          minHeight: '3.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Inter, sans-serif',
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          color: '#f8fafc'
        }}
      >
        <span style={{
          color: '#f8fafc'
        }}>
          {displayText}
        </span>
        {currentIndex < fullText.length && (
          <span style={{
            width: '3px',
            height: '2.5rem',
            background: 'linear-gradient(135deg, #cbd5e1, #94a3b8)',
            marginLeft: '6px',
            animation: 'blink 1s infinite',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(203, 213, 225, 0.5)'
          }} />
        )}
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ 
          color: '#cbd5e1', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          alignItems: 'center'
        }}
      >
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(30, 41, 59, 0.6)',
            borderRadius: '12px',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(12px)'
          }}>
            <span style={{ fontSize: '1.25rem' }}>📍</span>
            <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>Turku</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(30, 41, 59, 0.6)',
            borderRadius: '12px',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(12px)',
            color: '#cbd5e1'
          }}>
            <span style={{ fontSize: '1.25rem' }}>📞</span>
            <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>+358 45 787 4771</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(30, 41, 59, 0.6)',
            borderRadius: '12px',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(12px)',
            color: '#cbd5e1'
          }}>
            <span style={{ fontSize: '1.25rem' }}>✉️</span>
            <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>tuure171@gmail.com</span>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 