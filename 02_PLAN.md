# SunshineBoots Barista(Narrate each step, sort of like a tech interview)
//A drink order, and spits out a coffeeDrink
const coffeeDrink = {
    name:"String",
    size: "string",
    dairy: [],
    whipCream: true,
    syrups:[],
    iced: boolean,
    espressoShots: int
}

Take in a order, which our barista will create for us and it will return a coffeeDrink

# What does it mean

Taking in aan order
Deducting all parts of the order, and creating a drink

coffeeDrink needs to be an object
const coffeeDrink = {};

name needs to be a string Default value = "Romeo/Juliet"
size needs to be an string Sizes should equal the same = (grande == medium/ tall == small)
dairy needs to be an array
whipcream needs to be an boolean
syrups needs to be an array
iced needs to be a boolean
espressoShots needs to an int

# Input and Outputs

Input - name, size, dairy, whipcream, syrups, iced, espressoShots
Output - is a coffeeDrink object

# How

Pseudo code

const barista = (name, size, dairy, whipcream, syrups, iced, espressoShots) => {

    //grab the everything from the order
    //a default object, with a standard drink blueprint
    //add each parameter to the corresponding key value pair
    //return that coffeeDrink

}

console.log("Order 1", barista("Mike", "Medium", ["Oatmilk"], false, ["Chocolate"], false, 3))
console.log("Order 2", barista("Rebecca", "Large", ["Almond Milk"], true, ["Caramel"], true, 4))
console.log("order 3", barista("Anne-Marie", "Small", [], true, [], true, 2))

# Test cases

Happy Path
    - everyone gets their drink, and they are happy! :)


Sad Path
    - What happens if we pass in an empty
    - Adding to the coffee mug
    - Sipping more than the coffee mug holds
    - negative numbers
    - amount isn't a number
    - amount, and coffee mug is a string
    - undefined, incorrect types in general
    - Incorrect types, every argument needs to match a specific type
    - What if they order something that we don't have? Ketchup? Syrups = Chocolate, Caramel, Hazelnut, Vanilla
    - Size that doesnt exist? Small, medium, and large. Extra-small, and extra-large it should fail

