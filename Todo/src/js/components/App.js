// import React
var React = require('react');

import TodoComponent from './Todo';
import PostComponent from './Post';
import TaskControlComponent from './TaskControl';
import TodoInfo from './TodoInfo';


const TodoID = 1;

var AppComponent = React.createClass({

    render: function(){
        return (
            <div className="row todoApp__container">
                <div className="small-12 columns">
                    <div className="row">

                        <div className="small-12 columns">
                            <TaskControlComponent todoID={TodoID} key={`taskControl-${TodoID}`}/>
                        </div>


                        <div className="small-12 columns border"/>

                        <div className="small-12 columns">
                            <TodoInfo todoID={TodoID} key={`todoInfo-${TodoID}`}/>
                        </div>

                        <div className="small-12 columns">
                            <TodoComponent todoID={TodoID} key={`todoList-${TodoID}`}/>
                        </div>
                        <PostComponent todoID={TodoID}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default AppComponent;