// Logs module


//--------------------------------

const TodoLogs = function(){

    function debugLog(msg, type){
        if(localStorage.todoDebug === 'true'){
            switch(type){
                case "warning":
                    console.warn(msg);
                    break;

                case "error":
                    console.error(msg);
                    break;
                default:
                    console.log(msg);
            }
        }
    }

    return {
        debugLog
    }

}();

export default TodoLogs;
