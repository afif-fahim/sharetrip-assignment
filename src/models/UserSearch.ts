import { Document, Schema, model } from 'mongoose';


export interface IUserSearch extends Document {
    keyword: string;
    results: Schema.Types.ObjectId[];
    userIp: string;
}

const userSearchSchema = new Schema(
    {
        keyword: { type: String, required: true },
        results: [{ type: Schema.Types.ObjectId, ref: 'SearchResult' }],
        userIp: { type: String, required: true },
    },
    { timestamps: true }
);

export default model<IUserSearch>('UserSearch', userSearchSchema);
