package com.app.aliyunphone;

import android.Manifest;
import android.app.Activity;
import android.util.Log;

import androidx.core.app.ActivityCompat;

import com.alibaba.fastjson.JSONObject;
import com.alivc.rtc.AliRtcEngine;
import com.alivc.rtc.AliRtcEngineEventListener;
import com.alivc.rtc.AliRtcEngineNotify;
import com.aliyun.rtc.voicecall.bean.AliUserInfoResponse;
import com.aliyun.rtc.voicecall.constant.Constant;
import com.aliyun.rtc.voicecall.constant.RtcInstance;
import com.aliyun.rtc.voicecall.network.OkHttpCientManager;
import com.aliyun.rtc.voicecall.network.OkhttpClient;
import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class PhoneModule extends UniModule {
    private static final String TAG = "TestModule";
    public static int REQUEST_CODE = 1000;

    public PhoneModule() {
        super();
    }

    @Override
    public void addEventListener(String eventName, String callback, Map<String, Object> options) {
        super.addEventListener(eventName, callback, options);
    }
    @Override
    public void onActivityStart(){
        ActivityCompat.requestPermissions((Activity) mUniSDKInstance.getContext(), new String[]{Manifest.permission.RECORD_AUDIO, Manifest.permission.READ_EXTERNAL_STORAGE}, 1);
        JSONObject data = new JSONObject();
        UniJSCallback callback = new UniJSCallback(){

            @Override
            public void invoke(Object o) {

            }

            @Override
            public void invokeAndKeepAlive(Object o) {

            }
        };
        RtcInstance.getInstance().setListener(new RtcInstance.RTCListener() {
            @Override
            public void enterRoomSuccess() {
                Log.i(TAG, "enterRoomSuccess");
                if (callback != null) {
                    data.put("code", "enterRoomSuccess");
                    callback.invoke(data);
                }
            }

            @Override
            public void enterRoomFail() {
                Log.i(TAG, "enterRoomFail");
                if (callback != null) {
                    data.put("code", "enterRoomFail");
                    callback.invoke(data);
                }
            }

            @Override
            public void userOnline() {
                Log.i(TAG, "userOnline");
                if (callback != null) {
                    data.put("code", "userOnline");
                    callback.invoke(data);
                }
            }

            @Override
            public void userOffline() {
                Log.i(TAG, "userOffline");
                if (callback != null) {
                    Log.i(TAG, "userOffline");
                    data.put("code", "userOffline");
                    callback.invoke(data);
                }
            }

            @Override
            public void error(String s) {
                Log.i(TAG, "error");
                if (callback != null) {
                    data.put("code", "error");
                    callback.invoke(data);
                }
            }
        });
    }
    @UniJSMethod(uiThread = true)
    public void call(JSONObject options, UniJSCallback callback) {
//        ActivityCompat.requestPermissions((Activity) mUniSDKInstance.getContext(), new String[]{Manifest.permission.RECORD_AUDIO, Manifest.permission.READ_EXTERNAL_STORAGE}, 1);
        RtcInstance.getInstance().enterRoom(mUniSDKInstance.getContext(), options.getString("roomId"), "http://iot.build110.com:9204/1v1-audio");
    }

    //run JS thread
    @UniJSMethod(uiThread = true)
    public JSONObject destory(UniJSCallback callback) {
        JSONObject data = new JSONObject();
        RtcInstance.getInstance().exitRoom();
        data.put("code", "success");
        return data;
    }
}
