import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "infrend2024_sz18",
    synchronize: true,
    logging: true,
    entities: [Customer],
    migrations: [],
    subscribers: [],
})
