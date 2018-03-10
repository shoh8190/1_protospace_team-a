$(function(){
  var commentList = $(".comment-list");
  function appendComment(comment){
    var html = `<div class='media'>
                  <div class='media-left'>/uploads/noimage.png</div>
                  <div class='media-body'>
                    <h4 class='media-heading' id='top-aligned-media'>${comment.name}<a class='anchorjs-link' href='#top-aligned-media'><span class='anchorjs-icon'></span></a>
                    </h4><p>${comment.body}</p>
                  </div>
                </div>`
    commentList.append(html);
  }
  $(".comment-submit").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/comments';
    $.ajax({
      type: "POST",
      url: href,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      appendComment(data);
      $(".comment-input").val("");
    })
    .fail(function(){
      console.log("失敗しました");
    })
  })
})
