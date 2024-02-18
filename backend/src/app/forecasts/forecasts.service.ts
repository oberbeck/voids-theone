import { Injectable } from '@nestjs/common';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { EntityManager, Repository } from 'typeorm';
import { Forecast } from './entities/forecast.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ForecastsService {
  constructor(private readonly entityManager: EntityManager) {}

  findByDate(date: Date | string) {
    return this.entityManager.query(
      `SELECT * FROM oneglass.forecasts WHERE date = $1`,
      [date]
    );
  }
}
