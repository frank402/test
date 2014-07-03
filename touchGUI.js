#pragma strict

function Start () {

}

function Update () {
if(Input.touchCount > 0 ){
for (var touch : Touch in Input.touches){
if(guiTexture.HitTest(touch.position)){

Debug.Log("touch");
	}
}
}
}  