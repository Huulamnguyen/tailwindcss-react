import React from 'react';
import Logo from './img/logo.svg';
import BeachWork from './img/beach-work.jpg';

function App() {
  return (
    <div className="px-8 py-12">
      <img className="h-10" src={Logo} alt="work station" />
      <img className="mt-6 rounded-lg shadow-xl" src={BeachWork} alt="Woman work on the beach" />
      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        You can work from anywhere. 
        <span className="text-indigo-500">Take advantage of it.</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for helping others to discover the meaning of their lives. 
        Lorem Ipsum work from Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for helping others to discover the meaning of their lives.
      </p>
      <div className="mt-4">
        <a className="inline-block px-5 py-3 rounded-lg bg-indigo-500 text-white shadow-lg uppercase tracking-wider font-semibold text-sm" href="#">Book your escape</a>
      </div>
    </div>
  );
}

export default App;
