$(document).ready(function() {

  // SCRIPT FOR THE NEW BT SECTION ACCORDION
  
  //Info 1
 $(".accitem6, #accimg6").click(function() {
   $("#accitem6info, #accimg6").show();
   $("#accitem7info, #accimg7").hide();
   $("#accitem8info, #accimg8").hide();
   $("#accitem9info, #accimg9").hide();
   $("#accitem10info, #accimg10").hide();
 });

  //Info 2
 $(".accitem7, #accimg7").click(function() {
   $("#accitem7info, #accimg7").show();
   $("#accitem6info, #accimg6").hide();
   $("#accitem8info, #accimg8").hide();
   $("#accitem9info, #accimg9").hide();
   $("#accitem10info, #accimg10").hide();
 });

  //Info 3
 $(".accitem8, #accimg8").click(function() {
   $("#accitem8info, #accimg8").show();
   $("#accitem6info, #accimg6").hide();
   $("#accitem7info, #accimg7").hide();
   $("#accitem9info, #accimg9").hide();
   $("#accitem10info, #accimg10").hide();
 });

  //Info 4
 $(".accitem9, #accimg9").click(function() {
   $("#accitem9info, #accimg9").show();
   $("#accitem6info, #accimg6").hide();
   $("#accitem7info, #accimg7").hide();
   $("#accitem8info, #accimg8").hide();
   $("#accitem10info, #accimg10").hide();
 });

  //Info 5
 $(".accitem10, #accimg10").click(function() {
   $("#accitem10info, #accimg10").show();
   $("#accitem6info, #accimg6").hide();
   $("#accitem7info, #accimg7").hide();
   $("#accitem8info, #accimg8").hide();
   $("#accitem9info, #accimg9").hide();
 });

});
