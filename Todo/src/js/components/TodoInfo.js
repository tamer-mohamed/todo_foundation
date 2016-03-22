// import React
var React = require('react');


// ES6 modules
import _ from 'lodash';
import Todo from '../objects/Todo';


var TodoInfo = React.createClass({

    getInitialState: function(){

        return {
            info: {},
            ref: null
        }


    },

    componentWillMount: function(){
        let todo = new Todo({id: this.props.todoID}),
            ref = todo.get(),

            info = {};


        // populate todo info once the data is available
        ref.on('value', (data)=>{
            info = data.val();
            this.setState({
                info,
                ref
            })
        });


    },

    componentWillUnmount: function(){
        //TODO: clear all open WS
    },

    render: function(){
        return (
            <div className="listHeader">
                <h2>{this.state.info.name}</h2>
                <p>{this.state.info.desc}</p>
            </div>
        );
    }
});

export default TodoInfo;