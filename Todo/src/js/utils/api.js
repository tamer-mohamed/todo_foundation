import Firebase from 'firebase';
import _ from 'lodash';
import TodoLogs from './logs';


var Promise = require('es6-promise').Promise;

//--------------------------------

const API = function(){

    var todoFbRef = new Firebase("https://codesample.firebaseio.com/"),
        errorExceptions = [];


    // get FB ref
    function ref(EP, id){

        if(typeof id !== 'undefined' && id !== null){
            return todoFbRef.child(EP.concat(id));
        }

        return todoFbRef.child(EP);
    }


    // retrieve data
    //@return promise
    function get(id, EP){
        return new Promise(function(resolve, reject){
            try{

                todoFbRef.child(EP.concat(id)).on('value', function(dataSnapshot){

                    let items = [];

                    _.forEach(dataSnapshot, function(itemSnapshot){
                        console.log(itemSnapshot.val());
                        var item = itemSnapshot.val();

                        item['.key'] = itemSnapshot.key();
                        items.push(item);
                    });

                    // resolve the items
                    resolve(items);

                });

            }
            catch(e){
                reject(e);
            }
        });

    }


    function set(args){

        if(typeof args.path !== 'string'){
            throw new Error('argument path is required to be provided as string');
        }


        if(typeof args.id !== 'undefined'){
            return _update(args);
        }
        else{
            return _insert(args);
        }


    }


    function _insert(args){

        let {data,path} = args;

        return new Promise(function(resolve, reject){

            let validResult = _validate(data, attributes);

            if(validResult.valid === true){

                try{
                    todoFbRef.child(path).set(data);

                    resolve(data);
                }
                catch(e){
                    reject({
                        code: 20,
                        text: `Error with inserting data: ${data} to path: ${path}`,
                        more: e
                    });
                }

            }
            else{
                reject({
                    code: 30,
                    text: `Error with Validating data: ${data} with attributes: ${attributes} in the 'setting data process'. `
                })
            }

        });

    }


    function _update(args){

        let {id,data,path} = args;

        if(typeof path !== 'string'){
            throw new Error('argument path is required to be provided as string');
        }

        return new Promise(function(resolve, reject){

            try{
                API.child(`${path}/${id}`).update(data);

                resolve();
            }
            catch(e){
                reject({
                    code: 50,
                    text: `Error with updating data: ${data} for ID: ${id} in the 'update  process'. `,
                    more: e
                });
            }

        });
    }


    function remove(args){

        let {id,path} = args;

        if(typeof path !== 'string'){
            throw new Error('argument path is required to be provided as string');
        }

        return new Promise(function(resolve, reject){

            try{
                API.child(`${path}/${id}`).remove();

                resolve();
            }
            catch(e){
                reject({
                    code: 50,
                    text: `Error with deleting data: ${data} from ID: ${id} in the 'delete  process'. `,
                    more: e
                });
            }

        });

    }


    // @private methods

    //--------------------------------------


    function _validate(data, attributes){
        var errors = [],
            requiredFields = [];


        //extract required data if exists
        _.forEach(attributes, function(v, k){
            if(v.required){
                requiredFields.push(k);
            }
        });


        if(requiredFields.length > 0){

            _.forEach(data, function(recordElement, recordKey){
                if(_.findIndex(requiredFields, recordKey) > -1){

                    if(typeof recordElement === 'undefined' || null){
                        errors.push({code: 10, text: `Required field: ${recordKey}`});

                        // for debugging
                        TodoLogs.debugLog(`${field} is required for adding a new task.`, 'error');
                    }

                }
            });

        }

        return errors.length ? {valid: false, errors} : {valid: true};
    }


    return {
        ref,
        get,
        set,
        remove
    }

}();


export default API;