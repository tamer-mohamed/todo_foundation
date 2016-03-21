// import React
var React = require('react');


// TODO: move check-icon button to a separate component


var TaskComponent = React.createClass({


    getInitialState: function(){

        // setting the initial state of task component
        return {
            id: this.props.taskID,
            name: '',
            desc: '',
            checked: false
        }

    },

    toggleTask: function(e){
        this.setState({checked: !this.state.checked});
    },

    render: function(){
        var liClasses = classNames({
            "small-2 columns task__checkMarker  text-right": true,
            "task__checkMarker--checked": this.state.checked
        });


        return (
            <li className="row task">

                <div className="small-10 columns task__title">
                    <span>{this.props.name}</span>
                </div>

                <div
                    className={liClasses}>
                    <a href="#" className="marker" onClick={this.toggleTask}>
                        <i className="fa fa-check marker__icon"></i>
                    </a>
                </div>


            </li>
        );
    }
});


export default TaskComponent;