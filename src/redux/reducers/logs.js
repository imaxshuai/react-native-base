import * as actionTypes from '../constants/actionTypes';

export const logs = (state=[], action) => {
    switch (action.type){
        case actionTypes.WRITE_LOG:
            let data = [...state];
            data.unshift({
                title: action.data.title ? action.data.title : 'Logs',
                time: Moment().format(),
                data: action.data.data
            });
            return data;
        default:
            return state
    }

};