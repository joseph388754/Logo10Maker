const inquire = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle, Ellipse} = require('./lib/shapes.js');

const prompts = [
    {
        type: "list",
        name: "shape",
        message: "What shape would you like to create?",
        choices: ["Triangle", "Square", "Circle", "Ellipse"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be?"
    },
    {
        type: "input",
        name: "fontColors",
        message: "What color would you like your font to be?"
    },
    {
        type: "input",
        name: "text",
        message:"Pick 3 Letters for your Logo",
    }];

    function shapesRender (shape){
        if (shape === "Triangle"){
            return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
        }
        else if (shape === "Square"){
            return `<rect x="50" y="50" width ="100" height ="100" fill="${this.color}"/>`
        }
        else if (shape === "Circle"){
            return `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`
        }
        else if (shape === "Ellipse"){
            return `<ellipse cx="125" cy="125" rx="55" ry="15" fill="${this.color}"/>`
        }
    }

    function createSVG(data) {
        return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapesRender(data.shape, data.shapeColor)}
        <text x="50" y="50" font-size="30" text-anchor="middle" fill="${data.fontColor}">${data.text}</text>
        </svg>`
        
        
    };
    
    function writeToFile(flName, data) {
        const flData = createSVG(data);
        fs.writeFile(flName, flData, (error) => error ? console.log(error) : console.log('LOGO CREATED!!'));
    };
    
    function init() {
        inquire.prompt(prompts)
        .then((answers) => {
            writeToFile('mylogo.svg', answers)
        });
    };
    init();
