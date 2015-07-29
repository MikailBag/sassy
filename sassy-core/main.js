var sassy = (function () {
    var sassy;
    var integrator={
        import:function(url){
            var script= document.createElement('script');
            script.src=url;
            document.head.appendChild(script)
        }
    };
    integrator.import('som.js');
    integrator.import('parser.js');



    function cut(str, startPos, endPos) {
        //console.log('cutting str ' + str);
        var chars = str.split('');
        console.log('cutted substr ' + chars.splice(startPos, endPos - startPos + 2));
        return chars.join('')


    }

    function uncomment(str) {
        str = str.replace(/\/\/.*/gm, '');// deleting // comments
        var index = str.indexOf('/*');

        while (index != -1) {
            var endIndex = str.indexOf('*/', index);
            console.log('multiline found;\nstart index: ' + index + ' end index: ' + endIndex);
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
        },
        parse:parse
    };
    return sassy;


})();


console.log('sassy core included //');
console.log(
    sassy.compile('text' +
        '\n//comment' +
        '\n//comment' +
        '\nin-str //comment' +
        '\n/*multiline comment must be deleted' +
        'fully*/' +
        '\n*!but this-no, it\'s important*/' +
        '\ntext'));
