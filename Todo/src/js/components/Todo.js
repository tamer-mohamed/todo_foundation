// import React
var React = require('react');


// ES6 modules
import _ from 'lodash';
import Todo from '../objects/Todo';
import TaskComponent from './Task';
import Task from '../utils/Task';
import debugLog from '../utils/logs';


var TodoComponent = React.createClass({

    getInitialState: function(){

        return {
            id: this.props.todoID,
            tasks: {}
        }

    },

    componentWillMount: function(){
        let todo = new Task({id: this.props.todoID}),
            ref = todo.list(),

            tasks = [];

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

        debugLog('Rendering & Loading tasks ----------------------');

        let tasks = _.map(this.state.tasks, (task)=>{

            debugLog('----------------------');
            debugLog(task);

            return (
                <TaskComponent name={task.name} isChecked={task.isChecked} todoID={this.props.todoID}
                               taskID={task['.key']} key={task['.key']}>
                </TaskComponent>
            )
        });

        return (
            <ul className="tasksList row">
                {tasks}
            </ul>
        );
    }
});

export default TodoComponent;