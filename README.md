# Number Classification API

A TypeScript/Express REST API that analyzes numbers and returns their mathematical properties along with interesting facts.

## Features

- Number classification and analysis (prime, perfect, Armstrong)
- Mathematical properties detection
- Fun facts about numbers via Numbers API integration
- CORS enabled
- TypeScript implementation
- Error handling

## Tech Stack

- TypeScript
- Node.js
- Express.js
- Axios

## Installation

1. Clone the repository:
```bash
git clone https://github.com/alexindevs/HNG12_Backend_Stage1.git
cd HNG12_Backend_Stage1
```

2. Install dependencies:
```bash
npm install
```

3. Build and start the server:
```bash
npm run build
npm start
```

The server will start at `http://localhost:3000`

## API Documentation

### Endpoint

`GET /api/classify-number?number={number}`

### Parameters

- `number` (required): An integer to analyze

### Success Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

```json
{
    "number": "alphabet",
    "error": true
}
```

## Test Cases

Test the API with these valid numbers to verify all functionality:

### Armstrong Numbers
- 371 - Should return: properties: ["armstrong", "odd"]
- 153 - Should return: properties: ["armstrong", "odd"]
- 8208 - Should return: properties: ["armstrong", "even"]

### Perfect Numbers
- 28 - Should return: is_perfect: true, properties: ["even"]
- 496 - Should return: is_perfect: true, properties: ["even"]

### Prime Numbers
- 17 - Should return: is_prime: true, properties: ["odd"]
- 23 - Should return: is_prime: true, properties: ["odd"]

### Basic Numbers
- 100 - Should return: properties: ["even"]
- 15 - Should return: properties: ["odd"]
- 42 - Should return: properties: ["even"]

Test using curl:
```bash
curl http://localhost:3000/api/classify-number?number=371
```
