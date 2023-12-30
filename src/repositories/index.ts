import { Document, Model } from 'mongoose';

import SearchResult, { ISearchResult } from '../models/SearchResult';
import UserSearch, { IUserSearch } from '../models/UserSearch';


class BaseRepository<T extends Document> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    create(data: any): Promise<T> {
        return this.model.create(data);
    }

    update(id: string, data: any): Promise<T> {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }
}

export class SearchResultRepository extends BaseRepository<ISearchResult> {
    constructor() {
        super(SearchResult);
    }
}

export class UserSearchRepository extends BaseRepository<IUserSearch> {
    constructor() {
        super(UserSearch);
    }
}
