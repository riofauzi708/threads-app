import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Follows {

    @PrimaryGeneratedColumn()
    id: number

}