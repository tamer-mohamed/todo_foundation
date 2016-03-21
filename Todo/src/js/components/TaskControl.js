// import React
var React = require('react');


var TaskControlComponent = React.createClass({

    getInitialState: function(){

        return {
            name: '',
            desc: ''
        }

    },


    render: function(){
        return (

                <ul className="tasksControl clearfix">

                    <li className="tasksControl__checkAll">
                        <a href="#" className="tasksControl__checkAll">
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