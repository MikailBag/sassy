var som=require('sassy-core/som');
var parser=require('sassy-core/parser');
describe('hello test',function(){
    it('passes',function(){
        expect(true).toBeTruthy();
    })
});
describe('parser',function(){
    it('availeble',function(){
        expect(parser).toBeTruthy()
    })
});