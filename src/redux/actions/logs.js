import * as actionTypes from '../constants/actionTypes';
// import { GetPromotions, GetPopularStore } from '../../api/promotions';

export const write = (data)=> {
    return {
        type: actionTypes.WRITE_LOG,
        data: data
    }
};

