import './App.css';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('welcome');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to React Tutorials</h1>
        <p className="subtitle">Master React with our comprehensive guide</p>
      </header>
      
      <nav className="tabs">
        <button 
          className={`tab-button ${activeTab === 'welcome' ? 'active' : ''}`}
          onClick={() => setActiveTab('welcome')}
        >
          Welcome
        </button>
        <button 
          className={`tab-button ${activeTab === 'lessons' ? 'active' : ''}`}
          onClick={() => setActiveTab('lessons')}
        >
          Lessons
        </button>
        <button 
          className={`tab-button ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </button>
      </nav>

      <main className="content">
        {activeTab === 'welcome' && (
          <div className="welcome-content">
            <h2>🚀 Get Started with React</h2>
            <p>Welcome to our React tutorial series! Here you'll learn everything you need to know to become a React pro.</p>
            <div className="features">
              <div className="feature">
                <h3>Learn by Doing</h3>
                <p>Hands-on exercises and real-world projects</p>
              </div>
              <div className="feature">
                <h3>Step by Step</h3>
                <p>From basics to advanced concepts</p>
              </div>
              <div className="feature">
                <h3>Community Support</h3>
                <p>Join our community of learners</p>
              </div>
            </div>
            <button className="cta-button">Start Learning</button>
          </div>
        )}
        
        {activeTab === 'lessons' && (
          <div className="lessons-content">
            <h2>📚 Course Outline</h2>
            <ul className="lessons-list">
              <li>1. Introduction to React</li>
              <li>2. Components & Props</li>
              <li>3. State & Lifecycle</li>
              <li>4. Hooks in Depth</li>
              <li>5. Routing with React Router</li>
            </ul>
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div className="resources-content">
            <h2>🔗 Helpful Resources</h2>
            <ul className="resources-list">
              <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Official React Documentation</a></li>
              <li><a href="https://reactpatterns.com/" target="_blank" rel="noopener noreferrer">React Patterns</a></li>
              <li><a href="https://github.com/enaqx/awesome-react" target="_blank" rel="noopener noreferrer">Awesome React</a></li>
            </ul>
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>© 2023 React Tutorials. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
