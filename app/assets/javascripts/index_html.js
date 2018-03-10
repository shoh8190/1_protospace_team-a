//メインサムネイルの投稿機能
$(function(){
  $('.new-main-image').on('change','input[type="file"]', function(e) {
    var file = e.target.files[0],
    reader = new FileReader();
    $preview = $(".new-main-image");
    if (file.type.indexOf("image") < 0) {
      return false
    }
    reader.onload = (function(file) {
      return function(e) {
        $preview.css('background-image','none');
        $preview.find('.new-image').remove();
        $preview.append($('<img>').attr({
          src: e.target.result,
          class: "preview",
          width: "730px",
          height: "500px",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});

//サブのサムネイルの投稿機能
$(function(){
  $('.new-sub-image#0').on('change', 'input[type="file"]', function(e) {
    var file = e.target.files[0],
      reader = new FileReader();
    $preview = $(".new-sub-image#0");
    t = this;
    if (file.type.indexOf("image") < 0) {
      return false
    }

    reader.onload = (function(file) {
      return function(e) {
        $preview.css('background-image','none');
        $preview.find('.sub-image#0').remove();
        $preview.append($('<img>').attr({
          src: e.target.result,
          class: "preview",
          width: "200px",
          height: "200px",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});

$(function(){
  $('.image-upload#1').on('change', 'input[type="file"]', function(e) {
    var file = e.target.files[0],
      reader = new FileReader();
    $preview = $(".image-upload#1");
    t = this;
    if (file.type.indexOf("image") < 0) {
      return false
    }

    reader.onload = (function(file) {
      return function(e) {
        $preview.css('background-image','none');
        $preview.append($('<img>').attr({
          src: e.target.result,
          class: "preview",
          width: "200px",
          height: "200px",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});

$(function(){
  $('.image-upload#2').on('change', 'input[type="file"]', function(e) {
    var file = e.target.files[0],
      reader = new FileReader();
    $preview = $(".image-upload#2");
    t = this;
    if (file.type.indexOf("image") < 0) {
      return false
    }


    reader.onload = (function(file) {
      return function(e) {
        $preview.css('background-image','none');
        $preview.append($('<img>').attr({
          src: e.target.result,
          class: "preview",
          width: "200px",
          height: "200px",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});
