$(function(){

    layui.use('layer', function() { //独立版的layer无需执行这一句
        var layer = layui.layer; //独立版的layer无需执行这一句

        layer.open({
            type: 1
            ,title: '注意' //不显示标题栏
            ,closeBtn: true //关闭按钮
            ,area: ['700px', 'auto'] //容器宽高
            ,shade: 0.6  //遮罩层透明度
            ,id: 'notice' //设定一个id，防止重复弹出
            ,btn: ['保存']
            ,btnAlign: 'c'  //按钮居中 c
            ,shadeClose: true
            ,content: $(".notice").html()  //弹窗内容
            ,success: function(layero){
                var btn = layero.find('.layui-layer-btn');
                btn.find('.layui-layer-btn0').attr({
                    href: 'javascript:;'
                    ,target: '_self'
                });
            }
        });

        var active = {
            integration: function(){
                layer.open({
                    type: 1
                    ,title: '自查清理整合清单填报' //不显示标题栏
                    ,closeBtn: true //关闭按钮
                    ,area: ['746px', '500px'] //容器宽高
                    ,shade: 0.6  //遮罩层透明度
                    ,id: 'integration' //设定一个id，防止重复弹出
                    ,btn: ['保存','取消']
                    ,btnAlign: 'c'  //按钮居中 c
                    ,shadeClose: true
                    ,content: $(".integration").html()  //弹窗内容
                    ,success: function(layero){
                        var btn = layero.find('.layui-layer-btn');
                        btn.find('.layui-layer-btn0').attr({
                            href: 'javascript:;'
                            ,target: '_self'
                        });
                    }
                });
            },
        };
        $('.operation-box li').on('click', function(){
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });

});