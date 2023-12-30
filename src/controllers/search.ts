import { Request, Response } from 'express';
import { get } from "lodash";

import { IPostApiData } from '../services/postApi';
import { SearchResultRepository, UserSearchRepository } from '../repositories';


/**
 * Handles the search functionality based on the provided keyword.
 * Saves user search and associated results, if any, with the user's IP.
 * @param req - request object
 * @param res - response object
 */
export const search = async (req: Request, res: Response) => {
    try {
        const keyword = req.query.keyword as string;
        const userIp = req.ip;

        const postApiData = get(req, 'postApiData') as IPostApiData[];

        const userSearchRepo = new UserSearchRepository();

        // Save user's search and associate it with the user's IP
        const userSearch = await userSearchRepo.create({ keyword, results: [], userIp });

        // Filter posts that match the keyword
        const matchedPosts = postApiData.filter(
            post => post.title.toLowerCase().includes(keyword.toLowerCase()) ||
                    post.body.toLowerCase().includes(keyword.toLowerCase())
        );

        if (matchedPosts.length > 0) {
            const searchResultRepo = new SearchResultRepository();

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
