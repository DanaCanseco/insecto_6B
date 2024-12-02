canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "pasto.jpg";

insecto_image = "insecto.jpg";

insecto_x = 10;
insecto_y = 10;

//Crea la función "add()"
 function add(){
background_imgTag= new Image();     //Define la variable con una nueva imagen
background_imgTag.onload = uploadBackground;     // Define una función para cargar esta variable
background_imgTag.src = background_image;     // Carga la imagen

insecto_imgTag= new Image();     //Define la variable con una nueva imagen
insecto_imgTag.onload = uploadinsecto;     // Define una función para cargar esta variable
insecto_imgTag.src=insecto_image;     // Carga la imagen
}
//Crea una función "uploadBackground()".
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);     //Dibuja la imagen del fondo
}

//Crea una función "uploadrover()".
function uploadinsecto(){
    ctx.drawImage(insecto_imgTag, insecto_x, insecto_y, 100, 90)     //Dibuja la imagen del explorador
}



window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
    window.addEventListener("keydown", my_keydown);
		
    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
    
        }
        if(keyPressed == '40')
        {
            down();
        }
        
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed == '39')
        {
            right();
        }
    }
}

function up()
{
if(insecto_y >=0)//Este es el límite supeior del canva
{
    console.log("hols",insecto_y)
    insecto_y = insecto_y - 5;//Acá se actualiza la coordenada en y
    uploadBackground();//Se actualiza la imagen del fondo del canva
    uploadinsecto();//Se actualiza la imagen del personaje
}
}
function down()
{
	if(insecto_y <=500)//Es el limite inferior del canva
    {
        insecto_y =insecto_y+ 5;
        uploadBackground();
        uploadinsecto();
    }
}
function right(){
    if(insecto_x >=0){
insecto_x = insecto_x + 5;
uploadBackground ();
uploadinsecto ();
    }
	
}
function left(){
    if(insecto_x <=500){
        insecto_x = insecto_x - 5;
        uploadBackground ();
        uploadinsecto ();
}

}
