
import { INCREMENT, DECREMENT } from '../action/counterAction';
import { FETCH_USER_LOGIN_SUCCESS } from '../action/userAction';
const INITIAL_STATE = {
    account: {
        access_token: '',
        refesh_token: '',
        user_name: '',
        image: '',
        role: '',
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log(action);
            return {
                ...state, account: {
                    access_token: action?.payload?.DT?.access_token,
                    refesh_token: action?.payload?.DT?.refesh_token,
                    user_name: action?.payload?.DT?.user_name,
                    image: action?.payload?.DT?.image,
                    role: action?.payload?.DT?.role,
                },
                isAuthenticated: true


            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;