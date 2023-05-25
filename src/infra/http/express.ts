import { CreateCategoryUsecaseFactory } from '@/factories/create-category-usecase.factory';
import express from 'express';

const app = express();

app.use(express.json())

app.post('/api/category', async (req, res) => {
    const usecase = CreateCategoryUsecaseFactory.create();

    try {
        const output = await usecase.execute(req.body)

        res.json({ ...output })
    } catch (error) {
        const err = error as Error
        res.status(400).json({ message: err.message })
    }
})

app.listen(3000, () => {
    console.log("Hello, i'm is online in port 3000")
})