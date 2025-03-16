import axios from "axios";
import { User, PostUser } from "./User"


// should probably be an env variable but whatever
const API_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: API_URL,
})

// ! DO TYPINGS FOR ALL OF THESE PLEASE

// add user
export const postAddUser = async (data: PostUser) => {
    try {
        const response = await api.post("/api/users/addUser", data)
        return response.data;
    } catch (error) {
        console.error("Error adding user", error);
        throw error;
    }
}

// update user in db
export const putUpdateUser = async (data: User) => {
    try {
        const response = await api.put(`/api/users/updateUser/${data.userId}`, data)
        return response.data;

    } catch (error) {
        console.error("Error updating user", error)
        throw error;
    }
}

// get a single user's data based on userId
export const getUserData = async (userId: number | string) => {
    try {
        const response = await api.get(`/api/users/${userId}`)
        return response.data;
    } catch (error) {
        console.error("Error getting user's data", error)
        throw error;
    }
}

export const getMatchUser = async (userId: number | string) => {
    try {
        const response = await api.get(`/api/users/match/${userId}`)
        return response.data
    } catch (error) {
        console.error("Error matching user", error)
        throw error;
    }
}

export const getMatchUserData = async (userId: number | string) => {
    try {
        const response = await api.get(`/api/users/match/userData/${userId}`)
        return response.data
    } catch (error) {
        console.error("Error getting/matching user and user's data")
        throw error;
    }
}

