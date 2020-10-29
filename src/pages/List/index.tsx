import React, { useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinances from '../../components/HistoryFinances';
import Dropdown from '../../components/Dropdown';
import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const { type } = match.params;
  
  const changes = useMemo(() => {
    return type === 'entry' ? {
      title: 'Entradas',
      color: '#F7931B'
    } : {
      title: 'Saídas',
      color: '#E44C4E'
    };
  }, [type]);

  const months = [
    {value: 7, label: 'Julho'},
    {value: 8, label: 'Agosto'},
    {value: 9, label: 'Setembro'},
  ];
  const years = [
    {value: 2018, label: 2018},
    {value: 2019, label: 2019},
    {value: 2020, label: 2020},
  ];

  return (
    <Container>
      <ContentHeader title={changes.title} lineColor={changes.color}>
        <Dropdown options={months} />
        <Dropdown options={years} />
      </ContentHeader>

      <Filters>
        <button 
          type="button"
          className="tag-filter tag-filter-success"
        >
          Recorrentes
        </button>
        <button 
          type="button"
          className="tag-filter tag-filter-warning"
        >
          Eventuais
        </button>
      </Filters>

      <Content>
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