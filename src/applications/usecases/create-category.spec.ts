import { CategoryRepository } from "@/repositories/Category.repository"
import { CreateCategoryUsecase } from "./create-category.usecase"

describe('Test create new Category', () => {

    const mockCategoryRepository = (): CategoryRepository => {
        return { create: jest.fn(), findByName: jest.fn() }
    }

    it('Should create new Category', async () => {

        const categoryRepository = mockCategoryRepository();

        const sut = new CreateCategoryUsecase(categoryRepository)

        const response = await sut.execute({ name: "fake-name", description: "fake-description" });

        expect(response).toBeTruthy();
        expect(response.id).toBeTruthy();
        expect(response.name).toBeTruthy();
    })
})