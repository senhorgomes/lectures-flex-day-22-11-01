const barista = (name, size, dairy, whipcream, syrups, iced, espressoShots) => {

    //grab the everything from the order
    //a default object, with a standard drink blueprint
    if(typeof size !== "string" || typeof dairy !== "object" || typeof whipcream !== "boolean"){
        throw new Error("Wrong type, please double check your order")
    }
    const defaultOrder = {
        name: name,
        size: size,
        dairy: dairy,
        whipcream: whipcream,
        syrups: syrups,
        iced: iced,
        espressoShots: espressoShots
    }
    //add each parameter to the corresponding key value pair
    //return that coffeeDrink
    return defaultOrder;
}

module.exports = barista;