import  {calculate} from '../src/sample'
it('one', () => {
    const result = calculate(1, 2, false)
    expect(result).toBe(1)
})

it('two', () => {
    const result = calculate(3, 2, false)
    expect(result).toBe(1)
})