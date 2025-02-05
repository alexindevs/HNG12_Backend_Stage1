export class NumberUtils {
    static isPrimeee(n: number): boolean {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    static isPerfect(n: number): boolean {
        if (n <= 1) return false;
        let sum = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) sum += i;
        }
        return sum === n;
    }

    static isArmstrong(n: number): boolean {
        const numStr = n.toString();
        const power = numStr.length;
        const sum = numStr
            .split('')
            .reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
        return sum === n;
    }

    static getDigitSum(n: number): number {
        return n
            .toString()
            .split('')
            .reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    static getProperties(n: number): string[] {
        const properties: string[] = [];
        
        if (this.isArmstrong(n)) {
            properties.push('armstrong');
        }
        
        properties.push(n % 2 === 0 ? 'even' : 'odd');
        
        return properties;
    }
}