
var SceneData = $("a-scene")
var scene     = SceneData[0]
var MainScene = $("#MainScene")[0]

let PathName = location.pathname.split("/")
PathName = (PathName[PathName.length - 1].split(".")[0] || "index").toUpperCase()

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function UpdateNavigator() {
    await sleep(100)
  
    console.log("navigation update")
    $("#cur_camera")[0].emit("end_trans")
  }

async function SwitchArea(Name) {
    let ok = document.querySelectorAll(".field")
    ok.forEach(function(val) { $(val).remove() })
    console.log("Changing To Area => " + Name)
  
    $("#cur_camera")[0].emit("start_trans")
    await sleep(500)
  
    MainScene.attributes.template.nodeValue = "src: " + "./resources/pages/" + PathName + "/" + Name + ".html"
}