var sassy = (function () {
    var sassy;
    var integrator={
        import:function(url){
           return require(url)
        }
    };

    var parser=integrator.import('./parser.js');



    function cut(str, startPos, endPos) {
        //console.log('cutting str ' + str);
        var chars = str.split('');
        var cutted=chars.splice(startPos, endPos - startPos + 2);
        //console.log('cutted substr ' + cutted);
        return chars.join('')


    }

    function uncomment(str) {
        str = str.replace(/\/\/.*/gm, '');// deleting // comments
        var index = str.indexOf('/*');

        while (index != -1) {
            var endIndex = str.indexOf('*/', index);
            //console.log('multiline found;\nstart index: ' + index + ' end index: ' + endIndex);
            str = cut(str, index, endIndex);
            index = str.indexOf('/*');
        }

        return str;
    }





    function compile(str/*, output*/) {
        //console.log(str);
        str = str.replace(/\/\/.*/gm, '');// deleting // comments
        str = str.replace(/\/\*[^!].*?\*\//gm, '');// deleting /**/ comments
        return str;
    }

    sassy = {
        compile: compile,
        uncomment: uncomment,
        utils: {
            cut: cut,
            integrator:integrator
        }
    };
    return sassy;


})();


//console.log('sassy core included //');
//console.log(
    sassy.compile('text' +
        '\n//comment' +
        '\n//comment' +
        '\nin-str //comment' +
        '\n/*multiline comment must be deleted' +
        'fully*/' +
        '\n*!but this-no, it\'s important*/' +
        '\ntext');//);
