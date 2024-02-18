import { Injectable } from '@nestjs/common';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { EntityManager, Repository } from 'typeorm';
import { Forecast } from './entities/forecast.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ForecastsService {
  constructor(
    @InjectRepository(Forecast)
    private readonly forecastsRepository: Repository<Forecast>
  ) {}

  // create(createForecastDto: CreateForecastDto) {
  //   throw new Error('Method not yet implemented.');
  // }

  findAll() {
    return this.forecastsRepository.find();
  }

  // findOne(id: number) {
  //   throw new Error('Method not yet implemented.');
  // }

  // update(id: number, updateForecastDto: UpdateForecastDto) {
  //   throw new Error('Method not yet implemented.');
  // }

  // remove(id: number) {
  //   throw new Error('Method not yet implemented.');
  // }
}
