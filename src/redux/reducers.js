import { devTeam } from '../constants';
import { ADD_DEVELOPER } from './actionTypes';

const initialState = {
    devTeam
};

export function rootReducer(state = initialState, action) {
    console.log(action);

    switch(action.type) {
        case ADD_DEVELOPER:
            const { name, position, level } = action.payload;
            return {
                devTeam: [
                    ...state.devTeam,
                    {
                        id: state.devTeam.length,
                        name,
                        position,
                        level
                    }
                ]
            };
        default:
            return state;
    }
}
