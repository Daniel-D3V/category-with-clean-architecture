import { Category } from "@/entities/Category/Category";

export interface CategoryRepository {
    create(category: Category): Promise<void>
    findByName(name: string): Promise<Category | null>
}