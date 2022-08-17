describe('the greet function', function(){
    it("should greet lesufi with 'Hello, lesufi'", function () {
        assert.equal('Hello, lesufi', greet('lesufi'));
    });

    it('should greet victor with "Hello, victor"', function(){
        assert.equal('Hello, victor', greet('victor'));
    });
});