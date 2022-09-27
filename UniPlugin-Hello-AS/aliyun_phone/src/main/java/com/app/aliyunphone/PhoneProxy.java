package com.app.aliyunphone;

import android.app.Application;
import android.util.Log;

import com.alibaba.fastjson.JSONObject;
import com.aliyun.rtc.voicecall.constant.RtcInstance;

import io.dcloud.feature.uniapp.UniAppHookProxy;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;

public class PhoneProxy implements UniAppHookProxy {
    private static final String TAG = "TAG";

    @Override
    public void onSubProcessCreate(Application application) {

    }

    @Override
    public void onCreate(Application application) {

    }
}
