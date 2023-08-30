const { Circle, Square, Triangle, Ellipse } = require('./shapes');

describe('Triangle', () => {
    it('will render black triangle', () => {
        const shape = new Triangle();
        shape.setColor('black');
        expect(shape.render()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill="black"/>`);
    });
});

describe('Square', () => {
    it('will render blue square', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<rect width="100" height="100" width ="100" height = "100" fill="blue"/>`);
    });
});


describe('Circle', () => {
    it('will render a yellow circle', () => {
        const shape = new Circle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="50" fill="yellow"/>`);
    });
});

describe('Ellipse', () => {
    it('will render a green ellipse', () => {
        const shape = new Ellipse();
        shape.setColor('green');
        expect(shape.render()).toEqual(`<ellipse cx="50" cy="50" rx="50" ry="25" fill="green"/>`);
    });
});

