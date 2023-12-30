import { Document, Model } from 'mongoose';

import SearchResult, { ISearchResult } from '../models/SearchResult';
import UserSearch, { IUserSearch } from '../models/UserSearch';


/**
 * Base repository class providing common CRUD operations for Mongoose models.
 */
class BaseRepository<T extends Document> {
    private model: Model<T>;

    /**
     * Constructs the base repository with the specified Mongoose model.
     * @param model - Mongoose model to be used by the repository
     */
    constructor(model: Model<T>) {
        this.model = model;
    }

    /**
     * Creates a new document in the MongoDB collection using the provided data.
     * @param data - Data to be inserted into the MongoDB collection
     * @returns Promise that resolves to the created document
     */
    create(data: any): Promise<T> {
        return this.model.create(data);
    }

    /**
     * Updates a document in the MongoDB collection with the specified ID using the provided data.
     * @param id - ID of the document to be updated
     * @param data - Data to be updated in the document
     * @returns Promise that resolves to the updated document
     */
    update(id: string, data: any): Promise<T> {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }
}

/**
 * Repository class for handling operations related to SearchResult documents.
 */
export class SearchResultRepository extends BaseRepository<ISearchResult> {
    constructor() {
        super(SearchResult);
    }
}

/**
 * Repository class for handling operations related to UserSearch documents.
 */
export class UserSearchRepository extends BaseRepository<IUserSearch> {
    constructor() {
        super(UserSearch);
    }
}
