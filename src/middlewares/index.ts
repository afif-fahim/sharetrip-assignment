import { Request, Response, NextFunction } from 'express';
import { merge } from 'lodash';

import PostApiService from '../services/postApi';


/**
 * Middleware function to retrieve data from the PostApiService and attach it to the request object.
 */
export const getPostApiData = async (req: Request, res: Response, next: NextFunction) => {
    const postApiData = await PostApiService.getData();
    merge(req, { postApiData });
    next();
};
