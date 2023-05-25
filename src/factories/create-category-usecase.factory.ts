import { CreateCategoryUsecase } from "@/applications/usecases/create-category.usecase";
import { PrismaCategoryRepository } from "@/infra/repositories/prisma-category.repository";

export class CreateCategoryUsecaseFactory {
    static create(): CreateCategoryUsecase {
        const prismaCategoryRepository = new PrismaCategoryRepository();
        return new CreateCategoryUsecase(prismaCategoryRepository)
    }
}