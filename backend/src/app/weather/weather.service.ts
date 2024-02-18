import { Injectable } from '@nestjs/common';
import { WeatherDataSchema } from '@voids-theone/weather-model';
import { HttpService } from '@nestjs/axios';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { z } from 'zod';
import { environment } from 'backend/src/environments/environment';

@Injectable()
export abstract class WeatherService {
  abstract getWeatherFor(args: {
    location: string;
    startDate?: Date;
    endDate?: Date;
    date?: Date;
  }): Observable<z.infer<typeof WeatherDataSchema>>;
}

@Injectable()
export class VisualCrossingWeatherService extends WeatherService {
  constructor(private httpService: HttpService) {
    super();
  }

  private formateDate(date: Date) {
    return +date / 1000;
  }

  private getEndOfDay(date: Date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59
    );
  }

  private getBeginningOfDay(date: Date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0
    );
  }

  override getWeatherFor(args: {
    location: string;
    startDate?: Date;
    endDate?: Date;
    date?: Date;
  }): Observable<z.infer<typeof WeatherDataSchema>> {
    let startDate = args.startDate;
    let endDate = args.endDate;

    if (!startDate) {
      // set startDate to the beginning of day of (args.date ?? today)
      startDate = this.getBeginningOfDay(args.date ?? new Date());
    }
    if (!endDate) {
      // set endDate to the end of day of (args.date ?? today)
      endDate = this.getEndOfDay(args.date ?? new Date());
    }

    // TODO move to config
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
      args.location
    }/${this.formateDate(startDate)}/${this.formateDate(
      endDate
    )}?unitGroup=metric&include=days&key=${
      environment.visualCrossingWeatherApiKey
    }&contentType=json`;

    return this.httpService
      .get(url, {
        method: 'GET',
        headers: {},
      })
      .pipe(
        map((response) => {
          const json = response.data;
          return WeatherDataSchema.parse(json);
        }),
        tap({
          next: (data) => {
            console.log('VisualCrossingWeatherService.getWeatherFor', {
              args,
              data,
            });
          },
          error: (error) => {
            console.log('VisualCrossingWeatherService.getWeatherFor', {
              args,
              error,
            });
          },
        })
      );
  }
}
