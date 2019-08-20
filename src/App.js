import React, { Component } from 'react';
import { Item } from './components/Item';
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

                <div className="items">
                    {this.state.items.map((item) => (
                        <Item
                            key={`${item.type}_${item.meta}`}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default App;
