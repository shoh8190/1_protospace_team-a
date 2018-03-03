//メインサムネイルの投稿機能
$(document).on('turbolinks:load',function() {
  $('.cover-image-upload').on('change','input[type="file"]', function(e) {
    var file = e.target.files[0],
    reader = new FileReader();
    $preview = $(".cover-image-upload");
    if (file.type.indexOf("image") < 0) {
      return false
    }
    reader.onload = (function(file) {
      return function(e) {
        $preview.css('background-image','none');
        $preview.empty()
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
$(document).on('turbolinks:load',function() {
  $('.image-upload#0').on('change', 'input[type="file"]', function(e) {
    var file = e.target.files[0],
      reader = new FileReader();
    $preview = $(".image-upload#0");
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

$(document).on('turbolinks:load',function() {
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

$(document).on('turbolinks:load',function() {
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
