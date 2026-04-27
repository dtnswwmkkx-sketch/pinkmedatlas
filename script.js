function show(id){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

/* drag microscope */
let slide=document.getElementById('slide');
let pos={x:0,y:0},drag=false;

document.getElementById('stage').onmousedown=()=>drag=true;
document.onmouseup=()=>drag=false;
document.onmousemove=(e)=>{
if(drag){
pos.x+=e.movementX;
pos.y+=e.movementY;
slide.style.transform=`translate(${pos.x}px,${pos.y}px)`;
}
};

/* game */
let data=[
{img:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Giardia_lamblia_SEM.jpg",ans:"Giardia"},
{img:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Entamoeba_histolytica.jpg",ans:"Entamoeba"}
];
let i=0;

function loadGame(){
let d=data[i];
document.getElementById("gameBox").innerHTML=
`<img src="${d.img}" width="200"><br>
<button onclick="check('Giardia')">Giardia</button>
<button onclick="check('Entamoeba')">Entamoeba</button>`;
}

function check(a){
alert(a===data[i].ans?"Correct":"Wrong");
i=(i+1)%data.length;
loadGame();
}

loadGame();
