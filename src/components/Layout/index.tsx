import React from 'react';
import { Grid } from './styles';

import Header from '../Header';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = ({ children }) => (
  <Grid>
    <Header />
    <Aside />
    <Content>
      { children }
    </Content>
  </Grid>
);

export default Layout;
