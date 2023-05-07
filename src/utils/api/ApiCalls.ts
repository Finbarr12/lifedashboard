import { iUser } from "../../types";
import axios from "./api";

export const fetchDictionary = async () => {
    return await axios 
        .get("/define", {params: {term: 'wat'}})
        .then((res) => res.data)
        .catch((err) => {
            return err
        })
}

export const postUser = async (data: iUser, id: string, wallet: string) =>{
    return await axios
        .post(`/define/${id}/${wallet}`, data)
        .then((res) =>res.data)
        .catch((err) =>{
            return err
        })
}