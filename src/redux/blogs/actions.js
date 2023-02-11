import { BLOGADDED } from "./actionTypes"

export const blogAdd = (blogDetail) =>{
    return {
        type: BLOGADDED,
        payloads:blogDetail
    }
}