import { ForecastSchemas } from '@voids-theone/forecasts-model';
import { z } from 'zod';
import { stringifyDate } from './helper';

export async function getList(date: Date) {
  // TOOD add to environment
  return fetch(`http://localhost:4000/api/v1/forecasts/${stringifyDate(date)}`)
    .then((d) => d.json() as Promise<z.infer<typeof ForecastSchemas>>)
    .catch((e: unknown) => {
      console.error('forecasts.getList :: failed', { error: e });
      return [];
    });
}
