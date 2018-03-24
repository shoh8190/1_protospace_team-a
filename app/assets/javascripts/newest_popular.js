// $(function(){
//   $("#popular").click(function() {
//   window.location.href = '/prototypes';
//   });
//   $("#newest").click(function(){
//   window.location.href = '/prototypes/newest';
//   });
// });


$.pjax({
  area : '.container.proto-list',
  link : '#popular #newest'
});
