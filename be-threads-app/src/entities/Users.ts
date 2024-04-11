import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Threads } from "./Threads"
import { Replies } from "./Replies"
import { Likes } from "./Likes"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column()
    full_name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    profile_picture: string

    @Column({ nullable: true })
    bio: string

    @OneToMany(() => Threads, (threads) => threads.user)
    threads: Threads

    @OneToMany(() => Replies, (replies) => replies.user)
    replies: Replies

    @OneToMany(() => Likes, (likes) => likes.user)
    likes: Likes

}

