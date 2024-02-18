import { z } from 'zod';

const StringifiedSchema = z
  .string()
  .or(z.number())
  .transform((e) => (e ? `${e}` : e));

export const WeatherDayDataSchema = z.object({
  datetime: StringifiedSchema.nullish(),
  datetimeEpoch: StringifiedSchema.nullish(),
  tempmax: StringifiedSchema.nullish(),
  tempmin: StringifiedSchema.nullish(),
  temp: StringifiedSchema.nullish(),
  feelslikemax: StringifiedSchema.nullish(),
  feelslikemin: StringifiedSchema.nullish(),
  feelslike: StringifiedSchema.nullish(),
  dew: StringifiedSchema.nullish(),
  humidity: StringifiedSchema.nullish(),
  precip: StringifiedSchema.nullish(),
  precipprob: StringifiedSchema.nullish(),
  precipcover: StringifiedSchema.nullish(),
  preciptype: z.array(StringifiedSchema).nullish(),
  snow: StringifiedSchema.nullish(),
  snowdepth: StringifiedSchema.nullish(),
  windgust: StringifiedSchema.nullish(),
  windspeed: StringifiedSchema.nullish(),
  winddir: StringifiedSchema.nullish(),
  pressure: StringifiedSchema.nullish(),
  cloudcover: StringifiedSchema.nullish(),
  visibility: StringifiedSchema.nullish(),
  solarradiation: StringifiedSchema.nullish(),
  solarenergy: StringifiedSchema.nullish(),
  uvindex: StringifiedSchema.nullish(),
  sunrise: StringifiedSchema.nullish(),
  sunriseEpoch: StringifiedSchema.nullish(),
  sunset: StringifiedSchema.nullish(),
  sunsetEpoch: StringifiedSchema.nullish(),
  moonphase: StringifiedSchema.nullish(),
  conditions: StringifiedSchema.nullish(),
  description: StringifiedSchema.nullish(),
  icon: StringifiedSchema.nullish(),
  stations: z.array(StringifiedSchema).nullish(),
  source: StringifiedSchema.nullish(),
});

export const WeatherDataSchema = z.object({
  days: z.array(WeatherDayDataSchema).nullish(),
});
