import React from 'react';
import CountUp from 'react-countup';

import dollarIcon from '../../assets/dollar.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';
import arrowUpIcon from '../../assets/arrow-up.svg';

import { Container } from './styles';

interface IColorCardProps {
  title: string;
  amount: number;
  description: string;
  icon: 'dollar' | 'arrowDown' | 'arrowUp';
  color: string;
}

const ColorCard: React.FC<IColorCardProps> = ({
  title,
  amount,
  description,
  icon,
  color,
}) => {
  const iconFormated = {
    'dollar': dollarIcon,
    'arrowDown': arrowDownIcon,
    'arrowUp': arrowUpIcon,
  };

  const getIcon = iconFormated[icon];

  return (
    <Container color={color}>
      <span>{ title }</span>

      <strong>
        <CountUp
          end={amount}
          duration={2.75}
          prefix="R$ "
          separator="."
          decimals={2}
          decimal=","
      />
     </strong>

      <small>{ description }</small>
      <img src={getIcon} alt={title} />
    </Container>
  );
}

export default ColorCard;