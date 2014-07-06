/**
 * Created by Amit Thakkar on 2/7/14.
 */
(function () {
    // Defining the Person Class
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.show = function () {
            return "Name: " + this.name + " And Age: " + this.age;
        };
    }

    // Person function Behaving like a normal function
    console.log("\n\n=========================================");
    console.log("When invoking function without new keyword then it is not returning anything.");
    var noObject = Person("Amit Kumar", 26);
    console.log(noObject === undefined); // true

    // Behave like a Constructor function
    console.log("\n\n=========================================");
    console.log("When invoking function with new keyword then it is returning newly created object");
    var amit = new Person("Amit Thakkar", 25),
        pi = new Person("Shreyance", 30);
    console.log(amit !== undefined); // true
    console.log(pi !== undefined); // true
    console.log(amit.show());
    console.log(pi.show());

    console.log("\n\n=========================================");
    console.log("this into Person function refer to parent object when we invoke Person function without new keyword");
    console.log(this.name);
    console.log(this.age);
    console.log(this.show());

    // Defining a normal function getMessage
    function getMessage() {
        return "I am normal function";
    }

    console.log("\n\n=========================================");
    console.log("When we invoke a function without new keyword then it returns whatever function returns");
    console.log(getMessage()); // "I am normal function"
    console.log("When we invoke a function with new keyword then it returns object");
    console.log(new getMessage()); // {} empty object

    // Defining a normal function getMessage
    function getMessageObject() {
        return {message: "I am normal function"};
    }

    console.log("\n\n=========================================");
    console.log("When we invoke a function without new keyword then it returns whatever function returns");
    console.log(getMessageObject()); // "I am normal function"
    console.log("When we invoke a function with new keyword then it returns object");
    console.log(new getMessageObject()); // {} empty object
})();