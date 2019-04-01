$(document).ready(function(){ 
    var $canvas = $("canvas#paint");
    
    $canvas.on('mousedown', handleMouseStart);
    $canvas.on('mousemove', handleMouseDraw);
    $canvas.on('mouseup', handleMouseEnd);
    $canvas.on('contextmenu', handleColorChange);
    $canvas.on('wheel', handleScroll)
    
    var mouseDown = false;
    function handleMouseStart(e){
        e.preventDefault();
        mouseDown = true;
        drawPoint(getMousePos(e));
    }
    function handleMouseDraw(e){
        e.preventDefault();
        if(mouseDown) drawPoint(getMousePos(e));  
    }
    function handleMouseEnd(e){
        e.preventDefault();
        if(mouseDown){    
            drawPoint(getMousePos(e))
            touchEnd();
            mouseDown = false;
        }
    }

    function handleColorChange(e){
        e.preventDefault();
        changeColor();
    }

    function handleScroll(e){
        e.preventDefault();
        if(e.originalEvent.deltaY < 0)  changePenWidth(1);
        else                            changePenWidth(-1);
    }

});
