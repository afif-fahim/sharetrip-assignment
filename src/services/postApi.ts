import axios, { AxiosResponse } from 'axios';

import config from 'configs';


interface IPostApiData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class PostApiService {
    static async getData(): Promise<IPostApiData[]> {
        const response: AxiosResponse<IPostApiData[]> = await axios.get(config.postAPI.url);
        return response.data;
    }
}

export default PostApiService;
