describe('must check shift', function(){
    it('must check shift for work is "morning"', function(){
        assert.equal(transportFee('morning'), 'R20');
    })

    it('must check shift for work is "afternoon"', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })

    it('must check shift for work is "nightshift"', function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
})