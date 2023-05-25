import { Category } from "@/entities/Category/Category";
import { CategoryRepository } from "@/repositories/Category.repository";

export class CreateCategoryUsecase {
    constructor(
        private categoryRepository: CategoryRepository
    ) { }

    async execute({ name, description }: CreateCategoryUsecase.Input): Promise<CreateCategoryUsecase.Output> {
        const categoryExist = await this.categoryRepository.findByName(name);
        if (categoryExist) {
            throw new Error("A category with this name already exists")
        }

        const category = Category.create({ name, description });

        await this.categoryRepository.create(category);

        return {
            id: category.id,
            ...category.props
        }
    }
}

export namespace CreateCategoryUsecase {
    export type Input = {
        name: string;
        description: string;
    }

    export type Output = {
        id: string;
        name: string;
        description?: string;
        createdAt?: Date
    }
}