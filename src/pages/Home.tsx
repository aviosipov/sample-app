import React from "react";
import { ContentContainer } from "../components/ContentContainer";

const Home = () => {
  return (
    <ContentContainer>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Modern React Starter Kit
        </h1>
        
        <p className="text-lg mb-8 text-gray-700">
          Welcome to your new React project! This starter kit includes everything you need
          to build modern web applications with React, TypeScript, and Tailwind CSS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">🚀 Quick Start</h2>
            <p className="text-gray-600">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">src/pages/Home.tsx</code> to
              customize this page and start building your application.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">📚 Resources</h2>
            <ul className="text-gray-600 text-left list-disc list-inside">
              <li>Vite Documentation</li>
              <li>React Documentation</li>
              <li>Tailwind CSS Guide</li>
              <li>TypeScript Handbook</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            View Docs
          </button>
        </div>
      </div>
    </ContentContainer>
  );
};

export { Home };
