//共通機能
function clear_preview($element){
  if ($element.find(".preview")){
    $element.find(".preview").remove();
  };
  if ($element.find(".sub_image")){
    $element.find(".sub_image").remove();
  };
};

function load_preview(ele1, ele2){
  $(ele1).on("change","input[type="file"]", function(e) {
    console.log($(ele1));
    var file = e.target.files[0],
    reader = new FileReader();
    $preview = $(ele1);
    if (file.type.indexOf("image") < 0) {
      return false
    }
    reader.onload = (function(file) {
      return function(e) {
        clear_preview($preview);
        $preview.css("background-image","none");
        $preview.find(ele2).remove();
        $preview.append($("<img>").attr({
          src: e.target.result,
          class: "preview",
          width: "100%",
          height: "100%",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
};

$(function(){

  var sub_thum_size = "200px";

  //[new]メインサムネイル変更時
  load_preview(".new-main-image", ".new-image");

  //[new]サブサムネイル変更時
  for (var i = 0; i < 3; i++) {
    load_preview(".new-sub-image#" + i, ".sub-image#" + i);
  }

  //[edit]メインサムネイル変更時
  load_preview(".edit-main-image", "#main_preview");

  //[edit]サブサムネイル変更時
  for (var i = 1; i < 4; i++) {
    load_preview(".edit-sub-image#" + i, ".sub-image#" + i);
  }

});
