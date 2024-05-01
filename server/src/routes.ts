import express from 'express';
import { CustomerController } from './controller/customer.controller';
import { VehicleController } from './controller/vehicle.controller';

export function getRouter() {
    const router = express.Router();

    const customerController = new CustomerController();
    const vehicleController = new VehicleController();

    router.get('/customer', customerController.getAll);
    router.get('/customer/:id', customerController.getOne);
    router.post('/customer', customerController.create);
    router.put('/customer', customerController.update);
    router.delete('/customer/:id', customerController.delete);

    router.get('/vehicle', vehicleController.getAll);
    router.get('/vehicle/:id', vehicleController.getOne);
    router.post('/vehicle', vehicleController.create);
    router.put('/vehicle', vehicleController.update);
    router.delete('/vehicler/:id', vehicleController.delete);

    return router;
}