import axios from 'axios';

import config from 'configs';


class PostApiService {
    static async getData() {
        const response = await axios.get(config.postAPI.url);
        return response.data;
    }
}

export default PostApiService;
