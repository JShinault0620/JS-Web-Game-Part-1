const moveElement = (string, distance, negative = false) => {
    let number = Number(string.slice(0, -2))
    if (negative) {
        number -= distance
    } else {
        number += distance
    }
    return String(number + 'px')
}

const createImage = (name, left, bottom, src, character = false) => {
    let newImage = document.createElement('img')
    newImage.src = src
    newImage.style.position = 'fixed'
    newImage.style.left = left
    newImage.style.bottom = bottom
    newImage.id = name
    if (character) {
        console.log(newImage.style.bottom)
        document.addEventListener('keypress', (event) => {
            switch (event.key) {
                case 'w':
                    newImage.style.bottom = moveElement(newImage.style.bottom, 25)
                    newImage.src = 'assets/green-character/north.gif'
                    break;
                case 'a':
                    newImage.style.left = moveElement(newImage.style.left, 25, true)
                    newImage.src = 'assets/green-character/west.gif'
                    break;
                case 's':
                    newImage.style.bottom = moveElement(newImage.style.bottom, 25, true)
                    newImage.src = 'assets/green-character/south.gif'
                    break;
                case 'd':
                    newImage.style.left = moveElement(newImage.style.left, 25)
                    newImage.src = 'assets/green-character/east.gif'
                    break;
            }
        })
    } else {
        newImage.addEventListener('click', () => {
            newImage.remove()
        })
    }
    document.body.append(newImage)
    console.log('Created ' + name)
}

let imageArray = [
    {name: 'greenCharacter', left: '100px', bottom: '100px', src: 'assets/green-character.gif', character: true},
    {name: 'pineTree', left: '450px', bottom: '200px', src: 'assets/pine-tree.png'},
    {name: 'tree', left: '200px', bottom: '300px', src: 'assets/tree.png'},
    {name: 'pillar', left: '350px', bottom: '100px', src: 'assets/pillar.png'},
    {name: 'crate', left: '150px', bottom: '200px', src: 'assets/crate.png'},
    {name: 'well', left: '500px', bottom: '425px', src: 'assets/well.png'},
    {name: 'sword', left: '500px', bottom: '405px', src: 'assets/sword.png'},
    {name: 'shield', left: '165px', bottom: '185px', src: 'assets/shield.png'},
    {name: 'sword', left: '600px', bottom: '100px', src: 'assets/staff.png'}
]

let body = document.querySelector('body')
body.style.backgroundColor = 'green'

for (let i = 0; i < imageArray.length; i ++) {
    createImage(imageArray[i].name, imageArray[i].left, imageArray[i].bottom, imageArray[i].src, imageArray[i].character)
}