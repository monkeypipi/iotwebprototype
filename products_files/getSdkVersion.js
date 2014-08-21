var getSdkVersion = function(){
    //update log list
    var logs = {
        iphone: {
            normal:{
                v:'3.1.2',
                detail:'<div class="sdk-tips-panel"><div class="sdk-tips"><p>统计分析iOS SDK版本更新至3.1.2！</p><p>版本更新日志：</p><p>1.重构底层协议，极大提高数据的安全性和准确性</p><p>2.增加社交统计的功能，对自有分享等社交行为进行统计</p><p class="margin-bottom">3.新增计算事件统计的接口</p><div class="margin-t-1"><a href="#" class="highlight fr ignore">忽略</a><a href="http://dev.umeng.com/analytics/ios/sdk-download" target="_blank" class="highlight">查看详情</a></div><div class="corner3"></div></div></div>'
            },
            game:{
                v:'2.3.2.0'
            }
        },
        ipad:{
            normal:{
                v:'3.1.2',
                detail:'<div class="sdk-tips-panel"><div class="sdk-tips"><p>统计分析iOS SDK版本更新至3.1.2！</p><p>版本更新日志：</p><p>1.重构底层协议，极大提高数据的安全性和准确性</p><p>2.增加社交统计的功能，对自有分享等社交行为进行统计</p><p class="margin-bottom">3.新增计算事件统计的接口</p><div class="margin-t-1"><a href="#" class="highlight fr ignore">忽略</a><a href="http://dev.umeng.com/analytics/ios/sdk-download" target="_blank" class="highlight">查看详情</a></div><div class="corner3"></div></div></div>'
            },
            game:{
                v:'2.3.2.0'
            }
        },
        android:{
            normal:{
                v:'5.2.3',
                detail:'<div class="sdk-tips-panel"><div class="sdk-tips"><p>统计分析Android SDK版本更新至5.2.3！</p><p>版本更新日志：</p><p>1.实现底层重构，提高安全性和准确性，并且对传输内容进行压缩</p><p class="margin-bottom">2.增加社交统计功能， 对自有分享等社交行为进行统计</p><p class="margin-bottom">3.增加关闭错误分析的接口，增加字段标示错误来源</p><div class="margin-t-1"><a href="#" class="highlight fr ignore">忽略</a><a href="http://dev.umeng.com/analytics/android/sdk-download" target="_blank" class="highlight">查看详情</a></div><div class="corner3"></div></div></div>'
            },
            game:{
                v:'4.6.3.0'
            }
        },
        wphone:{
            normal:{
                v:'2.0',
                detail:'<div class="sdk-tips-panel"><div class="sdk-tips"><p>统计分析WindowsPhone SDK版本更新至2.0！</p><p>版本更新日志：</p><p>1.简化接口</p><p>2.增加间隔发送</p><p class="margin-bottom">3.可配置发送策略</p><div class="margin-t-1"><a href="#" class="highlight fr ignore">忽略</a><a href="http://dev.umeng.com/analytics/windows-phone/sdk-download" target="_blank" class="highlight">查看详情</a></div><div class="corner3"></div></div></div>'
            },
            game:{}
        },
        wphone8:{
            normal:{
                v: '1.0',
                detail:'<div class="sdk-tips-panel"><div class="sdk-tips"><p>统计分析WindowsRT SDK版本更新至1.0！</p><p>版本更新日志：</p><p>1.实现基本统计功能</p><p>2.实现对自定义事件的统计</p><p class="margin-bottom">3.支持统计多个渠道的数据</p><div class="margin-t-1"><a href="#" class="highlight fr ignore">忽略</a><a href="http://dev.umeng.com/analytics/windows-rt/sdk-download" target="_blank" class="highlight">查看详情</a></div><div class="corner3"></div></div></div>'
            },
            game:{}
        }
    };
    
    //init cricle
    $('.cricle').each(function(){
        var platform = $(this).attr('platform'),
            cur_v = $(this).attr('version'),
            game = $(this).attr('game') == "yes"? 'game':'normal',
            appid = $(this).attr('appid');
        //显示不是最新APP的更新提示
        if(game == 'normal' && cur_v != logs[platform][game].v){//cur_v !='' && logs[platform][game].v != '' &&
            //没有缓存的老 APP SDK
            //console.log(game,$(this).parents('tr').find('.appname').text())
            if(localStorage['APPIDNEW'+appid] == undefined){
                $(this).removeClass('hidden');
            }else{
                //当前版本大于缓存的版本号
                var v = JSON.parse(localStorage['APPIDNEW'+appid]).lastestVersion;
                var date = new Date().getTime();
                if(v != logs[platform][game].v){
                    $(this).removeClass('hidden');
                }
                //显示过期的忽略
                if(date > JSON.parse(localStorage['APPIDNEW'+appid]).expireTime){
                    $(this).removeClass('hidden');
                    localStorage.removeItem('APPIDNEW'+appid);
                }
            }
        };
        //event hover cricle
        $(this).hover(
            function(){
                $('.cricle').empty();
                $(this).append(logs[platform][game].detail);
            },
            function(){
                $(this).empty();
            }
        )
    });
    //忽略某APP的更新提醒
    function setLocalCache(lastestVersion, appid){
        if(/*lastestVersion != '' &&*/ appid != ''){
            //set expireTime
            var t = new Date().getTime()+86400000*30;
            var s = {"lastestVersion": lastestVersion, "expireTime": t};
            localStorage.setItem('APPIDNEW'+ appid, JSON.stringify(s));
        }
    };
    $('.cricle').on('click','.ignore',function(){
        var tar = $(this).parents('.cricle'),
            platform = tar.attr('platform'),
            game = $(this).attr('game') == "yes"? 'game':'normal',
            appid = tar.attr('appid');
        //set local cache
        setLocalCache(logs[platform][game].v,appid);
        
        tar.addClass('hidden').empty();
        return false;
    })
};