import { Entity } from "@/@seedwork/domain/entity/Entity";

export class Category extends Entity<Category.Props> {
    private constructor(props: Category.Props, id?: string) {
        super(props, id)
    }

    static create(props: Category.Input, id?: string): Category {
        const category = new Category({
            ...props,
            createdAt: props.createdAt ?? new Date()
        }, id)

        return category;
    }
}

export namespace Category {
    export type Input = {
        name: string;
        description?: string;
        createdAt?: Date
    }

    export type Props = {
        name: string;
        description?: string;
        createdAt: Date
    }
}