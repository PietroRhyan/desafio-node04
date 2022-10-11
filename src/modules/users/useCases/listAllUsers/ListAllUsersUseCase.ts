import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExistsAndHaveAdmin = this.usersRepository.findById(user_id)

    if(!userExistsAndHaveAdmin.id) {
      throw new Error("The user don't exist!")
    }

    if(!userExistsAndHaveAdmin.admin) {
      throw new Error("The user don't have the permission to list all users.")
    }

    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
