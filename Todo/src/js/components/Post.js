// import React
var React = require('react');


var PostComponent = React.createClass({

    getInitialState: function(){

        return {
            name: '',
            desc: ''
        }

    },


    render: function(){
        return (
            <div className="small-12 columns taskPublish">
                <div className="row">
                    <div className="small-11 columns taskPublish__input">
                        <input type="text" placeholder="Things I should do next..."/>
                    </div>

                    <div className="small-1 columns text-right">

                        <div className="taskPost__submit">
                            <a href="" className="button">
                                <i className="fa fa-plus"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});


export default PostComponent;