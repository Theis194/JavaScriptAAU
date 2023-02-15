export default class Ingredient{
    constructor (amount, unit, type) {
        this.amount = amount;
        this.unit = unit;
        this.type = type;
    }

    static combine() {
        return `${amount} ${unit} ${type}`;
    }
}