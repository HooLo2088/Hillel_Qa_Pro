var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",


    addService: function(name, price) {
        this[name] = price;
    },


    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].endsWith('грн')) {
                total += parseInt(this[key]);
            }
        }
        return total + 'грн';
    },


    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].endsWith('грн')) {
                let price = parseInt(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }
        return min + 'грн';
    },


    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].endsWith('грн')) {
                let price = parseInt(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }
        return max + 'грн';
    }
};


services.addService('Капучіноко ))', '200 грн');
services.addService('на морько ))', '10 грн');


console.log("Загальна вартість послуг:", services.price());
console.log("Мінімальна ціна послуг:", services.minPrice());
console.log("Максимальна ціна послуг:", services.maxPrice());