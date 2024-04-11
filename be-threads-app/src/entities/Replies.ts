import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Threads } from "./Threads";

@Entity("replies")
export class Replies {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    posted_at: Date

    @ManyToOne(() => Users, (users) => users.replies)
    user: Users

    @ManyToOne(() => Threads, (threads) => threads.replies)
    threads: Threads
}