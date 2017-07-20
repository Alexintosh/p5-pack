export function Sketch(s) {
    let x, y, backgroundColor;

    const width = 500;
    const height = 500;
    let off = 0.0;

    s.setup = () => {
        s.createCanvas(width, height);
        backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

        x = s.random(width);
        y = height / 2;
    };

    s.draw = () => {        
        off = off + .01;
        backgroundColor = s.color(( s.noise(off) * 255 ), ( s.noise(off) * 255 ), ( s.noise(off) * 255 ));
        s.background(backgroundColor);
        s.fill(s.color(255, 0, 0));
        s.ellipse(x, y, 100, 100);

        x = (x + 1) % width;
    };

    s.mousePressed = () => {
        backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
    };

}
