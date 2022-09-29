//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33D7FF);

var loader = new THREE.TextureLoader();
loader.load(
    '../imagenes/campo.png',
    function(texture) {
        scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



//Robot
const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('./imagenes/robot/scene.gltf',
    (gltf) => {
        var loaderObjeto = gltf.scene;
        loaderObjeto.scale.set(10, 10, 10);
        const Directionallight = new THREE.AmbientLight(0xFFFFFFF);
        scene.add(Directionallight);
        console.log('carga completa');
        scene.add(loaderObjeto);
        loaderObjeto.position.y = -58;
        loaderObjeto.position.x = 0;
    const controls1 = new THREE.DragControls( [loaderObjeto], camera, renderer.domElement );

        
    }, () => {
        console.log('cargando');
    }, () => {
        console.log('error')
    }
);
//muñeca
const gltfLoader1 = new THREE.GLTFLoader();

gltfLoader1.load('../imagenes/dani/scene.gltf', 
(gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(0.6,0.6,0.6)
    console.log('carga completa');
    scene.add(loaderObjeto2);
    const directionalLight2 = new THREE.AmbientLight(0xFFFFFF)
    scene.add(directionalLight2)
    loaderObjeto2.position.x = 2
    loaderObjeto2.position.y = -60
    const controls2 = new THREE.DragControls( [loaderObjeto2], camera, renderer.domElement );
    
    
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);


//muñeca2
const gltfLoader3 = new THREE.GLTFLoader();

gltfLoader3.load('../imagenes/persona_styled_kate (1)/scene.gltf', 
(gltf) =>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(0.05,0.05,0.05)
    console.log('carga completa');
    scene.add(loaderObjeto3);
    const directionalLight3 = new THREE.AmbientLight(0xFFFFFF)
    scene.add(directionalLight3)
    loaderObjeto3.position.x = 28
    loaderObjeto3.position.y = -60
    const controls3 = new THREE.DragControls( [loaderObjeto3], camera, renderer.domElement );
    
    
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);
 

//muñeca3
const gltfLoader4 = new THREE.GLTFLoader();

gltfLoader4.load('../imagenes/venti_persona_q/scene.gltf', 
(gltf) =>{
    var loaderObjeto4 = gltf.scene;
    loaderObjeto4.scale.set(0.5,0.5,0.5)
    console.log('carga completa');
    scene.add(loaderObjeto4);
    const directionalLight4 = new THREE.AmbientLight(0xFFFFFF)
    scene.add(directionalLight4)
    loaderObjeto4.position.x = -28
    loaderObjeto4.position.y = -60
    const controls4 = new THREE.DragControls( [loaderObjeto4], camera, renderer.domElement );
    
    
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);


camera.position.z = 90

//animacion
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();