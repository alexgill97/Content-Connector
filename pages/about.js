import React from 'react';
import Navbar from '../components/Navbar';

export default function about() {
  return (
    <div>
      <Navbar />
      <h2 className="grid items-center">Who we are</h2>
      <p className="grid items-center">
        We are a web application that allows local freelancers to connect with
        small businesses, giving businesses a platform to express their business
        needs and create a relationship through communication.
      </p>
    </div>
  );
}
