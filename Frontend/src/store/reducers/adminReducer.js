import actionTypes from '../actions/actionTypes';

const initialState = {
    isloadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    // users: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isloadingGender = true;
            return {
                ...copyState,
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isloadingGender = false;
            return {
                ...state,
            }

        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = [];
            state.isloadingGender = false;
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            //let copyState = {...state};
            state.positions = action.data;
            //state.isloadingGender = false;
            //console.log('hoi a',action);
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            // console.log('hoi di',action)
            //let state = {...state};
            //state.isloadingGender = false;
            state.positions = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            //let copyState = {...state};
            state.roles = action.data;
            //state.isloadingGender = false;
            //console.log('hoi a',action);
            return {

                ...state,

            }
        case actionTypes.FETCH_ROLE_FAILED:
            // console.log('hoi di',action)
            //let state = {...state};
            //state.isloadingGender = false;
            state.roles = [];
            return {
                ...state,

            }

        default:
            return state;
    }
}

export default adminReducer;