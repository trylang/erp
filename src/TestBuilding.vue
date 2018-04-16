<template>
   <div>
       <el-button  size="medium" type="primary" @click="showMapHandler">显示地图</el-button>
        <!-- 室内地图 -->
        <el-dialog title="室内地图" :visible.sync="showMapVisible"
          width="60%" >
             <div id="map_body" style="height: 100%;">
                 <div class="rt-poi-border">
                    名&nbsp;&nbsp;称：<span>{{poiData.name_chinese}}</span><br>
                    poiNo：<span>{{poiData.poi_no}}</span>
                 </div>
            </div>
        </el-dialog> 
  </div>
</template>

<script>
export default {
        data() {
            return {
                showMapVisible:false,// 是否显示弹窗标志
                mapFlag:true,// 只执行一次地图初始化
                poiData:{} // poi 对象数据
            }
        },
        created: function() {
            var that = this;
            this.buildId = '860100010040500017';// 建筑id
        },
        mounted: function() {
             
        },
        methods: {
          // 弹窗浮层
          showMapHandler:function(){
               this.showMapVisible = true;
               this.$nextTick(function () {
                  if(this.mapFlag){
                    this.mapFlag = false;
                    this.init();
                  }
               });
          },
          // 渲染地图
          init: function() {
           
            var that = this;
            var bid_id = that.buildId;
            var map = document.getElementById("map_body");
            var w = map.offsetWidth;
            var h = w * 3/5;
            map.style.height = h + "px";
            var floor = "f1";
            var key = "k7i23869hd";
            Rtmap.DataProvider.getBuildInfo({key: key, buildId: bid_id}, function (data) {
                var bNowFloorExist = false;
                for (var i = 0; i < data.floorinfo.length; i++) {
                    if (data.floorinfo[i].floor.toUpperCase() == floor.toUpperCase()) {
                        bNowFloorExist = true;
                    }
                }
                if (!bNowFloorExist && data.floorinfo.length > 0) {
                    floor = data.floorinfo[0].floor;
                }
                initmap("map_body", {
                    key: key,
                    buildid: bid_id,
                    buildname: '',
                    floor: floor,
                    floorinfo: data.floorinfo,
                    labelStyle: "circle-point"
                });
                var map = Rtmap.Scene.getMap();
                //初始化地图
                function initmap(domId, option) {
                    var key = option.key;
                    var token = option.token;
                    if (!(key || token)) {
                        alert("Need Key or Token");
                    }
                    var openId = option.openid;
                    var title = option.title;//标题
                    var buildId = option.buildid;//建筑物ID;
                    var floor = option.floor;//Page.URL.getParameter("floor");
                    if (!floor) {
                        floor = "f1";
                    }
                    var labelStyle = option.labelStyle;//Page.URL.getParameter("labelstyle");
                    //地图初始化默认配置
                    Rtmap.Config.setup({
                        buildId: buildId,
                        buildName: option.buildname,
                        defaultFloor: floor || "f1",
                        Key: key,
                        Token: token,
                        zoom: option.zoom,//初始化缩放比例
                        centerPoint: option.centerPoint,////初始化中心点
                        labelStyle: labelStyle,
                        openId: openId,
                        title: title
                    });
                    Rtmap.Config.setFloorData(option.floorinfo);
                    initializeLocalColorConfig();
                    //Rtmap.Scene.setLabelVisble(false);//设置标注是否可见
                    Rtmap.Scene.initMapContext({parentDOM: domId});
                    Rtmap.Control.showZoom();//显示Zoom 控件
                    Rtmap.Control.showScale(); //显示比例尺
                    Rtmap.Config.setFloorData([]);
                    //显示新的楼层切换控件
                    Rtmap.FloorControl.show(function (e) {
                        Rtmap.Scene.changeFloorTo(e, "", function () {
                            
                        });
                    }, option.floorinfo, {defaultFloor: floor.toUpperCase(), parentDom: $("#map_body")});
                    Rtmap.Scene.off("poiClick", afterPoiClick);
                    //Poi点击回调
                    Rtmap.Scene.on("poiClick", afterPoiClick);

                    function afterPoiClick(e) {
                        if (e.target.feature) {
                          that.poiData = e.target.feature.properties;
                        }
                        else {
                            //点击空白处
                        }
                    }
                    //绑定全局事件
                    Page.Controller.bindGlobalEvent();
                    //初始化地图
                    Page.Controller.initMap();
                }
            });
     
          }
        }
    }
</script>

<style>
  .rt-poi-border{position:absolute;top:10px;left:10px;border:1px solid  #ebeef5;background-color:white;display:inline-block;padding:10px;z-index:2000;}
</style>
