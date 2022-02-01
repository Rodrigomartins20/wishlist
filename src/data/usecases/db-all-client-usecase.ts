import { ClientModel } from '@/domain/models/client-model';
import AllClientInterface from '@/domain/usecases/all-client-interface'
import { AllClientRepository } from '@/data/protocols/db/all-client-repository';

export class DbAllClientUsecase implements AllClientInterface {
  constructor (
    private readonly allClientRepository: AllClientRepository
  ) {}
  async all(): Promise<ClientModel[]> {
    return await this.allClientRepository.all()
  }
}