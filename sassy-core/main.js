function compile(input,output){
    input.replace(/\/\/.*/gm,'');// deleting // comments
    return input;
}
console.log('sassy core included');