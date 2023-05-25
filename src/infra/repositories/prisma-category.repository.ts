import { Category } from '@/entities/Category/Category';
import { CategoryRepository } from '@/repositories/Category.repository';
import { PrismaClient } from '@prisma/client'

export class PrismaCategoryRepository implements CategoryRepository {

    prismaClient: PrismaClient

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async create(category: Category): Promise<void> {
        await this.prismaClient.category.create({
            data: {
                id: category.id,
                ...category.props
            }
        });
    }

    async findByName(name: string): Promise<Category | null> {
        const prismaCategory = await this.prismaClient.category.findFirst({
            where: { name }
        });

        if (!prismaCategory) return null;

        return Category.create({
            name: prismaCategory.name,
            description: prismaCategory.description ?? undefined,
            createdAt: prismaCategory.createdAt ?? undefined
        }, prismaCategory.id)
    }
}