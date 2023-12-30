import { Router } from "express";

import search from "./search";

const router = Router();

/**
 * Configures the Express router by adding routes from the router modules.
 * @returns Configured Express router
 */
export default (): Router => {
    search(router);

    return router;
};
