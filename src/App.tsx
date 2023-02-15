import React from 'react';
import Home from './pages/Home';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GlobalStyle } from './components/__style/global.style';

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  );
};

export default App;
