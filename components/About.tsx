import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About TestPlayground</h1>
      <p className="text-lg text-gray-700 mb-6">
        TestPlayground is a simple, static web application built with React and Tailwind CSS.
        Its primary purpose is to serve as a practice ground for software testing students,
        allowing them to perform manual and automated tests using tools like Selenium.
      </p>
      <p className="text-md text-gray-600">
        This application demonstrates basic UI components such as navigation, forms, tables,
        and custom context menus, all without requiring a backend or database.
      </p>
    </div>
  );
};

export default About;