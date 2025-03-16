import { VectorizeDoc } from "@datastax/astra-db-ts";

// Defining interface for user information to later parse
// The VectorizeDoc interface adds a $vectorize key.
export interface UserInfo extends VectorizeDoc {
    "userId": string;
    "gender": string;
    "age": string;
    "interests": string;
    "pets": string;
    "budgetRange": string;
    "garageSpace": string;
};