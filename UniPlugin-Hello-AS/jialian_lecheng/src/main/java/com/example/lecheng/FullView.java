package com.example.lecheng;

import android.app.Activity;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.util.Log;
import android.util.Printer;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.lechange.opensdk.listener.LCOpenSDK_EventListener;
import com.lechange.opensdk.media.LCOpenSDK_ParamReal;
import com.lechange.opensdk.media.LCOpenSDK_PlayWindow;
import com.taobao.weex.WXSDKInstance;

import io.dcloud.feature.uniapp.UniSDKInstance;

public class FullView extends FrameLayout implements View.OnClickListener {
    private static final String TAG = "TAG";
    private LCOpenSDK_PlayWindow playWindow;
    private String deviceId = "";
    private String channelId = "";
    private String token;
    private String playToken;
    private FrameLayout mFrameLayout;
    private ImageView goBack;
    private TextView videoLoading;
    private UniSDKInstance instance;

    public FullView(@NonNull Context context) {
        super(context);
    }

    public FullView(@NonNull Context context, String deviceId, String channelId, String token, String playToken, UniSDKInstance instance) {
        super(context);
        this.deviceId = deviceId;
        this.channelId = channelId;
        this.token = token;
        this.playToken = playToken;
        this.instance = instance;
        FrameLayout inflate = (FrameLayout) LayoutInflater.from(getContext()).inflate(R.layout.full_screen, null);
//        goBack = inflate.findViewById(R.id.full_go_back);
//        goBack.setOnClickListener(this);
        videoLoading = inflate.findViewById(R.id.video_loading);
        mFrameLayout = inflate.findViewById(R.id.frameLayout);
        playWindow = new LCOpenSDK_PlayWindow();
        playWindow.initPlayWindow(getContext(), mFrameLayout, 0, true);
        LCOpenSDK_EventListener listener = new LCOpenSDK_EventListener() {
            @Override
            public void onPlayerResult(int i, String s, int i1) {
                super.onPlayerResult(i, s, i1);
                if (i == 0 && s.equals("4")) videoLoading.setVisibility(View.GONE);
            }
        };//开发者实现事件监听回调
        playWindow.setWindowListener(listener);
        init(deviceId, channelId, token, playToken);
        addView(inflate);
    }

    //初始化播放
    private void init(String deviceId, String channelId, String token, String playToken) {
        instance.runOnUiThread(() -> {
            LCOpenSDK_ParamReal paramReal = new LCOpenSDK_ParamReal(token, deviceId, Integer.parseInt(channelId), "esf", playToken, 1, true, true, 300);
            playWindow.playRtspReal(paramReal);
        });
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.full_go_back) {
            instance.runOnUiThread(() -> {
                /*playWindow.stopRtspPlayback(true);
                playWindow.releaseSubView();*/
                ((Activity) getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                ViewGroup activityView = ((Activity) getContext()).findViewById(Window.ID_ANDROID_CONTENT);
                HalfScreen halfScreen = new HalfScreen(getContext(), deviceId, channelId, token, playToken, instance);
                activityView.addView(halfScreen);
            });
        }
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        playWindow.stopRtspPlayback(true);
        playWindow.releaseSubView();
        playWindow= null;
    }
}
