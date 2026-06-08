export const fetchLiveFestivalData = async (query: string) => {
  // Simulate network latency for realism
  await new Promise(resolve => setTimeout(resolve, 800)); 
  
  const q = query.toLowerCase();
  
  if (q.includes('water') || q.includes('hydrate')) {
    return { 
      endpoint: '/api/v1/facilities/water', 
      status: 200, 
      data: { waitTime: '2 mins', capacity: '85%', status: 'Flowing', nearest: 'Sector 4' } 
    };
  }
  
  if (q.includes('stage') || q.includes('playing') || q.includes('music') || q.includes('artist')) {
    return { 
      endpoint: '/api/v1/stages/active', 
      status: 200, 
      data: { currentAct: 'Excision', nextAct: 'Zeds Dead', crowdDensity: '94%', stage: 'Neon Circuit' } 
    };
  }
  
  if (q.includes('medic') || q.includes('help') || q.includes('emergency')) {
    return { 
      endpoint: '/api/v1/emergency/medic', 
      status: 200, 
      data: { nearest: '150m North', status: 'Available', unitsDeployed: 2, alertLevel: 'Elevated' } 
    };
  }
  
  if (q.includes('food') || q.includes('eat') || q.includes('hungry')) {
    return { 
      endpoint: '/api/v1/vendors/food', 
      status: 200, 
      data: { nearest: 'Spicy Pie', waitTime: '15 mins', status: 'Open' } 
    };
  }
  
  if (q.includes('weather') || q.includes('rain') || q.includes('hot')) {
    return { 
      endpoint: '/api/v1/weather/current', 
      status: 200, 
      data: { temp: '85F', condition: 'Clear', wind: '5mph', forecast: 'Stable' } 
    };
  }

  // Default fallback endpoint
  return { 
    endpoint: '/api/v1/general/status', 
    status: 200, 
    data: { festivalStatus: 'Nominal', gridPower: '98%', networkTraffic: 'High' } 
  };
};
