import { Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

export const routes: Routes = [
    {
        path: 'customer',
        component: CustomerListComponent
    },
    {
        path: 'add-customer',
        component: CustomerFormComponent
    },
    {
        path: 'edit-customer/:id',
        component: CustomerFormComponent
    },
    {
        path: 'vehicle',
        component: VehicleListComponent
    },
    {
        path: 'add-vehicle',
        component: VehicleFormComponent
    },
    {
        path: 'edit-vehicle/:id',
        component: VehicleFormComponent
    }
];
