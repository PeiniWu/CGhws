$('#toggle').click(function() {
	flameOff = !flameOff;
  if (flameOff) {
  	clearInterval (flameInterval);
    flameMesh.material.visible = false;
  } else {
   	flameInterval = setInterval (textureAnimate, 100);
    flameMesh.material.visible = true;
  }
});


var camera, scene, renderer;
var flameMesh,flameMesh1,flameMesh2,flameMesh3,flameMesh4,flameMesh5;
var candle,candle1,candle2,candle3,candle4,candle5;
var flameOff = false;

// global variable: count
var count;

init();
animate();

function makeCandle() {
	var candle = new THREE.Group();
	let body = new THREE.Mesh (new THREE.CylinderGeometry(5,5,20,6), new THREE.MeshNormalMaterial());
	
	//let body2 = new THREE.Mesh (new THREE.CylinderGeometry(5,5,20,8), new THREE.MeshNormalMaterial());
	////let body3 = new THREE.Mesh (new THREE.CylinderGeometry(5,5,20,8), new THREE.MeshNormalMaterial());
	//let body4 = new THREE.Mesh (new THREE.CylinderGeometry(5,5,20,8), new THREE.MeshNormalMaterial());
	//let body5 = new THREE.Mesh (new THREE.CylinderGeometry(5,5,20,8), new THREE.MeshNormalMaterial());
	//let body6 = new THREE.Mesh (new THREE.CylinderGeometry(5,5,20,8), new THREE.MeshNormalMaterial());
	body.position.y = 10;
	candle.add (body);
	return candle;
}

function makeFlame2() {
  //var flameMesh;
  
  let loader = new THREE.TextureLoader();
    // load a resource
  loader.load(
    // URL ...
    'https://i.imgur.com/M2tr5Tm.png?1',
    // onLoad ...
    function(texture) {
      // do something with the texture
      // Plane with default texture coordinates [0,1]x[0,1]
      var texMat = new THREE.MeshBasicMaterial({
        map: texture,
        alphaTest:0.5
      });
		flameMesh = new THREE.Mesh(new THREE.PlaneGeometry(30,30), texMat);
		flameMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(30,30), texMat);
		flameMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(30,30), texMat);
		flameMesh3 = new THREE.Mesh(new THREE.PlaneGeometry(30,30), texMat);
		flameMesh4 = new THREE.Mesh(new THREE.PlaneGeometry(30,30), texMat);
		flameMesh5 = new THREE.Mesh(new THREE.PlaneGeometry(30,30), texMat);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    	texture.repeat.set (1/3,1/3);
      texture.offset.set (0,2/3);
	  flameMesh.position.y = 28;
	  flameMesh1.position.y = 28;
	  flameMesh2.position.y = 28;
	  flameMesh3.position.y = 28;
	  flameMesh4.position.y = 28;
	  flameMesh5.position.y = 28;
      //scene.add (flameMesh);
      candle= makeCandle();
      candle.add (flameMesh);
      scene.add (candle);
	  candle1= makeCandle();
      candle1.add (flameMesh1);
	  candle1.position.x=20;
	  candle1.position.z = 10;
      scene.add (candle1);
	  candle2= makeCandle();
      candle2.add (flameMesh2);
	  candle2.position.x=-10;
	  candle2.position.z = 20;
      scene.add (candle2);
	  candle3= makeCandle();
      candle3.add (flameMesh3);
	  candle3.position.x=-20;
	  candle3.position.z = 0;
      scene.add (candle3);
	  candle4= makeCandle();
      candle4.add (flameMesh4);
	  candle4.position.x=20;
	  candle4.position.z = -10;
      scene.add (candle4);
	  candle5= makeCandle();
      candle5.add (flameMesh5);
	  candle5.position.x=0;
	  candle5.position.z = -25;
      scene.add (candle5);
      
    },
		undefined, // onProgress
    // onError ...
    function(xhr) {
      console.log('An error happened');
    }
  );

}
function onMouseDown(event) {
	event.preventDefault();
  event.clientX
  let mouseY = -(event.clientY / window.innerHeight) * 2 + 1;	
  if(event.clientX===candle.position.z){
	  flameMesh.material.visible = false;
  }
  
}
function init() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
	renderer.setClearColor (0x888888);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, 1, 1, 10000);
  camera.position.z = 100;

	let controls = new THREE.OrbitControls (camera, renderer.domElement);
 	scene.add (new THREE.GridHelper(200,20,'red','white'));
  ////////////////////////////////////////////////////////////
  makeFlame2();
  window.addEventListener('resize', onWindowResize, false);
   document.addEventListener('pointerdown', onMouseDown, false);
  flameInterval = setInterval (textureAnimate, 100);
  
  count = 0;
}
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  candle.lookAt (camera.position.x, 0, camera.position.z);
  
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}


function textureAnimate() {

	if (flameMesh !== undefined) {
    var texture = flameMesh.material.map;
  console.log (`${count}: [${texture.offset.x},${texture.offset.y}]`);
    texture.offset.x += 1/3;
 
 		if (count % 3 === 0) {
    	texture.offset.y -= 1/3;
    }
    count++;
  }
}

