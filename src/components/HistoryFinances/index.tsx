import React from 'react';
import { Container } from './styles';

interface IHistoryFinancesProps {
  borderColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinances: React.FC<IHistoryFinancesProps> = ({
  borderColor,
  title,
  subtitle,
  amount
}) => (
  <Container borderColor={borderColor}>
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
);

export default HistoryFinances;
