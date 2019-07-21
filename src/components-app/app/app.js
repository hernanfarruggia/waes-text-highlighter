// Libraries
import React from 'react';

// Components
import { Provider } from 'react-redux';
import store from '../../redux/store'
import Form from '../../components-ui/form';
import Highlighter from '../../components-app/highlighter';
import Filter from '../../components-app/filter';

// Styles
import './app.css';

class App extends React.Component {

    render() {

        return (
            <Provider store={ store }>
                <div className="wrapper">

                    <Form />

                    <Highlighter />

                    <Filter />
                </div>
            </Provider>
        );
    }
}

export default App;
