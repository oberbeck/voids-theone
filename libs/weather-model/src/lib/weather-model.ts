import { z } from 'zod';

export const WeatherDayDataSchema = z.object({
  datetime: z.string().optional(),
  datetimeEpoch: z.number().optional(),
  tempmax: z.number().optional(),
  tempmin: z.number().optional(),
  temp: z.number().optional(),
  feelslikemax: z.number().optional(),
  feelslikemin: z.number().optional(),
  feelslike: z.number().optional(),
  dew: z.number().optional(),
  humidity: z.number().optional(),
  precip: z.number().optional(),
  precipprob: z.number().optional(),
  precipcover: z.number().optional(),
  preciptype: z.array(z.string()).optional(),
  snow: z.string().optional(),
  snowdepth: z.string().optional(),
  windgust: z.number().optional(),
  windspeed: z.number().optional(),
  winddir: z.number().optional(),
  pressure: z.number().optional(),
  cloudcover: z.number().optional(),
  visibility: z.number().optional(),
  solarradiation: z.number().optional(),
  solarenergy: z.number().optional(),
  uvindex: z.number().optional(),
  sunrise: z.string().optional(),
  sunriseEpoch: z.number().optional(),
  sunset: z.string().optional(),
  sunsetEpoch: z.number().optional(),
  moonphase: z.number().optional(),
  conditions: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  stations: z.array(z.string()).optional(),
  source: z.string().optional(),
});

export const WeatherDataSchema = z.object({
  queryCost: z.number().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  resolvedAddress: z.string().optional(),
  address: z.string().optional(),
  timezone: z.string().optional(),
  tzoffset: z.number().optional(),
  days: z.array(WeatherDayDataSchema).optional(),
  stations: z
    .object({
      E9645: z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.string().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      '05280': z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.number().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      C7997: z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.string().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      C3276: z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.string().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      '01981': z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.number().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      '00760': z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.number().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      '04857': z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.number().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      C7204: z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.string().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      '01975': z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.number().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
      '04039': z
        .object({
          distance: z.number().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          useCount: z.string().optional(),
          id: z.string().optional(),
          name: z.string().optional(),
          quality: z.number().optional(),
          contribution: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
});
