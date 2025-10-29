// src/App.tsx

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 

 import BoardPage from './pages/BoardPage'; 
 import LoginPage from './pages/LoginPage'; 
import Header from './components/common/Header'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board/:boardId" element={<BoardPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;