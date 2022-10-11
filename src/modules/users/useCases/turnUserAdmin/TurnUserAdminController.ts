import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body

    const updatedUser = this.turnUserAdminUseCase.execute(id)

    return response.json(updatedUser)
  }
}

export { TurnUserAdminController };
