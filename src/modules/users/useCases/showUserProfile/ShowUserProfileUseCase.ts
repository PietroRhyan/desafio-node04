import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id)

    if(!userExists) {
      throw new Error("The user don't exist!")
    }

    const user = userExists

    return user
  }
}

export { ShowUserProfileUseCase };
