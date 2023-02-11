import { SEARCHBYCATEGORY, SEARCHBYTITLE } from "./actions"

export const searchByTitle = (searchText) =>{
    return {
        type: SEARCHBYTITLE,
        payloads: searchText
    }   
}

export const searchByCategory = (category) =>{
    return {
        type: SEARCHBYCATEGORY,
        payloads: category
    }
}