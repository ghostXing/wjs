$(function () {
    function resize () {
        var $value = $(window).width();
        var $flag = $(window).width()<768;
        $("#main_slider > .carousel-inner > .item").each(function (index,ele) {
             var $isImage = $flag?$(ele).data("image-sm"):$(ele).data("image-lg");
            $(ele).css("backgroundImage",'url("'+$isImage+'")');
            if($flag) {
                $(ele).html("<img src='"+$isImage +"'/>");
            } else {
                $(ele).empty();
            }
            var width = 140;
            $("#business .nav-tabs li").each(function (index,element) {
                width += $(element).width();
            })
            if(width > $(window).width()) {
                $("#business .nav-tabs").css("width",width+"px").parent().css("overflow-x","scroll");
            } else {
                $("#business .nav-tabs").css("width","auto").parent().css("overflow-x","hidden");
            }
        })
    }
        $(window).on("resize",resize).trigger("resize");
        $('[data-toggle="tooltip"]').tooltip();
        var $tittle = $("#news .news-tittle");
        $("#news .nav a").on("click",function (index,element) {
            var $this = $(this);
            var $msg = $this.data("title");
            $tittle.text($msg);
        })
        var startX,endX;
        $("#main_slider").on("touchstart",function (e) {
            // console.log(e.originalEvent.touches[0].clientX);
            startX = e.originalEvent.touches[0].clientX;
        })
        $("#main_slider").on("touchmove",function (e) {
            endX = e.originalEvent.touches[0].clientX;
        })
        $("#main_slider").on("touchend",function (e) {
            if(Math.abs(endX-startX) > 50) {
                $(this).carousel(endX > startX?'prev':'next');
            }
        })


})


