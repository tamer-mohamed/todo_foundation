import _ from 'lodash';
import API from '../utils/api';
import Task from './Task';
import EP from '../utils/constants';

//--------------------------------


export default class Todo {

    constructor(opts){

        let options = opts || {};

        this.id = options.id || null;


        // @private
        this._attributes = {
            id: {required: true}, title: {required: true}
        };

    }


    list(){
        return API.ref(EP.TASK, this.id);
    }


    addTask(data){
        let task = new Task();
        return task.add(data);
    }

    markAsFinished(){
        let task = new Task();
        return task.update(this.id, {finsihed: true});
    }


    undo(){
        let task = new Task();
        return task.update(this.id, {finsihed: false});
    }

    get(){
        return API.ref(EP.TODO, this.id);
    }


    //TODO: Add the ability to create more than one todo list, check below some methods
    //create(fields){
    //
    //}
    //
    //get(){
    //
    //}
    //
    //update(){
    //
    //}
    //
    //remove(){
    //
    //}


}