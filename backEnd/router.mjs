import Router from 'express';
import BankController from "./BankController.mjs";

const router = new Router();

router.post('/banks', BankController.create);

router.get('/banks', BankController.getAll);

router.get('/banks/:id', BankController.getOne);

router.put('/banks', BankController.update);

router.delete('/banks/:id', BankController.delete);

export default router;