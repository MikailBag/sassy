console.log('tests included');
console.log(QUnit, sassy.compile);
QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});
QUnit.test('api is availible', function (assert) {
    assert.ok(sassy.compile, 'Compiler availible');
    assert.ok(sassy.uncomment, 'Comment clean system');
    assert.ok(sassy.utils.integrator && sassy.utils.integrator.import, 'integrator availible')
});

QUnit.test('Comment clean system', function (assert) {
    var str, res;
    str = 'text' +
        '\n//comment' +
        '\n//comment' +
        '\nin-str //comment' +
        '\ntext';
    res = 'text' +
        '\n\n\nin-str ' +
        '\ntext';
    assert.equal(sassy.uncomment(str), res, 'delets // comments');
    str = 'text' +
        '\n//comment' +
        '\n//comment' +
        '\nin-str //comment' +
        '\n/*multiline comment*/' +
        '\ntext';
    res = 'text' +
        '\n\n\nin-str ' +
        '\n\ntext';
    assert.equal(sassy.uncomment(str), res, 'delets /**/ comments');

});