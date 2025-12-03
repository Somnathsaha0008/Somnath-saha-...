import React, { useState } from 'react';

const FormPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '') {
      setMessage('Please fill all fields.');
      setMessageType('error');
    } else {
      setMessage('Form submitted!');
      setMessageType('success');
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Form Page</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="name-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out"
          data-testid="submit-button"
        >
          Submit
        </button>
      </form>
      {message && (
        <p
          className={`mt-6 text-center text-lg font-medium ${
            messageType === 'success' ? 'text-green-700' : 'text-red-700'
          }`}
          data-testid="form-message"
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default FormPage;