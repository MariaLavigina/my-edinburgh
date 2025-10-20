import { useEffect, useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then(res => res.json())
      .then(data => {
        // Shuffle the questions
        const shuffled = data.sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading questions...</p>;
  }

  const currentQuestion = questions[currentIndex];

  const nextQuestion = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < questions.length ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Edinburgh Quiz</h1>
      
      <div className="mb-8 border-b pb-4">
        <h2 className="text-xl font-semibold mb-3">
          {currentIndex + 1}. {currentQuestion.question}
        </h2>
        <ul>
          {Object.entries(currentQuestion.options).map(([key, value]) => (
            <li key={key} className="mb-2">
              <button
                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => console.log(`Selected: ${key}`)} // Placeholder
              >
                {key.toUpperCase()}. {value}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Quiz;
