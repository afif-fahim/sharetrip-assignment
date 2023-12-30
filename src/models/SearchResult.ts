import { Document, Schema, model } from 'mongoose';


/**
 * Interface representing the structure of a SearchResult document in MongoDB.
 */
export interface ISearchResult extends Document {
    id: number;
    userId: number;
    title: string;
    body: string;
    userSearch: Schema.Types.ObjectId;
}

// Define the Mongoose schema for the SearchResult model
const searchResultSchema = new Schema(
    {
        id: { type: Number, required: true },
        userId: { type: Number, required: true },
        title: { type: String, required: true },
        body: { type: String, required: true },
        userSearch: { type: Schema.Types.ObjectId, ref: 'UserSearch' },
    },
    { timestamps: true }
);

// Create and export the Mongoose model for SearchResult
export default model<ISearchResult>('SearchResult', searchResultSchema);
