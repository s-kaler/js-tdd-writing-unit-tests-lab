import { isPalindrone } from "../utils";

describe("isPalindrome", () => {
    it("tests if word is a palindrome", () => {
        const word1 = "racecar";
        const palinBool = isPalindrone(word1);
        expect(palinBool).toBe(true)
        
    });
    it("tests if word is not a palindrome", () => {
        const word = "car";
        const palinBool = isPalindrone(word);
        expect(palinBool).toBe(false);
    });
    it("tests if word is still a palindrome with capitalized letters", () => {
        const word = "raCecAr";
        const palinBool = isPalindrone(word);
        expect(palinBool).toBe(false);
    });
    it("tests if an error is thrown when string is empty", () => {
        const word = "";
        expect(() => isPalindrome(word)).toThrow();
    });
})