import { internshipAccess } from "./middlewares/InternshipAccess"
import { studentAccess } from "./middlewares/StudentAccess"
import { stackMiddlewares } from "./middlewares/stackMiddleware";

const middlewares = [studentAccess, internshipAccess];
export default stackMiddlewares(middlewares);
