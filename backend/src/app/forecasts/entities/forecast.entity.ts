import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Forecast {
  // @PrimaryGeneratedColumn()
  // id: number;

  @Column({
    type: 'timestamp without time zone',
  })
  date: Date;

  @Column({
    type: 'text',
  })
  location: string;

  @Column({
    type: 'double precision',
  })
  forecast_sales_quantity: number;

  constructor(item: Partial<Forecast>) {
    Object.assign(this, item);
  }
}
