import { Router } from "express";

import { search } from "../controllers/search";


export default (router: Router) => {
    router.get('/search', search);
};
