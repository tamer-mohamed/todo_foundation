// import React
var React = require('react');

import debugLog from '../utils/logs';

/**
 * Task control component
 *
 * Contains all inputs/filters that control tasks (ex. Mark all as finished)
 */
var TaskControlComponent = React.createClass({

    getInitialState: function(){

        return {
            name: '',
            desc: ''
        }

    },

    markAll: function(){

        // TODO: mark all tasks as checked
        debugLog('ALl is marked as finished');

    },


    render: function(){
        return (

            <ul className="tasksControl clearfix">

                <li className="tasksControl__checkAll">
                    <a href="#" className="tasksControl__checkAll" onClick={this.markAll}>
                        <h5>Mark all as finished</h5>

                        <span className="tasksControl__checkAll__iconHolder">
                            <i className="fa fa-check"/>
                        </span>
                    </a>
                </li>

            </ul>
        );
    }
});


export default TaskControlComponent;