function buildTeapots(teaPots = []){
    for(i=0;i<100;i++){
        teaPots[i]= new THREE.Mesh( new THREE.TeapotGeometry(4),
        new THREE.MeshPhongMaterial({
        color: 0xff1234
        }));
    }
        //0~9
        for (i=0;i<10;i++){
            teaPots[i].position.set (-90, 0, 90-(i*20));
            scene.add(teaPots[i]);
        }
        //10~19
        for (i=10;i<20;i++){
            teaPots[i].position.set (-70, 0, 290-(i*20));
            scene.add(teaPots[i]);
        }
        //20~29
        for (i=20;i<30;i++){
            teaPots[i].position.set (-50, 0, 490-(i*20));
            scene.add(teaPots[i]);
        }
        //30~39
        for (i=30;i<40;i++){
            teaPots[i].position.set (-30, 0, 690-(i*20));
            scene.add(teaPots[i]);
        }
        //40~49
        for (i=40;i<50;i++){
            teaPots[i].position.set (-10, 0, 890-(i*20));
            scene.add(teaPots[i]);
        }
        //50~59
        for (i=50;i<60;i++){
            teaPots[i].position.set (10, 0, 1090-(i*20));
            scene.add(teaPots[i]);
        }
        //60~69
        for (i=60;i<70;i++){
            teaPots[i].position.set (30, 0, 1290-(i*20));
            scene.add(teaPots[i]);
        }
        //70~79
        for (i=70;i<80;i++){
            teaPots[i].position.set (50, 0, 1490-(i*20));
            scene.add(teaPots[i]);
        }
        //80~89
        for (i=80;i<90;i++){
            teaPots[i].position.set (70, 0, 1690-(i*20));
            scene.add(teaPots[i]);
        }
        //90~99
        for (i=90;i<100;i++){
            teaPots[i].position.set (90, 0, 1890-(i*20));
            scene.add(teaPots[i]);
        }

}

function teapotsRot(tp = []){
    for (i=0;i<100;i++){
        tp[i].rotation.y = 1.3*angle;
    }

}