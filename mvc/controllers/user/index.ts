import { getController } from "./controllers/get/getController.ts";
import { postController } from "./controllers/post/postController.ts";
import { cookieMiddlewares } from "./helper/middlewares/cookie/cookieController.ts";
import { redirectMiddlewares } from "./helper/middlewares/redirect/redirect.ts";
import { transporterMiddlewares } from "./helper/middlewares/transporter/transporter.ts";

export const userControllers = {
    ...getController,
    ...postController,
    ...cookieMiddlewares,
    ...transporterMiddlewares,
    ...redirectMiddlewares,
}

