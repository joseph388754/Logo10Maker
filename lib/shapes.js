// define the basic shape class
class Shape {
    constructor(){
        this.color ="";
    }

    setColor(color){
        this.color = color;
    }
}

class Triangle extends Shape {
    render(){
        // equilateral triangle
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render(){
        return `<rect x="50" y="50" width ="100" height = "100" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="150" r="150" fill="${this.color}"/>`
    }
}

class Ellipse extends Shape {
    render(){
        return `<ellipse cx="75" cy="75" rx="20" ry="5" fill="${this.color}"/>`
    }
}

module.exports = {Triangle, Square, Circle, Ellipse};