const CreatePerson = function(Name, Age, Nationality) {
    this.Name = Name;
    this.Age = Age;
    this.Nationality = Nationality;

    this.EnterName = () => {
        return console.log(`My name is ${Name}`);
    }

    this.EnterAge = () => {
        return console.log(`My age is ${Age}`);
    }

    this.EnterNatiolity = () => {
        return console.log(`My nationality is ${Nationality}`);
    }

    this.PrintRegister = () => {
        return console.log(`
        --------------------------------------
        |              Register              |
        |                                    |
        |   Name: ${Name}                     |
        |   Age: ${Age}                          |
        |   Nationality: ${Nationality}          |
        |                                    |
        --------------------------------------
        `);
    }
}

const Person = new CreatePerson('Thiago',20,'Brasileiro');
Person.EnterName();
Person.EnterAge();
Person.EnterNatiolity();
Person.PrintRegister();
/////////////////////////////////////////
console.log(Person.Name);
console.log(Person.Age)
console.log(Person.Nationality)