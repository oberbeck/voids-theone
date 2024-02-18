export class Forecast {
  date: string;

  location: string;

  forecast_sales_quantity: number;

  constructor(item: Partial<Forecast>) {
    Object.assign(this, item);
  }
}
