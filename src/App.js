import React from 'react';

function App() {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>🧠 ThreadMind AI</h1>
      <p>Your AI-powered email assistant is coming soon!</p>
      <div style={{ 
        background: '#f0f8ff', 
        padding: '20px', 
        borderRadius: '10px', 
        margin: '20px 0' 
      }}>
        <h3>Features in Development:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>📧 Smart email thread analysis</li>
          <li>✅ Automatic action item extraction</li>
          <li>🎯 AI-powered priority scoring</li>
          <li>🔄 Intelligent follow-up reminders</li>
        </ul>
      </div>
      <p><strong>Status:</strong> Building MVP 🚀</p>
    </div>
  );
}

export default App;
