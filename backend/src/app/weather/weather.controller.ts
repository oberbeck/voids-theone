import { Controller, Get, Req, Param, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { map } from 'rxjs/operators';
import { HttpException, HttpStatus } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':location')
  getWeather(@Param('location') location: string, @Query('date') date: string) {
    // TODO review - for some reason `location`+`date` are always underfined

    if (!location) {
      throw new HttpException(
        'Location must be provided' + location,
        HttpStatus.BAD_REQUEST
      );
    }

    return this.weatherService
      .getWeatherFor({
        location,
        date: date ? new Date(date) : new Date(),
      })
      .pipe(
        map((weather) => {
          return weather.days[0];
        })
      );
  }
}
