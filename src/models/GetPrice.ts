import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GetPrice')
class GetData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone')
  date: Date;

  @Column()
  value: number;
}

export default GetData;
