import { Category } from "./Category"

describe('Test Category Entity', () => {

    let props: Category.Input

    beforeEach(() => {
        props = {
            name: "fake-name",
            createdAt: new Date()
        }
    })

    it('Should Create a new Category Entity', () => {
        const category = Category.create(props);

        expect(category.props).toBeTruthy();
        expect(category.props).toMatchObject({ ...props });
    })

    it('Should Create a new Category with ID', () => {
        const category = Category.create(props, 'fake-id');

        expect(category.id).toBe("fake-id");
    })

    it('Should Create a new createdAt Date, If createdAt is not provided', () => {
        delete props.createdAt
        const category = Category.create(props);

        expect(category.props.createdAt).toBeTruthy();
        expect(category.props.createdAt).toBeInstanceOf(Date);
    })
})