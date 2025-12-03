import React, { useState } from 'react';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleShowMessage = () => {
    setMessage('Button clicked successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to TestPlayground</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a simple static website designed for Selenium testing practice. You can navigate
        through various pages to interact with different UI elements.
      </p>
      <button
        id="showMessageButton"
        onClick={handleShowMessage}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300 ease-in-out"
      >
        Show Message
      </button>
      {message && (
        <p id="messageDisplay" className="mt-6 text-xl font-medium text-green-700">
          {message}
        </p>
      )}
    </div>
  );
};

export default Home;