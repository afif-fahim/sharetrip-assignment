import { Request, Response } from 'express';

import PostApiService from '../services/postApi';
import { SearchResultRepository, UserSearchRepository } from '../repositories';


export const search = async (req: Request, res: Response) => {
    try {
        const keyword = req.query.keyword as string;

        const userIp = req.ip;

        const postApiData = await PostApiService.getData();
        const matchedPosts = postApiData.filter(post => post.title.includes(keyword) || post.body.includes(keyword));

        if (matchedPosts.length > 0) {
            const searchResultRepo = new SearchResultRepository();
            const userSearchRepo = new UserSearchRepository();

            // Save user's search and associate it with the user's IP
            const userSearch = await userSearchRepo.create({ keyword, results: [], userIp });

            // Save search results and associate them with the user's search
            const savedResults: any = await searchResultRepo.create(
                matchedPosts.map(post => ({ ...post, userSearch: userSearch._id }))
            );

            // Update the user's search with the search results
            await userSearchRepo.update(userSearch._id, { results: savedResults.map((result: any) => result._id) });

            return res.json(matchedPosts);
        } else {
            return res.json([]);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
