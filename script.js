//Функция-конструктор

//Human read write speak
//write - document.write || alert(text)

// function Human(name) {
//     this.name = name
//     this.read = function(text) {
//         console.log(text)
//     }
//     this.write = function(text) {
//         document.write(text)
//     }
//     this.speak = function(text) {
//         alert('Hello, my name is' + this.name + text)
//     }
// }
// const Petya = new Human('Petya')
// Petya.read('Функция-конструктор это просто')

// function Programmer(language) {
//     this.language = language
//     console.log(arguments)
//     Human.apply(this, arguments)
//     this.writeCode = function() {
//         console.log('write code on' + this.language)
//     }
// }

// const Vasya = new Programmer('Java')

// Vasya.writeCode()
// Vasya.read('read this text')


function TagConstructor(tag) {
    this.tag = tag
    this.create = function() {
        const element = document.createElement(tag)
        return element
    }
    this.add = function(element) {
        document.body.appendChild(element)
    }
}
   

function TextTagConstructor(tag, style) {
    const apiKey = ';asll;dk;d65464sf64'

    TagConstructor.apply(this, arguments)

    this.setDefaultStyles = function(element) {
        element.style = style + '; font-family: Arial'
    }
    this.getApiKey = function() {
       console.log(apiKey)
    }
}

function ImageConstructor(tag, src, alt) {
    this.src = src //присвоили аргументы в this
    this.alt = alt
    TagConstructor.apply(this, arguments) //унаследовали все методы TagConstructor

    this.parentCreate = this.create //перезаписали родительский метод в новую переменную чтобы им воспользоваться

    this.create = function() { //перезаписали родительский метод create()
        const element = this.parentCreate()
        element.src = this.src
        element.alt = this.alt

        return element
    }
}

// const newImage = new ImageConstructor('img', 'https://i.pinimg.com/originals/a7/91/6a/a7916a76d838a86a0bc97d0aa0643692.jpg', '')
const header2 = new TextTagConstructor('h2', '')
header2.getApiKey('123')
const headerElement = header2.create()
header2.html(headerElement, 'Title')
header2.setAttributes(headerElement, [{key: 'id', value: 'h1'}, {key: 'style', value: 'color: red'}])
header2.add(headerElement)