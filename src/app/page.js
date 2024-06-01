import ClientAboutView from '@/components/ClientAboutView';
import ClientHomeView from '@/components/ClientHomeView';
import EmailSection from '@/components/EmailSection';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import React from 'react';

const page = () => {
  return (
    <div>

      <Navbar/>
      <ClientHomeView/>
      <ClientAboutView/>
      <ProjectsSection/>
      <EmailSection/>

    </div>
  );
};

export default page;