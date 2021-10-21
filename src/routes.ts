import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { GetUserProfileController } from './controllers/GetUserProfileController';
import { checkUserAuthentication } from './middleware/checkUserAuthentication';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/messages', checkUserAuthentication, new CreateMessageController().handle);
router.get('/messages/last3', new GetLast3MessagesController().handle);
router.get('/profile', checkUserAuthentication, new GetUserProfileController().handle);

export { router };