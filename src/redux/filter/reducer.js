import { SEARCHBYCATEGORY, SEARCHBYTITLE } from "./actions";

const initialState = {
    searchText:'',
    searchCategory:'All'
}

export const filterReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCHBYTITLE:
            return {
                ...state,
                searchText:action.payloads
            }

        case SEARCHBYCATEGORY:
            return {
                ...state,
                searchCategory:action.payloads
            }
    
        default:
            return state;
    }
}