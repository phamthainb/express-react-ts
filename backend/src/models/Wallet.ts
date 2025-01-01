import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true })
  address: string;

  @Column({ nullable: false })
  kvpair: string;

  @Column("decimal", { precision: 18, scale: 8, default: 0 })
  balance: number;

  @Column({ nullable: true })
  tag: string; // main,...

  @Column({ nullable: true })
  note: string;
}
