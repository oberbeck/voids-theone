import { z } from 'zod';
import { WeatherDayDataSchema } from '@voids-theone/weather-model';
import { stringifyDate } from './helper';

export async function get(location: string, date: Date) {
  // TODO environment config
  return fetch(
    `http://localhost:4000/api/v1/weather/${location}?date=${stringifyDate(
      date
    )}`
  )
    .then((d) => d.json())
    .then((d) => WeatherDayDataSchema.parse(d));
}
