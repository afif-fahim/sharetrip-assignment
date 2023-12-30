import { Request, Response, NextFunction } from 'express';
import { merge } from 'lodash';

import PostApiService from '../services/postApi';


export const getPostApiData = async (req: Request, res: Response, next: NextFunction) => {
    const postApiData = await PostApiService.getData();
    merge(req, { postApiData });
    next();
};
