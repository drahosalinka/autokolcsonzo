import express from 'express';
import { CustomerController } from './controller/customer.controller';

export function getRouter() {
    const router = express.Router();

    const customerController = new CustomerController();

    router.get('/customer', customerController.getAll);
    router.get('/customer/:id', customerController.getOne);
    router.post('/customer', customerController.create);
    router.put('/customer', customerController.update);
    router.delete('/customer/:id', customerController.delete);

    return router;
}