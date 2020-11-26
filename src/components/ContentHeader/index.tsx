import React from 'react';
import { 
  Container, 
  TitleHeader,
  Controllers 
} from './styles';

interface IContentHeaderProps {
  title: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  children
}) => (
  <Container>
    <TitleHeader>
      {title}
    </TitleHeader>
    
    <Controllers>
      {children}
    </Controllers>
  </Container>
);

export default ContentHeader;
