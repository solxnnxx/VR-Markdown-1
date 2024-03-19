
var PageLoc = "./Pages"

var SceneData = $("a-scene")
var scene     = SceneData[0]
var MainScene = $("#MainScene")[0]

let PathName = location.pathname.split("/")
PathName = (PathName[PathName.length - 1].split(".")[0] || "index").toUpperCase()
console.log(PathName)

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function UpdateNavigator() {
    await sleep(100)
  
    console.log("navigation update")
    $("#cur_camera")[0].emit("end_trans")
  }

if(MainScene) MainScene.addEventListener("templaterendered", UpdateNavigator);


async function SwitchArea(Name) {
    let ok = document.querySelectorAll(".field")
    ok.forEach(function(val) { $(val).remove() })
    console.log("Changing To Area => " + Name)
  
    console.log("start")
    $("#cur_camera")[0].emit("start_trans")
    await sleep(500)
  
    MainScene.attributes.template.nodeValue = "src: " + PageLoc + "/" + PathName + "/" + Name + ".html"
}

AFRAME.registerComponent('scene-init', {
    schema: {type: 'string', default: 'default'},
    init: async function() {
      console.log("init")
      this.SceneName = this.data
      console.log(this.SceneName)
  
      SwitchArea(this.SceneName)
    }
  })  

AFRAME.registerComponent('scene-changer', {
    schema: {type: 'int', default: 0},
  
    init: async function() {
      this.onClick = this.onClick.bind(this)
      this.SceneName = this.data["name"]

      this.el.addEventListener("click", this.onClick)
    },
  
    onClick: async function() {
      SwitchArea(this.SceneName)
    }
  })