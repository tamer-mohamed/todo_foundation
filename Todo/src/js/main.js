var $ = require('jquery');
var foundation = require('../../node_modules/foundation-sites/dist/foundation.js');


// import app objects
import Todo from './objects/Todo';
import AppComponent from './components/App';

// import React
var React = require('react');
var ReactDOM = require('react-dom');


// since we are dealing with one TODO only, we will be using TODO(ID:1)


// init foundation
$(document).foundation();

console.log('APP LOADED ... ');


ReactDOM.render(
    <AppComponent/>,
    document.getElementById('todoApp')
);


//var Application = (function(){
//
//    function init(){
//
//
//
//
//    }
//
//    return {
//        init
//    }
//
//})();
//
//
//Application.init();
