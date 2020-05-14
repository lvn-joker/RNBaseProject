import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from 'app/src/AppContainer';
import getStore from 'app/src/redux/store';
import { NavigationContainer } from '@react-navigation/native';

const store = getStore();

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
};

export default App;
