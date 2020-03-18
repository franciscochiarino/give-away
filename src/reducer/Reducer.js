const initialState = {
    items: [
        {
            id:1, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg0.etsystatic.com%2F011%2F1%2F6208921%2Fil_570xN.422753060_rs6w.jpg&f=1&nofb=1',
            title: 'Books I do not need anymore', 
            category: 'Books', 
            description: 'Among these books are: Harry Potter, Lord of the Rings and Animal Farm. I can give you a bag to take them home ;)',
            location: 'Mitte'
        },
        {
            id:2, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-A_YBtU9vxs0%2FUJuKOK4wVII%2FAAAAAAAABOo%2FlcSt2_y1EbY%2Fs1600%2Fstack-of-books.jpg&f=1&nofb=1',
            title: 'Vintage Jacket', 
            category: 'Clothes', 
            description: 'My days of wearing this gem are long gone. If anybody wants to rock this old timer, be my guest.',
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