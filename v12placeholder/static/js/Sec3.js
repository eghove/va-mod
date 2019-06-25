 $(document).ready(function() {

     //Info 1
    $(".accitem1, #accimg1").click(function() {
      $("#accitem1info, #accimg1").show();
      $("#accitem2info, #accimg2").hide();
      $("#accitem3info, #accimg3").hide();
      $("#accitem4info, #accimg4").hide();
      $("#accitem5info, #accimg5").hide();
    });

     //Info 2
    $(".accitem2").click(function() {
      $("#accitem2info, #accimg2").show();
      $("#accitem1info, #accimg1").hide();
      $("#accitem3info, #accimg3").hide();
      $("#accitem4info, #accimg4").hide();
      $("#accitem5info, #accimg5").hide();
    });

     //Info 3
    $(".accitem3, #accimg3").click(function() {
      $("#accitem3info, #accimg3").show();
      $("#accitem1info, #accimg1").hide();
      $("#accitem2info, #accimg2").hide();
      $("#accitem4info, #accimg4").hide();
      $("#accitem5info, #accimg5").hide();
    });

     //Info 4
    $(".accitem4, #accimg4").click(function() {
      $("#accitem4info, #accimg4").show();
      $("#accitem1info, #accimg1").hide();
      $("#accitem2info, #accimg2").hide();
      $("#accitem3info, #accimg3").hide();
      $("#accitem5info, #accimg5").hide();
    });

     //Info 5
    $(".accitem5, #accimg5").click(function() {
      $("#accitem5info, #accimg5").show();
      $("#accitem1info, #accimg1").hide();
      $("#accitem2info, #accimg2").hide();
      $("#accitem3info, #accimg3").hide();
      $("#accitem4info, #accimg4").hide();
    });

});
