var som=require('sassy-core/som');
var parser=require('sassy-core/parser');
describe('hello test',function(){
    it('passes',function(){
        expect(true).toBeTruthy();
    })
});
describe('parser',function(){
    it('availible',function(){
        expect(parser).toBeTruthy();
    })
});

describe('sass-o-m',function(){
    it('availible',function(){
        expect(som).toBeTruthy();
    });
    describe('node',function(){
        it('availible',function(){
         var  node =new som.Node(0);
            expect(node).toBeTruthy();
        });
        it('supports relationship',function(){
            var child=new som.Node(0);
            var parent=new som.Node(0,[child]);
            var child2=new som.Node(0);
            parent.appendChild(child2);
            expect(parent.children).toEqual([child,child2]);
        });
    });

});