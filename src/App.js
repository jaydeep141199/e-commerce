import React from 'react'

import Routing from './Routing';
import { Provider } from 'react-redux';
import Store from './Store';


 const App = () => {
  return (
    <>
    
    <Provider store={Store}>
    <Routing/>
    </Provider>
    </>
  );
};

export default App
