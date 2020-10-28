import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinances from '../../components/HistoryFinances';
import Dropdown from '../../components/Dropdown';
import { Container, Content } from './styles';

const List: React.FC = () => {
  const names = [
    {value: 0, label: 'Eglair'},
    {value: 1, label: 'Rosária'},
    {value: 2, label: 'Rosangela'},
  ];

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="blue">
        <Dropdown options={names} />
      </ContentHeader>

      <Content>
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinances   
          borderColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
}

export default List;