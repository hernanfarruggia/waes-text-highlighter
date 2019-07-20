// Libraries
import React from 'react';

// Components
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Button from '../../components-ui/button';
import Form from '../../components-ui/form';

// Styles
import './app.css';

class App extends React.Component {

    render() {

        return (
            <Provider store={ store }>
                <div className="wrapper">

                    <Form />

                    <div className="block">
                        <div className="colors">
                            <Button text="Red" type="red" />
                            <Button text="Yellow" type="yellow" />
                            <Button text="Green" type="green" />
                        </div>
                        <div className="text">
                            Please introduce a text first!
                        </div>
                    </div>

                    <div className="block">
                        <div className="colors">
                            <Button text="Red" type="red" />
                            <Button text="Yellow" type="yellow" />
                            <Button text="Green" type="green" />
                        </div>
                        <div className="text">
                            Plese select a color to list selected text!
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
