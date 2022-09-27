package com.yingshi;
import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.os.Handler;
import android.os.Message;
import android.view.LayoutInflater;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.taobao.weex.WXSDKInstance;
import com.videogo.errorlayer.ErrorInfo;
import com.videogo.openapi.EZConstants;
import com.videogo.openapi.EZOpenSDK;
import com.videogo.openapi.EZPlayer;
public class FullScreen extends FrameLayout implements View.OnClickListener {
    private WXSDKInstance instance;
    private String accessToken, deviceSerial;
    private int cameraNo;
    private EZPlayer player;
    private SurfaceView surfaceView;
    private SurfaceHolder surfaceHolder;
    private ImageView full_go_back;
    private TextView videoLoading;
    private Handler handler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            switch (msg.what) {
                case EZConstants.EZRealPlayConstants.MSG_REALPLAY_PLAY_SUCCESS:
                    videoLoading.setVisibility(View.GONE); //播放成功
                    break;
                case EZConstants.EZRealPlayConstants.MSG_REALPLAY_PLAY_FAIL:
                    //播放失败,得到失败信息
                    ErrorInfo errorinfo = (ErrorInfo) msg.obj;
                    //得到播放失败错误码
                    int code = errorinfo.errorCode;
                    //得到播放失败模块错误码
                    String codeStr = errorinfo.moduleCode;
                    //得到播放失败描述
                    String description = errorinfo.description;
                    Utils.toast(instance,getContext(),description);
                    //得到播放失败解决方方案
                    String description2 = errorinfo.sulution;
                    videoLoading.setVisibility(View.VISIBLE);
                    videoLoading.setText(description);
                    break;
                case EZConstants.MSG_VIDEO_SIZE_CHANGED:
                    //解析出视频画面分辨率回调
                    try {
                        String temp = (String) msg.obj;
                        String[] strings = temp.split(":");
                        int mVideoWidth = Integer.parseInt(strings[0]);
                        int mVideoHeight = Integer.parseInt(strings[1]);
                        //解析出视频分辨率
                    } catch (Exception e) {
                        e.printStackTrace();
                        Utils.toast(instance,getContext(),"画面有问题");
                    }
                    break;
                default:
                    break;
            }
        }
    };
    public FullScreen(WXSDKInstance instance, Context context, String accessToken, String deviceSerial, int cameraNo) {
        super(context);
        this.instance = instance;
        this.accessToken = accessToken;
        this.deviceSerial = deviceSerial;
        this.cameraNo = cameraNo;
        View inflate = LayoutInflater.from(context).inflate(R.layout.fullscreen, null);
        addView(inflate);
        surfaceView = inflate.findViewById(R.id.surface_view_full);
        surfaceHolder = surfaceView.getHolder();
        full_go_back = inflate.findViewById(R.id.full_go_back);
//        full_go_back.setOnClickListener(this);
        videoLoading = inflate.findViewById(R.id.video_loading);
        EZOpenSDK.getInstance().setAccessToken(accessToken);
        player = EZOpenSDK.getInstance().createPlayer(deviceSerial, cameraNo);
        instance.runOnUiThread(()->{
            player.setHandler(handler);
            player.setSurfaceHold(surfaceHolder);
            player.startRealPlay();
        });
    }
    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.full_go_back) {
            instance.runOnUiThread(()->{
                ((Activity)getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                ViewGroup activityView = ((Activity) getContext()).findViewById(Window.ID_ANDROID_CONTENT);
                activityView.removeAllViews();
                HalfScreen halfScreen = new HalfScreen(instance, getContext(), accessToken, deviceSerial, cameraNo);
                activityView.addView(halfScreen);
            });
        }
    }
}
