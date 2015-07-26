var sassy = (function () {
    var sassy;
    sassy={};

    function compile(input/*, output*/) {
        console.log(input);
        input = input.replace(/\/\/.*/gm, '');// deleting // comments
        input = input.replace(/\/\*[^!].*?\*\//gm, '');// deleting /**/ comments
        return input;
    }

    sassy.compile = compile;
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
