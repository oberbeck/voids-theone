import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { ForecastsModule } from './forecasts/forecasts.module';

@Module({
  imports: [WeatherModule, ForecastsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
