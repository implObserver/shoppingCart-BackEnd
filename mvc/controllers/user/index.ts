import { getController } from "./controllers/get/getController";
import { postController } from "./controllers/post/postController";
import { cookieMiddlewares } from "./helper/middlewares/cookie/cookieController";
import { redirectMiddlewares } from "./helper/middlewares/redirect/redirect";
import { transporterMiddlewares } from "./helper/middlewares/transporter/transporter";

export const userControllers = {
    ...getController,
    ...postController,
    ...cookieMiddlewares,
    ...transporterMiddlewares,
    ...redirectMiddlewares,
}