const initialState = {
    items: [
        {
            id:0, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.booksbythefoot.com%2Fshop%2Fpc%2Fcatalog%2FROsq.jpg&f=1&nofb=1',
            title: 'Books I do not need anymore', 
            category: 'Books', 
            description: 'Among these books are: Harry Potter, Lord of the Rings and Animal Farm. I can give you a bag to take them home ;)',
            location: 'Mitte'
        },
        {
            id:1, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd111vui60acwyt.cloudfront.net%2Fproduct_photos%2F18532620%2Fimage_large.jpg&f=1&nofb=1',
            title: 'Vintage Jacket', 
            category: 'Clothes', 
            description: 'My days of wearing this gem are long gone. If anybody wants to rock this old timer, be my guest.',
            location: 'Prenzlauer Berg'
        },
        {
            id:2, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FI%2F51OqvT89g4L._AC_US218_.jpg&f=1&nofb=1',
            title: 'Bettwäsche', 
            category: 'Furniture', 
            description: '1 Bettdecke, 2 Kopfkissen (klein+groß), 1 Laken, 1 Bettwäsche Set. Ich verschenke diverse Dinge. Bei Fragen einfach melden. UNHÖFLICHE ANFRAGEN WERDEN IGNORIERT. Wer möchte, kann einen kleinen Obolus für die Babyspardose entrichten. :) Liebe Grüße',
            location: 'Hellersdorf'
        },
        {
            id:3, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpicture.yatego.com%2Fimages%2F42233cea41d8f5.5%2F4b11067e04a497a888b5943449b97045-kqh%2Fbadezimmer-wand-schrank-midischrank-bad-badezimmerschrank-rialto-schmal-anthrazit.jpg&f=1&nofb=1',
            title: 'Badezimmerschrank', 
            category: 'Furniture', 
            description: 'Nur Abholung.',
            location: 'Ravensburg'
        },
        {
            id:4, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FH6kAAOSwX61ZCMHp%2Fs-l400.jpg&f=1&nofb=1',
            title: 'Blumen Hose, Strampelhose', 
            category: 'Clothes', 
            description: 'Für Selbstabholer. Übergabe nur vor der Haustüre, mit dem neuen, vorgeschriebenen Sicherheitsabstand von mind. 2 Metern! Bitte im Voraus sagen, wie viele benötigt werden.',
            location: 'Langenau'
        },
        {
            id:5, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qFr9mwRh7zCHNxk8JN38WwAAAA%26pid%3DApi&f=1',
            title: 'Mathematik fürs Berufskolleg', 
            category: 'Books', 
            description: 'Zur Prüfungsvorbereitung nützlich.',
            location: 'Tiergarten'
        },
        {
            id:6, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.solebich.de%2Fsites%2Fwww.solebich.de%2Ffiles%2Fstyles%2F278x278_nocrop%2Fpublic%2Fproducts%2Fhome24%2F000000001000110597-sessel-hepburn-ii.jpg&f=1&nofb=1',
            title: ' Couch, Sessel und Hocker', 
            category: 'Furniture', 
            description: 'Garnitur bestehend aus Couch (2,5 - 190 cm breit) Armlehnen beidseitig ausklappbar, Sessel (90 cm breit) und Hocker (58 x 50 cm), zu verschenken. Abholung Düsseldorf-Bilk 2 Etage Die Möbel können am 21.03. oder 22.03.2020 abgeholt werden.',
            location: 'Kreuzberg'
        }
    ],
    categories: [
        {name: 'Furniture'}, 
        {name: 'Clothes'}, 
        {name: 'Food'}, 
        {name: 'Books'}
    ],
    searchCategory: '',
    searchTerm: ''
}

export function Reducer(state = initialState, action) {
    switch(action.type) {

        case 'ADD_ITEM':
            let newItem = action.payload;
            return {...state, items: [...state.items, newItem], posted: true}

        case 'SEARCH_CATEGORY':
            return {...state, searchCategory: action.payload}

        case 'SEARCH_TERM':
            return {...state, searchTerm: action.payload}
            
        default:
            return state
    }
}
