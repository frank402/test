﻿#pragma strict
 
static var ShowGUI = false;
 
function Start () {
 
ShowGUI = true;
 
}
 
function Update () {
 
//The 'ShowGUI' enables you do either view or not view the actual GUI
 
if(ShowGUI == true ){
 
guiTexture.enabled = true;
 
}else{
 
guiTexture.enabled = false;
 
}
 
if(ShowGUI == true){
 
if(Input.touchCount > 0 ){
 
for(var i : int = 0; i < Input.touchCount; i++){
 
var touch : Touch = Input.GetTouch(i);
 
if(touch.phase == TouchPhase.Began &&
this.guiTexture.HitTest(touch.position)){
 
//This space is where the action happens when you touch your custom GUI button on
//your device.
Debug.Log("touch");
 
}
}
}else{
 //Debug.Log("touch");
//Stops Action
 
}
}
}