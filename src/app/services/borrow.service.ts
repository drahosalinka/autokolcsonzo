import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BorrowVehicleDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<BorrowVehicleDTO[]>('/api/borrow');
  }

  getOne(id: number) {
    return this.http.get<BorrowVehicleDTO>('/api/borrow/' + id);    
  }

  create(borrow: BorrowVehicleDTO) {
    return this.http.post<BorrowVehicleDTO>('/api/borrow', borrow);
  }

  borrowsByCustomer(customerId: number) {
    return this.http.get<BorrowVehicleDTO[]>('/api/borrow/borrowed-by/' + customerId);
  }

  borrowsByVehicle(vehicleId: number) {
    return this.http.get<BorrowVehicleDTO[]>('/api/borrow/vehicle/' + vehicleId);
  }
}