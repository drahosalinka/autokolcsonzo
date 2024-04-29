import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "autokolcsonzo",
    synchronize: true,
    logging: true,
    entities: [Customer],
    migrations: [],
    subscribers: [],
})
