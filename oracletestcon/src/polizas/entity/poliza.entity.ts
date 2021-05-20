import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poliza {
  @PrimaryGeneratedColumn()
  numPoliza: number;
}
