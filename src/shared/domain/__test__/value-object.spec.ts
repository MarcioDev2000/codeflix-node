import { ValueObject } from '../value-object';

class StringValueObject extends ValueObject {
     constructor(readonly value: string) {
        super();    
     }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly props1: string, readonly props2: number) {
        super();
    }
}   
describe  ('ValueObject Unit test', () => {
    test('should be equals', () => {
        const valueObject1 = new StringValueObject('test');
        const valueObject2 = new StringValueObject('test');
        expect(valueObject1.equals(valueObject2)).toBeTruthy();

        const ComplexValueObject1 = new ComplexValueObject('test', 123);
        const ComplexValueObject2 = new ComplexValueObject('test', 123);
        expect(ComplexValueObject1.equals(ComplexValueObject2)).toBeTruthy();
    });
}
);