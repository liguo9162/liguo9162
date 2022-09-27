package com.yingshi;

import android.app.ActionBar;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.graphics.Bitmap;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.view.LayoutInflater;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.taobao.weex.WXSDKInstance;
import com.videogo.errorlayer.ErrorInfo;
import com.videogo.openapi.EZConstants;
import com.videogo.openapi.EZOpenSDK;
import com.videogo.openapi.EZPlayer;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Timer;

public class HalfScreen extends LinearLayout implements View.OnClickListener {
    private WXSDKInstance instance;
    private String accessToken, deviceSerial;
    private int cameraNo;
    private EZPlayer player;
    private SurfaceView surfaceView;
    private SurfaceHolder surfaceHolder;
    private TextView highDefinition,playPause,videoLoading;
    private ImageView large, small, snapshot, fullScreen, backBtn;
    private ImageButton btn_ptz_left, btn_ptz_right, btn_ptz_up, btn_ptz_down, pause;
    private LinearLayout mainInit, playBack, inflate;
    private Handler handler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            switch (msg.what) {
                case EZConstants.EZRealPlayConstants.MSG_REALPLAY_PLAY_SUCCESS:
                    videoLoading.setVisibility(View.GONE);
                    break;//播放成功
                case EZConstants.EZRealPlayConstants.MSG_REALPLAY_PLAY_FAIL:
                    ErrorInfo errorinfo = (ErrorInfo) msg.obj;//播放失败,得到失败信息
                    int code = errorinfo.errorCode;//得到播放失败错误码
                    String codeStr = errorinfo.moduleCode;  //得到播放失败模块错误码
                    String description = errorinfo.description; //得到播放失败描述
                    Utils.toast(instance, getContext(), description);
                    String description2 = errorinfo.sulution; //得到播放失败解决方方案
                    videoLoading.setVisibility(View.VISIBLE);
                    videoLoading.setText(description);
                    break;
                case EZConstants.MSG_VIDEO_SIZE_CHANGED://解析出视频画面分辨率回调
                    try {
                        String temp = (String) msg.obj;
                        String[] strings = temp.split(":");
                        int mVideoWidth = Integer.parseInt(strings[0]);
                        int mVideoHeight = Integer.parseInt(strings[1]);//解析出视频分辨率
                    } catch (Exception e) {
                        e.printStackTrace();
                        Utils.toast(instance, getContext(), "画面有问题");
                    }
                    break;
                default:

                    break;
            }
        }
    };

    public HalfScreen(Context context) {
        super(context);
    }

    public HalfScreen(WXSDKInstance instance, Context context, String accessToken, String deviceSerial, int cameraNo) {
        super(context);
        this.instance = instance;
        this.accessToken = accessToken;
        this.deviceSerial = deviceSerial;
        this.cameraNo = cameraNo;
        inflate = (LinearLayout) LayoutInflater.from(context).inflate(R.layout.mainvideo, null);
        initViewAndClick(inflate);
        addView(inflate);
        mainInit.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
        EZOpenSDK.getInstance().setAccessToken(accessToken);
        player = EZOpenSDK.getInstance().createPlayer(deviceSerial, cameraNo);
        instance.runOnUiThread(() -> {
            player.setHandler(handler);
            player.setSurfaceHold(surfaceHolder);
            player.startRealPlay();
        });
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.small) {
            controlPTZ(EZConstants.EZPTZCommand.EZPTZCommandZoomIn);
        } else if (v.getId() == R.id.large) {
            controlPTZ(EZConstants.EZPTZCommand.EZPTZCommandZoomOut);
        } else if (v.getId() == R.id.go_back) {

        } else if (v.getId() == R.id.snapshot) {
            try {
                Bitmap picture = player.capturePicture();
                File downLoad = new File(Environment.getExternalStorageDirectory(), "download");
                if (!downLoad.exists()) downLoad.mkdir();
                File file = new File(downLoad, System.currentTimeMillis() + ".png");
                file.createNewFile();
                BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file));
                boolean compress = picture.compress(Bitmap.CompressFormat.PNG, 100, outputStream);
                outputStream.flush();
                outputStream.close();
                Utils.toast(instance, getContext(), "图片下载完成");
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else if (v.getId() == R.id.full_screen) {
            player.stopRealPlay();
            instance.runOnUiThread(() -> {
                ((Activity) getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
                inflate.setVisibility(View.GONE);
                FullScreen fullScreen = new FullScreen(instance, getContext(), accessToken, deviceSerial, cameraNo);
                AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
                AlertDialog dialog = builder.setView(fullScreen).create();
                ImageView fullBack = fullScreen.findViewById(R.id.full_go_back);
                fullBack.setOnClickListener(new OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        ((Activity) getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                        dialog.dismiss();
                        inflate.setVisibility(View.VISIBLE);
                        player.startRealPlay();
                    }
                });
                dialog.show();
                dialog.getWindow().setAttributes(new WindowManager.LayoutParams());
            });
        } else if (v.getId() == R.id.btn_ptz_flip) {
            player.stopRealPlay();
        } else if (v.getId() == R.id.high_definition) {
            if(highDefinition.getText().equals("普通")){
                highDefinition.setText("高清");
            }else if(highDefinition.getText().equals("高清")){
                highDefinition.setText("普通");
            }
            player.startRealPlay();
        } else if (v.getId() == R.id.btn_ptz_up) {
            controlPTZ(EZConstants.EZPTZCommand.EZPTZCommandUp);
        } else if (v.getId() == R.id.btn_ptz_left) {
            controlPTZ(EZConstants.EZPTZCommand.EZPTZCommandLeft);
        } else if (v.getId() == R.id.btn_ptz_right) {
            controlPTZ(EZConstants.EZPTZCommand.EZPTZCommandRight);
        } else if (v.getId() == R.id.btn_ptz_down) {
            controlPTZ(EZConstants.EZPTZCommand.EZPTZCommandDown);
        } else if (v.getId() == R.id.play_back) {
            player.stopRealPlay();
            instance.runOnUiThread(() -> {
              /*  ViewGroup activityView = ((Activity) getContext()).findViewById(Window.ID_ANDROID_CONTENT);
                activityView.removeAllViews();*/
                PlayBack playBack = new PlayBack(instance, getContext(), accessToken, deviceSerial, cameraNo);
//                activityView.addView(playBack);
                AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
                AlertDialog alertDialog = builder.setView(playBack).create();
                ImageView backBtn = playBack.findViewById(R.id.go_back);
                backBtn.setOnClickListener(new OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        alertDialog.dismiss();
                        player.startRealPlay();
                    }
                });
                alertDialog.show();
                alertDialog.getWindow().setAttributes(new WindowManager.LayoutParams());
            });
        } else if(v.getId()==R.id.play_pause){
            if(playPause.getText().equals("暂停")){
                player.stopRealPlay();
                playPause.setText("播放");
            }else if(playPause.getText().equals("播放")){
                player.startRealPlay();
                playPause.setText("暂停");
            }
        }
    }

    //云台控制
    public void controlPTZ(EZConstants.EZPTZCommand command) {
        new Thread(() -> {
            try {
                EZOpenSDK.getInstance().controlPTZ(deviceSerial, cameraNo, command, EZConstants.EZPTZAction.EZPTZActionSTART, 1);
                Thread.sleep(500);
                EZOpenSDK.getInstance().controlPTZ(deviceSerial, cameraNo, command, EZConstants.EZPTZAction.EZPTZActionSTOP, 1);
            } catch (Exception e) {
                e.printStackTrace();
                Utils.toast(instance, getContext(), "云台操作失败");
            }
        }).start();
    }

    public void initViewAndClick(LinearLayout inflate) {
        surfaceView = inflate.findViewById(R.id.surface_view);
        surfaceHolder = surfaceView.getHolder();
        large = inflate.findViewById(R.id.large);
        small = inflate.findViewById(R.id.small);
        snapshot = inflate.findViewById(R.id.snapshot);
        fullScreen = inflate.findViewById(R.id.full_screen);
        backBtn = inflate.findViewById(R.id.go_back);
        pause = inflate.findViewById(R.id.btn_ptz_flip);
        large.setOnClickListener(this);
        small.setOnClickListener(this);
        snapshot.setOnClickListener(this);
        fullScreen.setOnClickListener(this);
        backBtn.setOnClickListener(this);
        pause.setOnClickListener(this);
        highDefinition = inflate.findViewById(R.id.high_definition);//high_definition
        highDefinition.setOnClickListener(this);
        btn_ptz_left = inflate.findViewById(R.id.btn_ptz_left);
        btn_ptz_left.setOnClickListener(this);
        btn_ptz_right = inflate.findViewById(R.id.btn_ptz_right);
        btn_ptz_right.setOnClickListener(this);
        btn_ptz_up = inflate.findViewById(R.id.btn_ptz_up);
        btn_ptz_up.setOnClickListener(this);
        btn_ptz_down = inflate.findViewById(R.id.btn_ptz_down);
        btn_ptz_down.setOnClickListener(this);
        mainInit = inflate.findViewById(R.id.main_init);
        playBack = inflate.findViewById(R.id.play_back);
        playBack.setOnClickListener(this);
        playPause=inflate.findViewById(R.id.play_pause);
        playPause.setOnClickListener(this);
        videoLoading = inflate.findViewById(R.id.video_loading);

    }
}
