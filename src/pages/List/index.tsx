import React, { useMemo , useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinances from '../../components/HistoryFinances';
import Dropdown from '../../components/Dropdown';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import monthsList from '../../utils/months';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const routeEntrance = 'entry';
  const recurrent = 'recorrente';
  const eventual = 'eventual';
  const colorInfo = '#f7931b';
  const colorWarning = '#e44c4e';
  const dateNow = new Date();
  
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(dateNow.getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(dateNow.getFullYear());
  const [frequencySelected, setFrequencySelected] = useState([recurrent, eventual]);

  const { type } = match.params;

  const changes = useMemo(() => {
    return type === routeEntrance ? {
      title: 'Entradas',
      color: colorInfo,
      listData: gains
    } : {
      title: 'Saídas',
      color: colorWarning,
      listData: expenses
    };
  }, [type]);

  const list = changes.listData;

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    list.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year,
      }
    })
  }, [list]);

  const handleFrequencyClick = (frequency: string) => {
    const selected = frequencySelected.findIndex(item => item === frequency);

    if (selected >= 0) {
      const filtered = frequencySelected.filter(item => item !== frequency);
      setFrequencySelected(filtered);
    } else {
      setFrequencySelected((prev) => [...prev,frequency]);
    }
  };

  const handleMonthSelected = (month: String) => {
    try {
      setMonthSelected(Number(month));
    } catch (error) {
      throw new Error('Valor inválido do mês. Aceito somente de 0 - 23');
    }
  };

  const handleYearSelected = (year : String) => {
    try {
      setYearSelected(Number(year ));
    } catch (error) {
      throw new Error('Valor inválido do mês. Aceito somente de 0 - 23');
    }
  };
  
  useEffect(() => {
    const filteredData = list.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const frequency = frequencySelected.includes(item.frequency);

      return month === monthSelected && year === yearSelected && frequency;
    });
    
    const formattedData = filteredData.map(item => {
      const token = Math.random().toString(36).substr(2);

      return {
        id: token + token,
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency === recurrent ? '#4e41f0' : colorWarning,
        dateFormatted: formatDate(item.date),
      }
    });

    setData(formattedData);
  }, [list, monthSelected, yearSelected, frequencySelected])

  return (
    <Container>
      <ContentHeader title={changes.title} lineColor={changes.color}>
        <Dropdown 
          options={months} 
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <Dropdown 
          options={years} 
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button 
          type="button"
          className={
            `tag-filter tag-filter-success 
            ${frequencySelected.includes(recurrent) && 'tag-filter-active'}`
          }
          onClick={() => handleFrequencyClick(recurrent)}
          >
          Recorrentes
        </button>
        <button 
          type="button"
          className={
            `tag-filter tag-filter-warning 
            ${frequencySelected.includes(eventual) && 'tag-filter-active'}`
          }
          onClick={() => handleFrequencyClick(eventual)}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {
          data.map(item => (
            <HistoryFinances
              key={item.id}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
              borderColor={item.frequency}
            />
          ))
        }
      </Content>
    </Container>
  );
}

export default List;