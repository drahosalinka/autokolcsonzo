export interface CustomerDTO {
    id: number;
    customerId: string;
    name: string;
    address: string;
    phone: string;
    idCard: string;
}

export interface VehicleDTO {
    id: number;
    vehicleId: string;
    type: string;
    manufacturer: string;
    chassisNumber: string;
    dateOfAcquisition: string;
    price: number;
    km: number;
    state: string;
}