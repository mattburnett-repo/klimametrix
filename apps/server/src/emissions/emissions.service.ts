import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Emission } from './entities/emission.entity'
import { CreateEmissionDto } from './dto/create-emission.dto'

@Injectable()
export class EmissionsService {
  constructor(
    @InjectRepository(Emission)
    private emissionsRepository: Repository<Emission>,
  ) {}

  async create(createEmissionDto: CreateEmissionDto): Promise<Emission> {
    const totalEmissions = 
      createEmissionDto.electricity * 0.5 + // kWh to CO2
      createEmissionDto.fuel * 2.3 + // L to CO2
      createEmissionDto.waste * 1.5 // kg to CO2

    const emission = this.emissionsRepository.create({
      ...createEmissionDto,
      totalEmissions,
    })

    return this.emissionsRepository.save(emission)
  }

  async findAll(limit: number): Promise<Emission[]> {
    return this.emissionsRepository.find({
      order: { createdAt: 'DESC' },
      take: limit,
    })
  }

  async getStats() {
    const emissions = await this.emissionsRepository
      .createQueryBuilder('emission')
      .select('SUM(emission.totalEmissions)', 'total')
      .addSelect('AVG(emission.totalEmissions)', 'average')
      .addSelect('COUNT(*)', 'count')
      .getRawOne()

    return {
      total: Number(emissions.total) || 0,
      average: Number(emissions.average) || 0,
      count: Number(emissions.count) || 0,
    }
  }
} 