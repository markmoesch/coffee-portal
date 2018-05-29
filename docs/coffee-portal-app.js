let coffees =[]
const filters = {
    searchText: ''
}

const coffeeJSON = localStorage.getItem('coffees')

if (coffeeJSON !== null) {
    coffees = JSON.parse(coffeeJson)
}
const renderCoffees = function (coffees, filters) {
    const filteredCoffees = coffees.filter(function (coffee) {
        return coffee.name.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#coffees').innerHTML = ''
    filteredCoffees.forEach(function (coffee) {
        const coffeeEl = document.createElement('p')

        if(coffee.name.length >0 ) {
        coffeeEl.textContent = coffee.name
        }else {coffeeEl.textConent = 'No coffee for you'}
        document.querySelector('#coffees').appendChild(coffeeEl)
    })
}


renderCoffees(coffees, filters)

document.querySelector('#create-coffee').addEventListener('click',function(e){
    coffees.push({
        name:'',
        url:''
})
    localStorage.setItem(coffees,JSON.stringify(coffees))
    renderCoffees(coffees,filters)
})