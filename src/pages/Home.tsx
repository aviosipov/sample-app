import React from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Button } from "../components/Button";

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

        <div className="flex justify-center items-center space-x-4">
          <Button variant="primary">
            Get Started
          </Button>
          <Button variant="secondary">
            View Docs
          </Button>
          <div className="h-8 w-px bg-gray-300 mx-2"></div>
          <Button variant="accent" to="/he">
            עברית
          </Button>
        </div>
      </div>
    </ContentContainer>
  );
};

export { Home };
