var sassy = (function () {
    var sassy;

    function cut(str, startPos, endPos) {
        console.log('cutting str ' + str);
        var chars = str.split('');
        console.log('cutted substr ' + chars.splice(startPos, endPos - startPos + 2));
        return chars.join('')


    }

    function uncomment(str) {
        str = str.replace(/\/\/.*/gm, '');// deleting // comments
        var index = str.indexOf('/*');


        if (index == -1) {
            console.log('no multiline');
        } else {
            var endIndex = str.indexOf('*/', index);
            console.log('multiline found;\nstart index: ' + index + ' end index: ' + endIndex);
            str = cut(str, index, endIndex);
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
        utils:{
            cut:cut
        }
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
