import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerId: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    idCard: string;
}
