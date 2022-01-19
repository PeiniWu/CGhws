function buildTeapots(mesh = []){
    let meshMaterial = new THREE.ShaderMaterial({
        uniforms: {
        lightpos: {type: 'v3', value: new THREE.Vector3()}
        },
        vertexShader: document.getElementById('myVertexShader').textContent,
        fragmentShader: document.getElementById('myFragmentShader').textContent
    });
    var geometry = new THREE.TeapotGeometry(6);
                for (i=0;i<100;i++){
                    mesh[i] = new THREE.Mesh(geometry, meshMaterial);
                }
                //0~9
                for (i=0;i<10;i++){
                    mesh[i].position.set (-90, 0, 90-(i*20));
                    scene.add(mesh[i]);
                }
                //10~19
                for (i=10;i<20;i++){
                    mesh[i].position.set (-70, 0, 290-(i*20));
                    scene.add(mesh[i]);
                }
                //20~29
                for (i=20;i<30;i++){
                    mesh[i].position.set (-50, 0, 490-(i*20));
                    scene.add(mesh[i]);
                }
                //30~39
                for (i=30;i<40;i++){
                    mesh[i].position.set (-30, 0, 690-(i*20));
                    scene.add(mesh[i]);
                }
                //40~49
                for (i=40;i<50;i++){
                    mesh[i].position.set (-10, 0, 890-(i*20));
                    scene.add(mesh[i]);
                }
                //50~59
                for (i=50;i<60;i++){
                    mesh[i].position.set (10, 0, 1090-(i*20));
                    scene.add(mesh[i]);
                }
                //60~69
                for (i=60;i<70;i++){
                    mesh[i].position.set (30, 0, 1290-(i*20));
                    scene.add(mesh[i]);
                }
                //70~79
                for (i=70;i<80;i++){
                    mesh[i].position.set (50, 0, 1490-(i*20));
                    scene.add(mesh[i]);
                }
                //80~89
                for (i=80;i<90;i++){
                    mesh[i].position.set (70, 0, 1690-(i*20));
                    scene.add(mesh[i]);
                }
                //90~99
                for (i=90;i<100;i++){
                    mesh[i].position.set (90, 0, 1890-(i*20));
                    scene.add(mesh[i]);
                }

}
function teapotsRot(mesh = [],lightPos){
    lightPos.position.set(50 * Math.cos(angle), 80, 50 * Math.sin(angle));    
    for (i=0;i<100;i++){
        mesh[i].material.uniforms.lightpos.value.copy (pointLight.position);
        mesh[i].rotation.y = 1.3*angle;
    }
}