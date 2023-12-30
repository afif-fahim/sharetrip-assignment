import axios, { AxiosResponse } from 'axios';

import config from '../configs';


export interface IPostApiData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

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
