import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Users } from "./Users"
import { Replies } from "./Replies"
import { Likes } from "./Likes"

@Entity()
export class Threads {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({nullable: true})
    image: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    posted_at: Date
    
    @ManyToOne(type => Users, user => user.threads)
    user: Users

    @OneToMany(type => Replies, replies => replies.threads)
    replies: Replies

    @OneToMany(type => Likes, likes => likes.threads)
    likes: Replies
}
