console.log('tests included');
console.log(QUnit, compile);
QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});
QUnit.test('api is availible',function(assert){
    assert.ok(compile,'compiler availible');
});