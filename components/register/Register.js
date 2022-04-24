import React, { useState, useEffect } from 'react';
import RegisterFreelancer from './RegisterFreelancer';
import RegisterBusiness from './RegisterBusiness';
import RegisterInitial from './RegisterInitial';
import UploadAvatar from '../UploadAvatar';
import Geocode from 'react-geocode';



const Register = () => {
  const [step, setStep] = useState(1);
  const [isFreelancer, setIsFreelancer] = useState(false);
  const [loading, setLoading] = useState(false);


  return (
    <div>
      <h3>{step}</h3>
      {loading && <h1>loading...</h1>}
      {isFreelancer ? <h3>freelancer</h3> : <h3>business</h3>}
      {step === 1 && (
        <RegisterInitial
          setLoading={setLoading}
          setIsFreelancer={setIsFreelancer}
          setStep={setStep}
        />
      )}
      {step === 2 ? (
        isFreelancer ? (
          <RegisterFreelancer setLoading={setLoading} setStep={setStep} />
        ) : (
          <RegisterBusiness setLoading={setLoading} setStep={setStep} />
        )
      ) : null}
      {step === 3 && <UploadAvatar />}
    </div>
  );
};

export default Register;
