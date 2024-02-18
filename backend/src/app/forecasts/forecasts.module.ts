import { Module } from '@nestjs/common';
import { ForecastsService } from './forecasts.service';
import { ForecastsController } from './forecasts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from 'backend/src/environments/environment';
import { Forecast } from './entities/forecast.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Forecast]),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        // TODO environment config
        type: 'postgres',
        host: 'voids-jobs.c2wwnfcaisej.eu-central-1.rds.amazonaws.com',
        port: 5432,
        database: 'postgres',
        username: 'postgres_ro',
        password: environment.postgressPassword,
        schema: 'oneglass',

        // autoLoadEntities: true,
        // synchronize: true, // TODO deactivate in production
      }),
    }),
  ],
  controllers: [ForecastsController],
  providers: [ForecastsService],
})
export class ForecastsModule {}
