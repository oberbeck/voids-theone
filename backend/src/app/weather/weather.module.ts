import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {
  VisualCrossingWeatherService,
  WeatherService,
} from './weather.service';
import { WeatherController } from './weather.controller';

@Module({
  imports: [HttpModule],
  providers: [
    VisualCrossingWeatherService,
    {
      provide: WeatherService,
      useClass: VisualCrossingWeatherService,
    },
  ],
  exports: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
