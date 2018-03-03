$(function(){

  // $(function appendList(){
  //   list =
  //     `<li class="list-group-item col-md-4 add_sub_image_form">
  //       <div class="image-upload-plus">
  //         <span>+</span>
  //        </div>
  //      </li>`
  //   return this.append(list);
  // })

  list =
    `<li class="list-group-item col-md-4 add_sub_image_form">
      <div class="image-upload-plus">
        <span style=''>+</span>
      </div>
    </li>`;

 var num = $('.proto-sub-list .list-group-item').length;

 function countList(){
  return $('.proto-sub-list .list-group-item').length;
 };

 if(num < 3){
  $('ul.proto-sub-list').append(list);
 }

 $('.image-upload-plus').click(function(){
  $('.add_sub_image_form').remove();
    alert(countList());
  if(countList < 3){
    alert('aaa');
  }

 });


 });


