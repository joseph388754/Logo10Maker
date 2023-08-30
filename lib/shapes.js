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
        return `<rect width="100" height="100" width ="100" height = "100" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="50" cy="50" r="50" fill="${this.color}"/>`
    }
}

class Ellipse extends Shape {
    render(){
        return `<ellipse cx="50" cy="50" rx="50" ry="25" fill="${this.color}"/>`
    }
}

module.exports = {Triangle, Square, Circle, Ellipse};