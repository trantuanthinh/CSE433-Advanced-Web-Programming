import {formatDate, formatUSCurrency} from "./services/shared-service";

test('a test', () => {
    expect(true).toBe(true);
    expect(() => {
        throw new Error('error');
    }).toThrow(Error);
});

test('test format date', () => {
    const result = formatDate(new Date(2023, 1, 1));
    expect(result).toBe('01.02.2023');
    expect(() => {
        throw new Error('error');
    }).toThrow(Error);
});

test('test format currency', () => {
    const result = formatUSCurrency(1000);
    expect(result).toBe('$1,000.00');
})

