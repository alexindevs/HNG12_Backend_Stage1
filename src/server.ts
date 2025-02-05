import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import { NumberUtils } from './utils';
import { NumberResponse, ErrorResponse } from './types';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

async function getNumberFact(number: number): Promise<string> {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math`);
        return response.data;
    } catch (error) {
        return `Interesting fact about ${number} could not be fetched`;
    }
}

app.get('/api/classify-number', async (req: Request, res: Response) => {
    const numberParam = req.query.number;

    const num = parseInt(numberParam as string);
    if (isNaN(num)) {
        const errorResponse: ErrorResponse = {
            number: numberParam as string,
            error: true
        };
        return res.status(400).json(errorResponse);
    }

    try {
        const fun_fact = await getNumberFact(num);
        
        const response: NumberResponse = {
            number: num,
            is_prime: NumberUtils.isPrimeee(num),
            is_perfect: NumberUtils.isPerfect(num),
            properties: NumberUtils.getProperties(num),
            digit_sum: NumberUtils.getDigitSum(num),
            fun_fact
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({
            number: num,
            error: true
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});