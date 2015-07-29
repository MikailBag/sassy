function Node(type,children){
    this.type=type;
    this.children=children=children||[];
    for(var i=0;i<children.length;i++){
        children[i].parent=this;
    }
}
/*
node types:
0-notype(used in tests);
1-@rule;
2-style;
3-file;
4-comment;

*/
var proto;
proto=Node.prototype;
proto.appendChild=function(node){
  this.children.push(node)
};
proto.printStats=function(logger){
    logger=logger||Console;
    logger.dir(this);
};


exports.Node=Node;