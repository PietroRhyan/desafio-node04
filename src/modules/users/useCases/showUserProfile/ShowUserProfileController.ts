import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body

    const userProfile = this.showUserProfileUseCase.execute(id)

    return response.json(userProfile)
  }
}

export { ShowUserProfileController };
