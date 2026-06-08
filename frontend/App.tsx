import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import FestivalDetail from './pages/FestivalDetail';
import LiveVillan from './pages/LiveVillan';
import LostPhone from './pages/LostPhone';
import Profile from './pages/Profile';
import Login from './pages/Login';
import CreateAura from './pages/CreateAura';
import OrganizerDashboard from './pages/OrganizerDashboard';

// Wrapper to handle navigation visibility and route protection
const AppContent: React.FC<{ 
  isAuth: boolean; 
  hasAura: boolean; 
  onLogin: () => void; 
  onAuraCreated: () => void;
}> = ({ isAuth, hasAura, onLogin, onAuraCreated }) => {
  const location = useLocation();
  const hideNav = location.pathname === '/login' || location.pathname === '/create-aura' || location.pathname === '/lost' || location.pathname === '/organizer';

  return (
    <div className="flex flex-col min-h-screen bg-villan-darker text-white font-sans selection:bg-villan-accent selection:text-black">
      <main className="flex-1 relative">
        <Routes>
          {/* Public / Auth Routes */}
          <Route path="/login" element={
            isAuth ? (hasAura ? <Navigate to="/" /> : <Navigate to="/create-aura" />) : <Login onLogin={onLogin} />
          } />
          <Route path="/create-aura" element={
            !isAuth ? <Navigate to="/login" /> : (hasAura ? <Navigate to="/" /> : <CreateAura onComplete={onAuraCreated} />)
          } />
          
          {/* Protected Routes */}
          <Route path="/" element={
            !isAuth ? <Navigate to="/login" /> : (!hasAura ? <Navigate to="/create-aura" /> : <Home />)
          } />
          <Route path="/festival/:id" element={
            !isAuth ? <Navigate to="/login" /> : (!hasAura ? <Navigate to="/create-aura" /> : <FestivalDetail />)
          } />
          <Route path="/live/:id" element={
            !isAuth ? <Navigate to="/login" /> : (!hasAura ? <Navigate to="/create-aura" /> : <LiveVillan />)
          } />
          <Route path="/profile" element={
            !isAuth ? <Navigate to="/login" /> : (!hasAura ? <Navigate to="/create-aura" /> : <Profile />)
          } />
          
          {/* B2B Organizer Route */}
          <Route path="/organizer" element={<OrganizerDashboard />} />

          {/* Emergency Route (Accessible anytime ideally, but kept here for structure) */}
          <Route path="/lost" element={<LostPhone />} />
        </Routes>
      </main>
      {!hideNav && <Navigation />}
    </div>
  );
};

const App: React.FC = () => {
  // Simulated Auth State
  const [isAuth, setIsAuth] = useState(false);
  const [hasAura, setHasAura] = useState(false);

  return (
    <HashRouter>
      <AppContent 
        isAuth={isAuth} 
        hasAura={hasAura} 
        onLogin={() => setIsAuth(true)} 
        onAuraCreated={() => setHasAura(true)} 
      />
    </HashRouter>
  );
};

export default App;
