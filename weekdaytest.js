describe('Is it a week day function', function() {
    it("should check if 'SUNDAY' is a weekday", function(){
        assert.equal(isWeekday('Saturday'), false)
    })

    it("should check if 'WEDNESDAY' is a weekday", function(){
        assert.equal(isWeekday('Monday'), true);
    })
});