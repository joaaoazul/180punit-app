import React, { useState } from 'react';

function TrainerDashboard() {
    const [athletes, setAthletes] = useState([]);
    const [upcomingSessions, setUpcomingSessions] = useState([]);
    const [stats, setStats] = useState({});
  
    useEffect(() => {
      // Carregar dados do backend
      fetchAthletes();
      fetchUpcomingSessions();
      fetchStats();
    }, []);
  
    return (
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total de Atletas</h3>
            <p>{stats.totalAthletes || 0}</p>
          </div>
          <div className="stat-card">
            <h3>Sessões Hoje</h3>
            <p>{stats.todaySessions || 0}</p>
          </div>
          <div className="stat-card">
            <h3>Receita Mensal</h3>
            <p>R$ {stats.monthlyRevenue || 0}</p>
          </div>
        </div>
        
        <h2>Atletas Recentes</h2>
        <div className="athletes-list">
          {athletes.slice(0, 5).map(athlete => (
            <div key={athlete.id} className="athlete-card">
              <img src={athlete.avatar} alt={athlete.name} />
              <h3>{athlete.name}</h3>
              <p>{athlete.plan}</p>
              <button>Ver Perfil</button>
            </div>
          ))}
          <button>Ver Todos</button>
        </div>
        
        <h2>Próximas Sessões</h2>
        <div className="sessions-list">
          {upcomingSessions.map(session => (
            <div key={session.id} className="session-card">
              <p>{formatDate(session.date)}</p>
              <h3>{session.athlete.name}</h3>
              <p>{session.type}</p>
              <button>Detalhes</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default TrainerDashboard;