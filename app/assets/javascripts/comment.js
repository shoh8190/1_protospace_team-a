$(function(){
  var commentList = $(".comment-list ul");
  function appendComment(comment){
    var html = `<li>${comment.body}</li>`
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
      // console.log(data);
      appendComment(data);
    })
    .fail(function(){
      console.log("失敗しました");
    })
  })
})
