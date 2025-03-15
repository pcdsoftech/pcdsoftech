import React from 'react';
import UserSection from '../components/account/Usersection';
import CardSection from '../components/account/CardSection';
import ButtonSection from '../components/account/ButtonSection';
import DashLink from '../components/account/DashLink';

const Dashboard: React.FC = () => {
  return (
    <>
      <UserSection />
      <DashLink />
	    <CardSection />
      <ButtonSection />
    </>
  );
};

export default Dashboard;