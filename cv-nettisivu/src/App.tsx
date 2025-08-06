import Header from './components/Header';
import Profile from './components/Profile';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: '#f8fafc',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
        zIndex: -1
      }} />

      <Header />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <PersonalInfo />
          <Profile />
          <Skills />
          <Languages />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <WorkExperience />
          <Certificates />
        </div>
      </div>
    </div>
  );
}

export default App;
