import  {calculate} from '../src/sample'
import { Prisma } from '@prisma/client'
it('one', () => {
    const result = calculate(1, 2, false)
    expect(result).toBe(1)
})

it('two', () => {
    const result = calculate(3, 2, false)
    expect(result).toBe(1)
})

it('three', () => {
    console.log(new Prisma.Decimal(2))
    expect(1).toBe(1)
})