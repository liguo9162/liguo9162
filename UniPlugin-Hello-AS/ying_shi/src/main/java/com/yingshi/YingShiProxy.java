package com.yingshi;
import android.app.Activity;
import android.app.Application;
import android.view.WindowManager;

import com.videogo.openapi.EZOpenSDK;
import io.dcloud.feature.uniapp.UniAppHookProxy;
public class YingShiProxy implements UniAppHookProxy {
    private String appKey = "ba82aafe62044d52b450cead0744f784";
    @Override
    public void onCreate(Application application) {
/*        ((Activity)getContext()).getWindow().addFlags(WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN);
        ((Activity)getContext()).getWindow().addFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);*/
        EZOpenSDK.showSDKLog(true);
        EZOpenSDK.enableP2P(false);
        EZOpenSDK.initLib(application, appKey);
    }

    @Override
    public void onSubProcessCreate(Application application) {

    }
}
