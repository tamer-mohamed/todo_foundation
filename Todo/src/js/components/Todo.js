// import React
var React = require('react');


// ES6 modules
import _ from 'lodash';
import Todo from '../objects/Todo';
import TaskComponent from './Task';


var TodoComponent = React.createClass({

    getInitialState: function(){

        return {
            tasks: {},
            info: {}
        }


    },

    componentWillMount: function(){
        let _this = this,
            todo = new Todo({id: this.props.todoID}),
            ref = todo.list(),

            tasks = [],
            info = {};

        // populate tasks info once the data is available
        ref.on('child_added', (data)=>{
            var task = data.val();
            task['.key'] = data.key();

            tasks.push(task);
            this.setState({
                tasks,
                ref
            })
        });


    },

    componentWillUnmount: function(){
        // delete FB ref
        this.state.ref.off();
    },

    render: function(){
        let tasks = _.map(this.state.tasks, function(task){
            return (
                <TaskComponent name={task.name} taskID={task['.key']} key={task['.key']}>
                </TaskComponent>
            )
        });

        return (
            <ul className="tasksList">
                {tasks}
            </ul>
        );
    }
});

export default TodoComponent;