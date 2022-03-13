const expect = chai.expect;

describe('MyFunctions', function(){
    describe("#shuffleCards", function () {
        it("shoud return an array of 52 randomized cards", function () {     
            const testdeck = new Deck();
            testdeck.shuffleCards();
            console.log(testdeck.cards);
            expect(testdeck.cards).to.have.length(52);
        });
    });
});