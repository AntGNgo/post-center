import React, { useEffect, useState } from 'react'


const About = () =>  {
  return (
    <div className="container mx-auto px-2 bg-white h-screen">
      <h1 className="text-3xl mb-5">About</h1>
      <p className='mt-4 px-6 pb-4 leading-6'>Hello! Post Center is a project focusing on practicing both working in the frontend and backend. Here is a list of technologies, frameworks, and libraries used for this project:</p>
      <h2 className="text-2xl mt-5">Frontend</h2>
      <ul className='list-disc mx-8'>
          <li>React</li>
          <li>React-Router-DOM</li>
          <li>Axios</li>
          <li>Tailwindcss</li>
      </ul>
      <h2 className="text-2xl mt-5">Backend</h2>
      <ul className='list-disc mx-8'>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Dotenv</li>
      </ul>
    </div>
  );
}

export default About;
