import { EntityRepository, Repository } from 'typeorm';
import Director from '../models/Director';

@EntityRepository(Director)
class DirectorsRepository extends Repository<Director> {
  public async getAll(): Promise<Director[] | null> {
    const allDirectors = await this.find();

    return allDirectors || null;
  }
}

export default DirectorsRepository;
