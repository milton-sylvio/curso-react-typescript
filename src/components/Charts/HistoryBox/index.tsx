import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

import formatCurrency from '../../../utils/formatCurrency';

import { 
  Container, 
  Header,
  Legends,
  LegendItem
} from './styles';

interface IHistoryBoxProps {
    data: {
      month: string;
      amountEntry: number;
      amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput
}) => (
  <Container>
    <Header>
      <h2>Histórico de saldo</h2>

      <Legends>
        <LegendItem className="info">
          Entradas
        </LegendItem>
        <LegendItem className="warning">
          Saídas
        </LegendItem>
      </Legends>
    </Header>
  
    <ResponsiveContainer>
      <LineChart data={data} margin={{ right: 15, left: 15 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <XAxis dataKey="month" stroke="#cecece" />
        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
        <Line 
          type="monotone"                
          dataKey="amountEntry"
          name="Entradas"
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5}}
          activeDot={{ r: 8}}
        />
        <Line 
          type="monotone"                
          dataKey="amountOutput"
          name="Saídas"
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5}}
          activeDot={{ r: 8}}
        />
      </LineChart>
    </ResponsiveContainer> 
  </Container>
);

export default HistoryBox;
