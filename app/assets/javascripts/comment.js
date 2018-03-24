$(function(){
  var commentList = $(".comment-list");
  function appendComment(comment){
    var html = '<div class="media">'
             +   '<div class="media-left">/uploads/noimage.png</div>'
             +     '<div class="media-body">'
             +      '<h4 class="media-heading" id="top-aligned-media">'
             +       comment.name
             +      '<a class="anchorjs-link" href="#top-aligned-media"><span class="anchorjs-icon"></span></a>'
             +      '</h4><p>'
             +       comment.body
             +   '</div>'
             + '</div>'
    commentList.append(html);
  }

  function addCommentCount(){
    cnum = parseInt($(".comments-total span").text()) + 1
    $(".comments-total span").html(cnum);
  }

  function deleteCommentCount(){
    cnum = parseInt($(".comments-total span").text()) - 1
    $(".comments-total span").html(cnum);
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
      addCommentCount();
    })
    .fail(function(){
      console.log("失敗しました");
    })
  })


  //deleteが押された時のイベント
  $(".media-action-delete").on("click",function(e){
    //aタグクリック時の遷移をキャンセル
    e.preventDefault();
    var deleteComment = $(this);
    //削除するコメントのidを取得
    var commentId = $(this).parent().parent().data("comments-id");
    //リクエスト用のurlを取得
    var href = window.location.href + '/comments/' + commentId;
    $.ajax({
      type: "DELETE",
      url: href,
      data: commentId,
    })
    .done(function(comment){
      //.media-action-deleteの親の親要素を削除
      $(deleteComment).parent().parent().remove();
      deleteCommentCount()
      alert("コメントを削除しました。");
    })
    .fail(function(){
      alert("コメントの削除に失敗しました。");
    })
  })
})
