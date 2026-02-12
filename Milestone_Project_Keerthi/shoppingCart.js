class ShoppingCart{
    constructor(){
        this.items = [];
        this.discountPercentage = 0;
    }
    addItem(name,price,quantity){
        this.items.push({name,price,quantity});
    }
    removeItem(name){
        this.items = this.items.filter(item => item.name!==name);
    }
    calculateTotal() {
        return this.items.reduce(
            (total, item) => total + item.price + item.quantity,0
        );
    }
    applyDiscount(code){
        const discount = {
            SAVE10: 0.10,
            SAVE20: 0.20,
            SAVE30: 0.30
        };
        this.discountPercentage = discount[code] || 0;
    }
    calculateTax(taxRate){
        return this.calculateTotal() * taxRate;

    }
    checkout(taxRate){
        const total = this.calculateTotal();
        const tax = this.calculateTax(taxRate);
        const discount = total * this.discountPercentage;
        const finalAmount = total + tax - discount;
        this.items =[];
        this.dicountPercentage = 0;
        return finalAmount;
    }

}

module.exports = ShoppingCart;