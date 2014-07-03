#pragma strict

function Start () {

}

function Update () {
if(this.guiTexture.HitTest(Input.mousePosition)){
	if(Input.touches)
	{
Debug.Log("test2");
	}
}
}