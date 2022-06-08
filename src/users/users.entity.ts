import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// interface UserCreationAttr {
//   email: string;
//   password: string;
// }

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    unique: true,
    nullable: false,
  })
  email: string;

  @Column()
  password: string;
}
