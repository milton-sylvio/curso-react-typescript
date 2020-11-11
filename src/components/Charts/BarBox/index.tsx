import React from 'react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  // YAxis,
  // CartesianGrid,
  // Tooltip,
} from 'recharts';

import { 
  Container, 
  SideLeft,
  SideRight,
  LegendContainer,
  Legend
} from './styles';

interface IBarBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    legend: string;
    percent: number;
    color: string;
    type: string;
  }[];
}

const BarBox: React.FC<IBarBoxProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{ title }</h2>

        <LegendContainer>
        {
          data.map(d => (
            <Legend key={d.name}>
              <div className={d.type}>
                {d.percent}%
              </div>
              <span>{d.name}</span>
            </Legend>
          ))
        }
      </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount">
              {
                data.map(d => (
                  <Cell 
                  key={d.amount} 
                  fill={d.color} 
                  />
                ))
              }
            </Bar>
            <XAxis dataKey="legend" stroke="#cecece"  />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
}

export default BarBox;