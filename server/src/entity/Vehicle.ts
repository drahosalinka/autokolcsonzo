import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicleId: string;

    @Column()
    type: string;

    @Column()
    manufacturer: string;

    @Column()
    chassisNumber: string;

    @Column()
    dateOfAcquisition: string;

    @Column()
    price: number;

    @Column()
    km: number;

    @Column()
    state: string;
}
