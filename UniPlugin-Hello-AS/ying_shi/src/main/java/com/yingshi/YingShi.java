package com.yingshi;

import android.app.Activity;
import android.content.Context;
import android.content.res.Configuration;
import android.view.LayoutInflater;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;

import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.ui.action.AbsComponentData;
import io.dcloud.feature.uniapp.ui.component.AbsVContainer;
import io.dcloud.feature.uniapp.ui.component.UniComponent;
import io.dcloud.feature.uniapp.ui.component.UniComponentProp;
import okhttp3.FormBody;

public class YingShi extends UniComponent<LinearLayout> {
    private static final String TAG = "TAG";
    private String appKey = "ba82aafe62044d52b450cead0744f784";
    private String appSecret = "40487dddb247fe626f56cc741193cfbc";
    private String accessToken = "";
    private String deviceSerial = "G31374865";
    private int cameraNo = 1;
    private int mOrientation;

    @UniComponentProp(name = "deviceId")
    public void setDeviceId(String deviceId) {
        this.deviceSerial = deviceId;
    }

    @UniComponentProp(name = "channelId")
    public void setChannelId(String channelId) {
        this.cameraNo = Integer.parseInt(channelId);
    }

    public YingShi(UniSDKInstance instance, AbsVContainer parent, AbsComponentData componentData) {
        super(instance, parent, componentData);
    }

    @Override
    protected LinearLayout initComponentHostView(@NonNull Context context) {
        LinearLayout inflate = (LinearLayout) LayoutInflater.from(getContext()).inflate(R.layout.index_video, null);
        mOrientation = ((Activity) getContext()).getResources().getConfiguration().orientation;
        new Thread(() -> {
            try {
                FormBody formBody = new FormBody.Builder()
                        .add("appKey", appKey)
                        .add("appSecret", appSecret)
                        .build();
                org.json.JSONObject object = Utils.postYY(formBody, "https://open.ys7.com/api/lapp/token/get");
                accessToken = object.getJSONObject("data").getString("accessToken");
                getInstance().runOnUiThread(() -> {
                    HalfScreen halfScreen = new HalfScreen(getInstance(), getContext(), accessToken, deviceSerial, cameraNo);
                    inflate.addView(halfScreen);
                   /* if(mOrientation==Configuration.ORIENTATION_LANDSCAPE){
                        HalfScreen halfScreen = new HalfScreen(getInstance(), getContext(), accessToken, deviceSerial, cameraNo,inflate);
//                    inflate.addView(halfScreen);
                        halfScreen.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT,LinearLayout.LayoutParams.MATCH_PARENT));
                    }else if(mOrientation==Configuration.ORIENTATION_PORTRAIT){
                        FullScreen fullScreen = new FullScreen(getInstance(), getContext(), accessToken, deviceSerial, cameraNo,inflate);
                    }else {

                    }*/
                });
               /* EZOpenSDK.getInstance().setAccessToken(accessToken);
                player = EZOpenSDK.getInstance().createPlayer(deviceSerial, cameraNo);
                player.setHandler(handler);
                player.setSurfaceHold(surfaceHolder);
                player.startRealPlay();
                Calendar startTime = Calendar.getInstance();
                startTime.set(2022, 8, 4, 2, 0, 0); // 秒
                Log.e(TAG, startTime.toString());
                Calendar stopTime = Calendar.getInstance();
                stopTime.set(2022, 9, 4, 12, 0, 0); // 秒
                Log.e(TAG, stopTime.toString());*/
//                player.startPlayback(startTime,stopTime);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
        return inflate;
    }
}
