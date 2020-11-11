import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader'
import Dropdown from '../../components/Dropdown';
import ColorCard from '../../components/ColorCard';
import MessageCard from '../../components/MessageCard';
import ChartPieBox from '../../components/Charts/PieBox';
import ChartHistoryBox from '../../components/Charts/HistoryBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import monthsList from '../../utils/months';

import happyIcon from '../../assets/happy.svg';
import sadIcon from '../../assets/sad.svg';
import opsIcon from '../../assets/ops.svg';

import { Container, Content, ContainerColorsCards } from './styles';

const Dashboard: React.FC = () => {
  const dateNow = new Date();
  
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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error(`Valor inválido: ${error}`);
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error(`Valor inválido: ${error}`);
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais que deveria!',
        footerTxt: 'Verifique seus gastos e tente economizar.',
        icon: sadIcon,
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Ufaaaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou!',
        footerTxt: 'Tenha cuidado no próximo mês.',
        icon: opsIcon,
      }
    } else {
      return {
        title:" Muito bem!",
        description: "Sua carteira está positiva!",
        footerTxt:"Continue assim. Considere investir o seu saldo.",
        icon: happyIcon,
      }
    }

  }, [totalBalance]);
  
  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const gainsPercent = (totalGains / total) * 100;
    const expensesPercent = (totalExpenses / total) * 100;

    const data = [
      {
        name: 'Entradas',
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(1)),
        color: '#e44c4e',
        type: 'warning'
      },
      {
        name: 'Saídas',
        value: totalGains,
        percent: Number(gainsPercent.toFixed(1)),
        color: '#f7931b',
        type: 'info'
      },
    ];

    return data;
  }, [totalGains, totalExpenses])
  
  const historyData = useMemo(() => {
    return monthsList.map((_, month) => {
       let amountEntry = 0;

       gains.forEach(gain => {
         const date = new Date(gain.date);
         const gainMonth = date.getMonth();
         const gainYear = date.getFullYear();

         if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);
          } catch {
            throw new Error('O valor de entrada é inválido, por favor, verifique o valor');
          }
         }
       });

       let amountOutput = 0;

       expenses.forEach(expense => {
         const date = new Date(expense.date);
         const expenseMonth = date.getMonth();
         const expenseYear = date.getFullYear();

         if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount);
          } catch {
            throw new Error('O valor de saída é inválido, por favor, verifique o valor');
          }
         }
       });

       return {
        monthNumber: month,
        month: monthsList[month].substr(0, 3),
        amountEntry,
        amountOutput
}
    })
    .filter(item => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
    });

  }, [yearSelected]);
  
  const handleMonthSelected = (month: String) => {
    try {
      setMonthSelected(Number(month));
    } catch (error) {
      throw new Error(`Valor inválido do mês. Aceito somente de 0 - 23: ${error}`);
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
        <ContainerColorsCards>
          <ColorCard 
            title="saldo"
            amount={totalBalance}
            description="atualizado com base nas entradas e saídas"
            icon="dollar"
            color="#4e41f0"
          />
          <ColorCard 
            title="entradas"
            amount={totalGains}
            description="última movimentação em 18/07/2020 às 11h40"
            icon="arrowUp"
            color="#f7931b"
          />
          <ColorCard 
            title="saídas"
            amount={totalExpenses}
            description="última movimentação em 18/07/2020 às 11h40"
            icon="arrowDown"
            color="#e44c4e"
          />
        </ContainerColorsCards>
        
        <MessageCard
          title={message.title}
          description={message.description}
          footerTxt={message.footerTxt}
          icon={message.icon} 
        />

        <ChartPieBox data={relationExpensesVersusGains} />

        <ChartHistoryBox 
          data={historyData} 
          lineColorAmountEntry="#F7931B" 
          lineColorAmountOutput="#E44C4E" 
        />
      </Content>
    </Container>
  );
}

export default Dashboard;