import { Document, Schema, model } from 'mongoose';


/**
 * Interface representing the structure of a UserSearch document in MongoDB.
 */
export interface IUserSearch extends Document {
    keyword: string;
    results: Schema.Types.ObjectId[];
    userIp: string;
}

// Define the Mongoose schema for the UserSearch model
const userSearchSchema = new Schema(
    {
        keyword: { type: String, required: true },
        results: [{ type: Schema.Types.ObjectId, ref: 'SearchResult' }],
        userIp: { type: String, required: true },
    },
    { timestamps: true }
);

// Create and export the Mongoose model for UserSearch
export default model<IUserSearch>('UserSearch', userSearchSchema);
