import { Document, Schema, model } from 'mongoose';

export interface ISearchResult extends Document {
    id: number;
    userId: number;
    title: string;
    body: string;
    userSearch: Schema.Types.ObjectId;
}

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

export default model<ISearchResult>('SearchResult', searchResultSchema);
