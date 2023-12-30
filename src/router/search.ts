import { Router } from "express";

import { getPostApiData } from "../middlewares";
import { search } from "../controllers/search";


export default (router: Router) => {
    router.get('/search', getPostApiData, search);  // Inject 'getPostApiData' middleware to retrieve PostApiData before invoking the 'search' controller.
};
