import { Router } from "express";

import search from "./search";

const router = Router();


export default (): Router => {
    search(router);

    return router;
};
