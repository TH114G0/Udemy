//Class
class Person {
    constructor(Name) {
        this.Name = Name;
    }

    Speak() {
        console.log(`My name is ${this.Name}.`);
    }
}

const p1 = new Person('Thiago');
p1.Speak();


//Factory
const CreatePerson = Name => {
    return {
        Speak: () => console.log(`My name is ${Name}`)
    }
}

const p2 = CreatePerson('Jose');
p2.Speak();