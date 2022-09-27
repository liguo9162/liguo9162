package com.example.lecheng;

import android.app.Activity;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.os.Build;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

import androidx.annotation.RequiresApi;

import com.alibaba.fastjson.JSONObject;
import com.lechange.opensdk.api.InitParams;
import com.lechange.opensdk.api.LCOpenSDK_Api;
import com.lechange.opensdk.media.LCOpenSDK_PlayWindow;

import org.json.JSONException;

import java.io.IOException;

import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.ui.action.AbsComponentData;
import io.dcloud.feature.uniapp.ui.component.AbsVContainer;
import io.dcloud.feature.uniapp.ui.component.UniComponent;
import io.dcloud.feature.uniapp.ui.component.UniComponentProp;

public class LeCheng extends UniComponent<LinearLayout> {
    private static final String TAG = "TAG";
    private String token = "";//At_000094bf58bc81c442c19ef8f24a31ea
    private String playToken = "";//Kt_6197fe953cad4f369a58d3ae2c86a067
    private LCOpenSDK_PlayWindow playWindow;
    private String deviceId = "";
    private String channelId = "";
    private FrameLayout mFrameLayout;
    private JSONObject tokenParam;
    private int mOrientation;
    private int currentIdx = 0;
    private String resultDate = "";
    private long startTime = 0; //播放开始时间
    private UniSDKInstance mUniSDKInstance;
    private LinearLayout initLinearLayout;

    public LeCheng(UniSDKInstance instance, AbsVContainer parent, AbsComponentData basicComponentData) {
        super(instance, parent, basicComponentData);
        this.mUniSDKInstance = instance;
    }

    @UniComponentProp(name = "deviceId")
    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    @UniComponentProp(name = "channelId")
    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    @Override
    protected LinearLayout initComponentHostView(Context context) {
        initLinearLayout = (LinearLayout) LayoutInflater.from(getContext()).inflate(R.layout.init_parent, null);
        mOrientation = getContext().getResources().getConfiguration().orientation;

        new Thread(() -> {
            try {
                if (TextUtils.isEmpty(token)) {
                    org.json.JSONObject object = Http.myPost("https://openapi.lechange.cn/openapi/accessToken", null);
                    token = object.getJSONObject("result").getJSONObject("data").getString("accessToken");
                }
            } catch (IOException | JSONException e) {
                e.printStackTrace();
            }
            String host = "openapi.lechange.cn:443";
            InitParams initParams = new InitParams(getContext(), host, token);
            try {
                int iRet = LCOpenSDK_Api.initOpenApi(initParams);
            } catch (Throwable throwable) {
                throwable.printStackTrace();
                Log.e(TAG, throwable.getMessage());
            }
            try {
                tokenParam = new JSONObject();
                tokenParam.put("token", token);
                tokenParam.put("deviceId", deviceId);
                tokenParam.put("channelId", channelId);
                tokenParam.put("type", 0);
                if (TextUtils.isEmpty(playToken)) {
                    org.json.JSONObject jsonObject = Http.myPost("https://openapi.lechange.cn/openapi/getKitToken", tokenParam);
                    playToken = jsonObject.getJSONObject("result").getJSONObject("data").getString("kitToken");
                }
                mUniSDKInstance.runOnUiThread(() -> {
                    ((Activity) getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                    HalfScreen halfScreen = new HalfScreen(getContext(), deviceId, channelId, token, playToken, mUniSDKInstance);
                    initLinearLayout.addView(halfScreen);
                   /* if(mOrientation== Configuration.ORIENTATION_PORTRAIT){
                        HalfScreen halfScreen = new HalfScreen(getContext(), deviceId, channelId, token, playToken, mUniSDKInstance,initLinearLayout);
                    }else{
                        FullView fullView = new FullView(getContext(), deviceId, channelId, token, playToken, mUniSDKInstance, initLinearLayout);
                    }*/
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
        return initLinearLayout;
    }

    @Override
    public boolean onActivityBack() {
        return super.onActivityBack();
    }
}
