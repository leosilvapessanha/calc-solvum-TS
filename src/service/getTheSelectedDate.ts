import { getRepository, Repository, Between } from 'typeorm';

import GetData from '../models/GetPrice';

interface IDate {
  finalDate: Date;

  initialDate: Date;
}

class PriceRepository {
  private ormRepository: Repository<GetData>;

  constructor() {
    this.ormRepository = getRepository(GetData);
  }

  async findByDate({
    finalDate,
    initialDate,
  }: IDate): Promise<GetData[] | undefined> {
    const getDate = await this.ormRepository.find({
      date: Between(finalDate, initialDate),
    });

    return getDate;
  }
}

export default PriceRepository;
