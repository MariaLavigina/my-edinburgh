
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import { useState } from 'react';

function App() {
  // 1Add state to control screen
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
    
        {!showQuiz ? (
          <Hero onQuizStart={() => setShowQuiz(true)} /> 
        ) : (
          <Quiz />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;





