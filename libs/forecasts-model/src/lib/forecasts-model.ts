import { z } from 'zod';

export const ForecastSchema = z.object({
  date: z.string(),
  location: z.string(),
  forecasted_sales_quantity: z.number(),
});

export const ForecastSchemas = z.array(ForecastSchema);
