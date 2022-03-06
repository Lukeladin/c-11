var jardim,coelho;
var imagemdojardim,imagemdocoelho, macaImg, laranjaImg;
var maca, laranja;
var selecionarSprite;
var grupoMaca, grupoLaranja;

function preload(){
  imagemdojardim = loadImage("garden.png");
  imagemdocoelho = loadImage("rabbit.png");
  laranjaImg = loadImage("orangeLeaf.png");
  macaImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Fundo em movimento
  jardim=createSprite(200,200);
  jardim.addImage(imagemdojardim);

  // Criando o menino corredor
  coelho = createSprite(180,340,30,30);
  coelho.scale =0.09;
  coelho.addImage(imagemdocoelho);
  grupoMaca = new Group();
  grupoLaranja = new Group();
}


function draw() {
  background(0);
  selecionarSprite = Math.round(random(1,2));
  bordas= createEdgeSprites();
  coelho.collide(bordas);
  coelho.x = mouseX;

  if(frameCount % 80 == 0){
    if(selecionarSprite === 1){
      criarMacas();
    }
    else if(selecionarSprite === 2){
      criarLaranjas();
    }
  }
  if(coelho.isTouching(grupoLaranja)){
    grupoLaranja.destroyEach();
  }
  if(coelho.isTouching(grupoMaca)){
    grupoMaca.destroyEach();
  }
  drawSprites();
}

function criarMacas(){
  maca = createSprite(random(50,350),40,10,10);
  maca.addImage(macaImg);
  maca.scale = 0.1;
  maca.velocityY = 10;
  maca.lifetime = 100;
  grupoMaca.add(maca);
}

function criarLaranjas(){
  laranja = createSprite(random(50,350),40,10,10);
  laranja.addImage(laranjaImg);
  laranja.scale = 0.1;
  laranja.velocityY = 10;
  laranja.lifetime = 100;
  grupoLaranja.add(laranja);
}