const barista = require("../barista");
const { expect } = require("chai");

describe('Happy path', function () {
    it("provide the correct arguments, and returns a object", () => {
        //Create a variable based on the output
        const result = barista("Mike", "Medium", ["Oatmilk"], false, ["Chocolate"], false, 3);
    
        expect(result).to.be.an("object");
      });
    it("provide the correct arguments, we can access the name key of the drink", () => {
        //Create a variable based on the output
        const result = barista("Rebecca", "Large", ["Almond Milk"], true, ["Caramel"], true, 4);
    
        expect(result.name).to.equal("Rebecca");
      });
      
});
describe('Sad path', function () {
    it("size needs to be a string", () => {
        //Create a variable based on the output
        const fctThatWillThrowAnError = () => barista("Anne-Marie", true, [], true, [], true, 2);
        //We dont want to match the value type, we want an error to be spit out
        //It should expect result, to be an error
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
      
    it("dairy needs to be an array", () => {
        //This is the happy path of the test
        //barista("Anne-Marie", "Small", [], true, [], true, 2)
        //Create a variable based on the output
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", 0, true, [], true, 2);
        //We dont want to match the value type, we want an error to be spit out
        //It should expect result, to be an error
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
    it("whipcream needs to be a boolean", () => {
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", [], 0, [], true, 2);
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
    it("espressoShots needs to be an integer", () => {
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", [], true, [], true, []);
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
    //By placing an x beside our test, mocha will skip the test
    xit("syrups needs to be an array", () => {
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", [], true, 0, true, 2);
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
      
});