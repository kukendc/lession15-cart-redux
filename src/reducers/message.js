import * as Types from '../constants/ActionType';
import * as Message from '../constants/Message';

var initiaState = Message.MSG_WELLCOME;

const message = (state = initiaState, action) =>{
    switch(action.type){
        case Types.CHANGE_MESSAGE :
            return action.message;
        default : return state;
    }
}

export default message;