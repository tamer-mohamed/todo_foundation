import _ from 'lodash';
import TodoLogs from '../utils/logs';
import API from '../utils/api';
import EP from '../utils/constants';

// ---------------------------------

export default class Task {


    constructor(opts){

        if(!opts || !opts.todoID){
            throw new Error('Todo ID is required to load the tasks.');
        }

        this.todoID = opts.todoID;
        this.id = opts.id || null;

        // @parivate
        //-----------
        this._attributes = {id: {required: true}, title: {required: true}};
    }


    // CRUD

    //-------------

    ref(){
        return API.ref(`${EP.TASK}${this.todoID}/`, this.id);
    }
    //
    //get(){
    //    return API.get(`${EP.TASK}${this.todoID}/`, this.id);
    //}
    //
    //add(task){
    //    return API.set(task, EP.TASK, this._attributes);
    //}
    //
    //remove(){
    //    return API.remove(this.id, EP.TASK);
    //}


}