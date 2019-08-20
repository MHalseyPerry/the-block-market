import React, { Component } from 'react';
import './item.css'

class Item extends Component {

    render(){
        const {name,type,meta} = this.props.item
        return (
            <div className="item">
                <img src={`/img/item_icons/${type}-${meta}.png`}/>
                {/* <p>
                    {name}
                </p> */}
            </div>
        );
    }
}

export { Item };
