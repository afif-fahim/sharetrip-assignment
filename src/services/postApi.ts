import axios, { AxiosResponse } from 'axios';

import config from '../configs';


/**
 * Interface representing the structure of data retrieved from the Post API.
 */
export interface IPostApiData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

/**
 * Service class for interacting with the Post API.
 */
class PostApiService {
    static async getData(): Promise<IPostApiData[]> {
        try {
            const response: AxiosResponse<IPostApiData[]> = await axios.get(config.postAPI.url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default PostApiService;
