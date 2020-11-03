import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader'
import Dropdown from '../../components/Dropdown';
import Cards from '../../components/Cards';
import MessageCard from '../../components/MessageCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import monthsList from '../../utils/months';

import { Container, Content, ContainerCards } from './styles';

const Dashboard: React.FC = () => {
  const dateNow = new Date();
  
  // const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(dateNow.getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(dateNow.getFullYear());

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

    [...expenses, ...gains].forEach(item => {
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
  }, []);


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

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="green">
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

      <Content>
        <ContainerCards>
          <Cards 
            title="saldo"
            amount={150.00}
            description="atualizado com base nas entradas e saídas"
            icon="dollar"
            color="#4e41f0"
          />
          <Cards 
            title="entradas"
            amount={5000.00}
            description="última movimentação em 18/07/2020 às 11h40"
            icon="arrowUp"
            color="#f7931b"
          />
          <Cards 
            title="saídas"
            amount={4850.00}
            description="última movimentação em 18/07/2020 às 11h40"
            icon="arrowDown"
            color="#e44c4e"
          />
        </ContainerCards>
        <MessageCard />
      </Content>
    </Container>
  );
}

export default Dashboard;