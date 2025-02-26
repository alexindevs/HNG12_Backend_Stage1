export interface NumberResponse {
    number: number;
    is_prime: boolean;
    is_perfect: boolean;
    properties: string[];
    digit_sum: number;
    fun_fact: string;
}

export interface ErrorResponse {
    number: string | number | null;
    error: boolean;
}