Constructor-Pattern
===================
This repository contains the demo for the **Constructor-Pattern**.

In other programming languages(Java, C++ etc), we can define classes with keyword **class**. But in **JavaScript**, we don't have **class** keyword. But still we can define classes in **JavaScript** language with keyword **function**. Lets understand how we define classes in **JavaScript** with **function** keyword. 

We are defining a **class** with name **Person** and having two properties as name and age as below:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        return "Name: " + this.name + " And Age: " + this.age;
    };
}
```

You might be thinking that, we are just defining a **function** not a **class** with named **Person**, which takes two arguments(name and age). You are right, we are just defining a **function** here with name **Person**. And when we invoke a function(without **new** keyword), then it behave like a normal **function**, where **this** is point to parent object and it returns either whatever we return from the function or whatever last line of **function** returns. In **Person function** we are not returning anything, and last line is just defining the **show function** and returning nothing. So in below code **noObject** === **undefined** will log true.

```javascript
var noObject = Person("Amit Kumar", 26);
console.log(noObject === undefined); // true
```

But when we invoke a **function** with **new** keyword, then that function magically behave like a **constructor function** and create a new object then assign the reference of that newly created object to **this** of the **function** and return the newly created object(**this**) on the last line of the function. As **this** into the **function** points to the newly created object so all those member which we are defining with **this**, will all be define with the newly created object only.

```javascript
var amit = new Person("Amit Thakkar", 25),
    pi = new Person("Shreyance", 30);
console.log(amit !== undefined); // true
console.log(pi !== undefined); // true
console.log(amit.show());
console.log(pi.show());
```

**NOTE**: When we define a **function**, which we are going to use as a **Constructor function**, then first letter of the name of **function**, we write in Capital letter. That is a just a convention, so everyone can understand that which **functions** are **Constructor function** and which **functions** are **Normal function**.

**Person function** having two arguments: name and age. When we invoke **Person function** then it assign name and age arguments to **this.name** and **this.age** respectively. When we are invoking **function** with **new** keyword then **this** will be having reference of newly created object but when we are invoking **function** without **new** keyword then **this** will be having reference of parent object.

After invoking the **Person function** without **new** keyword, it defines name, age and show members to parent object. So we can access name, age and show members outside the **Person function** too.

```javascript
console.log(this.name);
console.log(this.age);
console.log(this.show());
```

Now lets define a new **function** with name **getMessage**, which return something as below:

```javascript
function getMessage() {
    return "I am normal function";
}
```

If we invoke **getMessage function** without **new** keyword then it will return whatever it returns, but if we invoke **getMessage function** with **new** keyword, then it will create a new object and it will return that newly created object instead of whatever function returns. And return statement will be ignore by **new** keyword.

```javascript
console.log(getMessage()); // "I am normal function"
console.log(new getMessage()); // {} empty object
```

**NOTE:** You can checkout full working source code from this [link](https://github.com/AmitThakkar/Constructor-Pattern).