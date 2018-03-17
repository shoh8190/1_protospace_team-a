$(function(){

  list =
    '<li class="list-group-item col-md-4 add_sub_image_form">'
    + '<div class="image-upload-plus">'
    +   '<span style=''>+</span>'
    + '</div>'
    +'</li>';

  function add_new_form(addForm, hideForm){
    addForm.remove()
    hideForm.show().removeClass("hide_form").addClass("appear_form").css('display', 'block');
  };

  function countList(){
    return $('.proto-sub-list .appear_form').length;
  };

  function appendList(){
    if(countList() < 3 && $('.hide_form').length){
     $('ul.proto-sub-list').append(list);
    };
  };

  appendList();

  $(document).on('click', '.image-upload-plus', function(){
    addForm = $('.add_sub_image_form');
    hideForm = $('.hide_form:first');
    add_new_form(addForm, hideForm);
    appendList();
  });

 });


