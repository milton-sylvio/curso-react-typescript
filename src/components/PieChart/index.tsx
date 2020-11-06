import React from 'react';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer
// } from 'recharts';
import { 
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend
} from './styles';

const PieChart: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend>
          <div className="legend-info">5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend>
          <div className="legend-warning">95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>
    <SideRight>

    </SideRight>
  </Container>
);

export default PieChart;