var Person = /** @class */ (function () {
    function Person() {
        this.name = 'aaa';
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p = new Person();
console.log(p.getName());
