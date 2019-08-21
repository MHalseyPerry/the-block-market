import React, { Component } from 'react';
import { Inventory } from './components/Inventory';
import './App.css';

class App extends Component {
    state = {
        items:[]
    }

    componentDidMount(){
        fetch('./items.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({items: data})
            })
    }

    render(){
        return (
            <div>
                <div className="header">
                    <img src="/img/logo.png"/>
                </div>

                <Inventory
                    items={this.state.items.slice(0,20)}
                />

            </div>
        );
    }
}
export default App;
