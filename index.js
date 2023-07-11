// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    set diameter(newDiameter) {
        if (newDiameter > 0) {
            this.radius = newDiameter / 2;
        }
        else {
            console.error('Diameter must be greater than zero!');
        }
    }

    set circumference(newCircumference) {
        if (newCircumference > 0) {
            this.radius = newCircumference / (2 * Math.PI);
        }
        else {
            console.error('Circumference must be greater than zero!');
        }
    }

    set area(newArea) {
        if (newArea > 0) {
            this.radius = Math.sqrt(newArea / Math.PI);
        }
        else {
            console.error('Area must be greater than zero!');
        }
    }
}