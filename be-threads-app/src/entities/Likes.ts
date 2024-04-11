import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Threads } from "./Threads";

@Entity()
export class Likes {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Users, (users) => users.likes)
    user: Users

    @ManyToOne(() => Threads, (threads) => threads.likes)
    threads: Threads
}