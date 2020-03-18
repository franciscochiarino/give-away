const initialState = {
    items: [
        {
            id:1, 
            title: 'Books I do not need anymore', 
            category: 'Books', 
            description: 'Among these books are: Harry Potter, Lord of the Rings and Animal Farm. I can give you a bag to take them home ;)',
            location: 'Mitte'
        }
    ],
    categories: [
        {name: 'Furniture', iconSrc: '../assets/furniture.png'}, 
        {name: 'Clothes', iconSrc: '../assets/clothes.png'}, 
        {name: 'Food', iconSrc: '../assets/food.png'}, 
        {name: 'Books', iconSrc: '../assets/books.png'}
    ]
}

export function Reducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}