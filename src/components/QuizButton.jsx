// components/QuizButton.jsx

const QuizButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition duration-300"
      >
        Take the Quiz
      </button>
    </div>
  );
};

export default QuizButton;






