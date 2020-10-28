import React from 'react';
import ContentHeader from '../../components/ContentHeader'
import Dropdown from '../../components/Dropdown';

const Dashboard: React.FC = () => {
  const names = [
    {value: 'G', label: 'Giulia Alves'},
    {value: 'V', label: 'Vilma Silva'},
    {value: 'M', label: 'Milton Sylvio'},
  ];

  return (
    <ContentHeader title="Dashboard" lineColor="green">
      <Dropdown options={names} />
    </ContentHeader>
  );
}

export default Dashboard;