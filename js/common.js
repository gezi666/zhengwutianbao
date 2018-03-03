$(function(){

    $(".tab-box .tab-item").click(function(){
        $(this).removeClass("other").removeClass("other-r").removeClass("other-i").addClass("active").siblings().removeClass("active").removeClass("other").removeClass("other-r").removeClass("other-i");
        $(this).prevAll().addClass("other-r");
        $(this).nextAll().addClass("other");
    });
    $(".tab-box .index").click(function(){
        $(this).addClass("active");
        $(this).nextAll().removeClass("active").removeClass("other-r").removeClass("other").addClass("other-i");
    });
    $(".tab-box li").click(function(){
        var i = $(this).index();
        $(".main-con .item-con").eq(i).show().siblings().hide();
    });


    layui.use('element', function(){
        var element = layui.element;
        element.on('nav(demo)', function(elem){
            layer.msg(elem.text());
        });
    });

    layui.use('form', function(){
        var form = layui.form;
        form.on('submit(formDemo)', function(data){
            layer.msg(JSON.stringify(data.field));
            return false;
        });
    });
    layui.use('laydate', function(){
        var laydate = layui.laydate;
        laydate.render({
            elem: '#date-state'
        });
        laydate.render({
            elem: '#date-end'
        });
    });


});