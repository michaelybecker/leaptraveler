"use strict";$(function(){function e(e,t){return e+": "+t+"<br>"}function t(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function a(){var e=Math.round(5e3*Math.random())-2501;return 0===e?a():e}function n(){E=new THREE.Scene,E.fog=new THREE.FogExp2(14010344,1e-4),h=new THREE.PerspectiveCamera(45,H/c,.1,5e4),l=new THREE.WebGLRenderer({antialias:!0,alpha:!1}),l.setSize(H,c),l.setClearColor(2236962),document.getElementById("three").appendChild(l.domElement);var e=new THREE.HemisphereLight(16777215,16777215,.6);e.color.setHSL(.6,1,.6),e.groundColor.setHSL(.095,1,.75),e.position.set(0,30,0),E.add(e);for(var t="./images/skybox/purplenebula_",n=["right","left","top","top","back","front"],o=".jpg",i=new THREE.BoxGeometry(1e4,1e4,1e4),r=[],s=0;6>s;s++)r.push(new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture(t+n[s]+o),side:THREE.DoubleSide}));var d=new THREE.MeshFaceMaterial(r),p=new THREE.Mesh(i,d);E.add(p),E.add(w[0]),E.add(w[1]),E.add(w[2]);for(var m="./images/bumps/",u=0;100>u;u++){var R=new THREE.SphereGeometry(Math.floor(88*Math.random()+3),30,30),T=new THREE.MeshPhongMaterial({bumpMap:new THREE.ImageUtils.loadTexture(m+Math.floor(10*Math.random())+".jpg")});M[u]=new THREE.Mesh(R,T),T.bumpMap.minFilter=THREE.LinearFilter,T.opacity=.5,M[u].position.set(a(),a(),a()),M[u].material.color.setRGB(Math.random(),Math.random(),Math.random()),w[Math.floor(2*Math.random())].add(M[u])}}function o(e){if(requestAnimationFrame(o),void 0!==s&&s.grabStrength<.5){var t=s.yaw(),a=s.pitch();s.palmPosition[2]>200?h.translateZ(u):s.palmPosition[2]<100&&s.palmPosition[2]>0?h.translateZ(-u):s.palmPosition[2]<0&&h.translateZ(3*-u),s.palmPosition[1]>250?h.translateY(u):s.palmPosition[1]<150&&h.translateY(-u),-.08>t?h.rotation.y+=90*Math.PI/5e4:t>.08&&(h.rotation.y-=90*Math.PI/5e4),-.4>a?h.rotation.x-=90*Math.PI/1e5:a>.4&&(h.rotation.x+=90*Math.PI/1e5)}w[0].rotation.y+=2e-4,w[0].rotation.x+=1e-4,w[1].rotation.y-=4e-4,w[1].rotation.x+=1e-4,w[2].rotation.y-=4e-4,w[2].rotation.x-=2e-4,console.log(h.position),l.render(E,h)}var i="",r="",s,d={enableGestures:!0};Leap.loop(d,function(t){i=e("frame_id",t.id),i+="<br>";for(var a=0;a<t.hands.length;a++)s=t.hands[a],r=e("hand_type",s.type),r+=e("hand posish",s.palmPosition),r+="<br>",i+=r});var l,h,E,p,m,w={0:new THREE.Object3D,1:new THREE.Object3D,2:new THREE.Object3D},M=[],u=2,H=window.innerWidth,c=window.innerHeight;window.addEventListener("resize",t,!1),n(),o()});