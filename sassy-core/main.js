function compile(input, output) {
    console.log(input);
    input = input.replace(/\/\/.*/gm, '');// deleting // comments
    input = input.replace(/\/\*[^!].*?\*\//gm, '');// deleting /**/ comments
    return input;
}
console.log('sassy core included //');
console.log(
    compile('text' +
        '\n//comment' +
        '\n//comment' +
        '\nin-str //comment' +
        '\n/*multiline comment must be deleted' +
        'fully*/' +
        '\n*!but this-no, it\'s important*/' +
        '\ntext'));
