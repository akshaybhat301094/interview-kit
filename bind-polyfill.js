const userData = {
    firstName: "Akshay",
    lastName: "Bhat"
}

function printFullName(age, place) {
    console.log(`${this.firstName} ${this.lastName} age ${age} from ${place}`);
}

// custom bind function named myBind
Function.prototype.myBind = function(...args) {
    const [objRef, ...params] = args;
    return (...args2) => {
        this.apply(objRef, [...params, args2]);
    }
}

const printName = printFullName.bind(userData, 26);

printName('Udhampur')