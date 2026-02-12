class InventoryManager{
    contructor(){
        this.products =[];
    }
    addProduct(product){
        const exists = this.products.some(
            p => p.productID === product.productID
        );
        if(exists){
            throw new error ("product was already there");
        }
        this.products.push(product);
    }
    getProductByID(productID){
        return this.products.find(p => p.productID === productID) || null;
    }
    updateProduct(productID, updates){
        const product = this.getProductByID(productId);
        if(!product){
            throw new error("product not found");
        }
        Object.assign(product, updates);
    }
    deleteProduct(productID){
        const index = this.products.findIndex(p => p.productID === productID);
        if(index === -1){
            throw new error("product was not found");
        }
        this.products.splice(index,1);
    }
    listallProducts(){
        return this.products;
    }
}
