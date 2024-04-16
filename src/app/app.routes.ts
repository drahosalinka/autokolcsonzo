import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

export const routes: Routes = [
     {
     path: 'customers', component: CustomersComponent,
     },
     {
     path: 'vehicles', component: VehiclesComponent
     }
];
  