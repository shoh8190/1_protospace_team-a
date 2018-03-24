$(function(){
  var commentList = $(".comment-list");
  function appendComment(comment){
    var html = '<div class="media" data-comments-id='
             +  comment.id
             +  '>'
             +   '<div class="media-left">/uploads/noimage.png</div>'
             +     '<div class="media-body">'
             +      '<h4 class="media-heading" id="top-aligned-media">'
             +       comment.name
             +      '<a class="anchorjs-link" href="#top-aligned-media"><span class="anchorjs-icon"></span></a>'
             +      '</h4><p>'
             +       comment.body
             +   '</div>'
             +   '<ul class="media-action">'
             +     '<li class="media-action-edit">EDIT</li>'
             +     '<li class="media-action-delete">DELETE</li>'
             +   '</ul>'
             + '</div>'
    commentList.append(html);
  }
  function editComment(text){
    var html = '<form class="comment-submit" id="new_comment" action="/prototypes/3/comments" accept-charset="UTF-8" method="post">'
             +    '<input name="utf8" type="hidden" value="✓">'
             +    '<textarea class="comment-input" name="comment[body]" id="comment_body">'
             +      text
             +    '</textarea>'
             +    '<input type="submit" name="commit" value="COMMENT">'
               '</form>'
    return html
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


  //deleteが押された時のイベント
  $(".comment-list").on("click",".media-action-delete",function(e){
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
      alert("コメントを削除しました。");
    })
    .fail(function(){
      alert("コメントの削除に失敗しました。");
    })
  })

  //editが押された時のイベント
  $(".comment-list").on("click",".media-action-edit",function(e){
    e.preventDefault();
    var text = $(this).parent().prev().children("p").text();
    var commentId = $(this).parent().parent().data("comments-id");
    $(this).parent().prev().children("p").html(editComment(text));
    $(this).parent().remove();

    $(".comment-list").on("submit",".comment-submit",function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var href = window.location.href + '/comments/' + commentId;
      $.ajax({
        type: "PATCH",
        url: href,
        data: formData,
        dataType: "json",
        processData: false,
        contentType: false
      })
      .done(function(data){
        console.log(data);
      })
      .fail(function(){
        console.log("失敗しました");
      })
    })
  })
})
