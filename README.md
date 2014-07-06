Constructor-Pattern
===================
This repository contains the demo for the **Constructor-Pattern**.

In other programming languages(Java, C++ etc), we can define classes with keyword **class**. But in **JavaScript**, we don't have **class** keyword. But still we can define classes in **JavaScript** language with keyword **function**. Lets understand how we define classes in **JavaScript** with **function** keyword.

We are defining a **class** with the name **Person** which is having two properties i.e. name and age as given below:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        return "Name: " + this.name + " And Age: " + this.age;
    };
}
```

You might be thinking that, we are just defining a **function** and not a **class** named **Person**, which takes two arguments (name and age). You are right, we are just defining a **function** here with name **Person**. And when we invoke **Person function** (without **new** keyword), then it behaves like a normal **function**, where **this** is pointing to parent object and it returns either whatever we return from the function or whatever last line of **function** returns. In **Person function** we are not returning anything, and in the last line we have just defined the **show function** which returns nothing. So in the code given below **noObject** === **undefined** will log true.

```javascript
var noObject = Person("Amit Kumar", 26);
console.log(noObject === undefined); // true
```

But when we invoke **Person function** with **new** keyword, then that function magically behaves like a **constructor function** and creates a new object, then assigns the reference of that newly created object to **this** for the **function** and returns the newly created object(**this**) on the last line of the function. As **this** in the **function** points to the newly created object so all those members which we are defined with **this**, will be defined with the newly created object only.

```javascript
var amit = new Person("Amit Thakkar", 25),
    pi = new Person("Shreyance", 30);
console.log(amit !== undefined); // true
console.log(pi !== undefined); // true
console.log(amit.show());
console.log(pi.show());
```

**NOTE**: When we define a **function**, which we are going to use as a **Constructor function**, then first letter of the name of **function**, is written in Capital letter. That is a just a convention, so everyone can understand that which functions are **Constructor functions** and which **functions** are **Normal functions**.

**Person function** is having two arguments: name and age. When we invoke **Person function** then it assigns name and age arguments to **this.name** and **this.age** respectively. When we are invoking **Person function** with **new** keyword then **this** will be having reference of newly created object but when we are invoking **Person function** without **new** keyword then **this** will be having reference of parent object.

After invoking the **Person function** without **new** keyword, it defines name, age and show members to parent object. So we can access name, age and show members outside the **Person function** too.

```javascript
console.log(this.name);
console.log(this.age);
console.log(this.show());
```

Now let's define a new **function** with name **getMessage**, which returns String as below:

```javascript
function getMessage() {
    return "I am normal function";
}
```

If we invoke **getMessage function** without **new** keyword then it will return whatever it returns, but if we invoke **getMessage function** with **new** keyword, then it will create a new object and it will return that newly created object instead of whatever function returns. And return statement of the **function** will be ignore by **new** keyword.

```javascript
console.log(getMessage()); // "I am normal function"
console.log(new getMessage()); // {} empty object
```

Now let's make it more interesting and define one more **function** with name **getMessageObject**, which returns Object instead of primitive(String/Number) as below:

```javascript
function getMessageObject() {
    return {message: "I am normal function"};
}
```

Now lets invoke **getMessageObject function** with and without **new** keyword and watch the output:

```javascript
console.log(getMessageObject()); // { message: 'I am normal function' }
console.log(new getMessageObject()); // { message: 'I am normal function' }
```

You will see that, **getMessageObject function** returns same value either we invoke with **new** keyword or without **new** keyword, because **Constructor function** returns an object, if **Constructor function** is already returning an object then **Constructor function** returns that object otherwise **Constructor function** returns newly created object.

**NOTE:** You can checkout full working source code from this [link](https://github.com/AmitThakkar/Constructor-Pattern).