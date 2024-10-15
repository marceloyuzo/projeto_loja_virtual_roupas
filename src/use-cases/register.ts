import { UsersrRepository } from '../repositories/usersRepository'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
  cpf: string
}

interface RegisterUseCaseResponse {}

export class RegisterUseCase {
  constructor(private usersRepository: UsersrRepository) {}

  execute({ name, email, password, cpf }: RegisterUseCaseRequest) {}
}
