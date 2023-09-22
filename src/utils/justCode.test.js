import addNums from "./justCode";

describe("test function addNums", () => {
    test("that function addNums works for numbers", () =>{
        expect(addNums(2,2)).toBe(4);
        expect(typeof addNums(3.3,3.3) === "number").toBeTruthy();
    });

})
