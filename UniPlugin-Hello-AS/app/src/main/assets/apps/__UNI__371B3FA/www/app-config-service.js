
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/demo/new_file","pages/demo/leChengNvue","pages/demo/yingShi","pages/demo/demo100","pages/demo/test5","pages/demo/test2","pages/demo/test1","pages/index/test15","pages/index/test14","pages/index/test11","pages/index/test8","pages/index/test12","pages/index/test7","pages/index/test10","pages/index/demo5","pages/index/gauges","pages/index/airEchars","pages/index/myechars","pages/index/test2","pages/index/test1","pages/index/uqiuyun","pages/index/index","pages/index/test","pages/index/canvas","pages/index/demo1","pages/index/demo2","pages/index/demo6","pages/index/test3","pages/index/test4","pages/index/test13","pages/index/test15","pages/demo/test4","pages/demo/test99/test99"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","rpxCalcMaxDeviceWidth":1080,"rpxCalcBaseDeviceWidth":375,"rpxCalcIncludeWidth":750,"pageOrientation":"auto"},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"测试","compilerVersion":"3.3.13","entryPagePath":"pages/demo/new_file","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/demo/new_file","meta":{"isQuit":true,"isNVue":true},"window":{"navigationBarTitleText":"插件开发测试","enablePullDownRefresh":false}},{"path":"/pages/demo/leChengNvue","meta":{"isNVue":true},"window":{"navigationBarTitleText":"乐橙云视频插件开发","enablePullDownRefresh":false}},{"path":"/pages/demo/yingShi","meta":{"isNVue":true},"window":{"navigationBarTitleText":"萤石云视频插件开发","enablePullDownRefresh":false}},{"path":"/pages/demo/demo100","meta":{},"window":{"navigationBarTitleText":"vdfvd","enablePullDownRefresh":false}},{"path":"/pages/demo/test5","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/demo/test2","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/demo/test1","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test15","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test14","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test11","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test8","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test12","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test7","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test10","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/demo5","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/gauges","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/airEchars","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/myechars","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test2","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test1","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/uqiuyun","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/index/test","meta":{},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/index/canvas","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/demo1","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/demo2","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/demo6","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test3","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test4","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/test13","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/demo/test4","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/demo/test99/test99","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
