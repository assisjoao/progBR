class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greatings(){
        console.log("Olá, tudo bom? Meu nome é", this.name);
    }

}

module.exports = Person;