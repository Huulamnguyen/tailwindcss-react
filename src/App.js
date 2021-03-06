import React from 'react';
import Logo from './img/logo.svg';
import BeachWork from './img/beach-work.jpg';

function App() {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-5">

      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img className="h-10" src={Logo} alt="work station" />
          <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={BeachWork} alt="Woman work on the beach" />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere. 
            <br className="inline" />
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for helping others to discover the meaning of their lives. 
            Lorem Ipsum work from Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for helping others to discover the meaning of their lives.
          </p>
          <div className="mt-4 space-x-1 sm:mt-6">
            <a className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition" href="#">Book your escape</a>
            <a className="btn btn-secondary" href="#">Learn More</a>
          </div>
        </div>
      </div>

      <div className="hidden relative lg:block 2xl:col-span-3">
        <img className="absolute inset-0 w-full h-full object-cover object-center" src={BeachWork} alt="Woman work on the beach" />
      </div>

    </div>
  );
}
export default App;
