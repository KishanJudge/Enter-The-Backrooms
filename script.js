const wall = document.getElementById("wall");
const ctx = wall.getContext('2d'); //webgl(2) for 3D

const numCols = wall.width;
const colWidth = wall.width / numCols;


for (let i = 0; i < numCols; i++) {
    const x = i * colWidth;
    const distance =  1 + (i / numCols) * 9;
    const sliceHeight = wall.height / distance;
    //const sliceHeight = wall.height * (1 - (i / numCols));
    const wallTop = (wall.height - sliceHeight) / 2;

    ctx.fillStyle = "#d9d9cf";
    ctx.fillRect(x, 0, colWidth, wallTop);
    
    //ctx.fillRect(x, )
    if (i % 2 == 0){
        ctx.fillStyle = '#d8cf88';
    }
    else {
        ctx.fillStyle = '#b7ab63';
    }
    /*
    gpt
    #d9d9cf
    #6b5f4a

    #d8cf88
    #b7ab63

    og
    #e8d87a
    #8b7e3c
    */

    ctx.fillRect(x, wallTop, colWidth, sliceHeight); //x, y, w, h. extends right by w and down by h

    ctx.fillStyle = "#6b5f4a";
    ctx.fillRect(x, wallTop + sliceHeight, colWidth, wall.height - (wallTop + sliceHeight));
}


/*
- Context object (ctx) — all drawing methods live here (fillRect, strokeRect, arc, lineTo, drawImage, fillText, etc.). 2d is the common one; webgl/webgl2 expose GPU-based 3D drawing with shaders.
- Immediate mode — there's no retained scene graph. To change or animate anything, you clear (ctx.clearRect) and redraw the whole frame.
- Coordinate system — origin (0,0) is top-left, x right, y down. You can transform it with ctx.translate, ctx.rotate, ctx.scale.
- State stack — ctx.save() / ctx.restore() push/pop the current style/transform state so you can tweak things temporarily without side effects.
- Paths — beginPath(), then moveTo/lineTo/arc/bezierCurveTo, then fill() or stroke() to actually render it.
- Images — ctx.drawImage(img, x, y) (also supports cropping/scaling variants) lets you composite images, sprites, or even another canvas/video frame.
- Animation — typically driven with requestAnimationFrame(loop), which calls your draw function ~60x/sec in sync with the browser's repaint.
- Pixel access — ctx.getImageData/putImageData let you read/write raw RGBA pixel arrays directly, useful for effects or image processing.
- Resolution vs. display size — the width/height attributes set the actual pixel buffer; CSS width/height just stretches it. For crisp rendering on high-DPI screens, you scale the buffer by devicePixelRatio and then ctx.scale() accordingly.
*/