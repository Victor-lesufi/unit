describe('check if car regNumber is from Bellville', function(){
    it("should check if car is from Bellville", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    })
})