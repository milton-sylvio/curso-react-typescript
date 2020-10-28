import React from 'react';
import { 
  Container, 
  TitleHeader,
  Controllers 
} from './styles';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children
}) => {

  return (
    <Container>
      <TitleHeader lineColor={lineColor}>
        {title}
      </TitleHeader>
      
      <Controllers>
        {children}
      </Controllers>
    </Container>
  );
}

export default ContentHeader;
