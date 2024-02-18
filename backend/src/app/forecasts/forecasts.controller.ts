import { Controller, Get, Param } from '@nestjs/common';
import { ForecastsService } from './forecasts.service';

@Controller('forecasts')
export class ForecastsController {
  constructor(private readonly forecastsService: ForecastsService) {}

  @Get(':date')
  findAll(@Param('date') date: string) {
    return this.forecastsService.findByDate(date);
  }
}
