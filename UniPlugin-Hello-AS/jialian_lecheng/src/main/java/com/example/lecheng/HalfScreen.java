package com.example.lecheng;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.graphics.Point;
import android.media.Image;
import android.os.Environment;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.alibaba.fastjson.JSONObject;
import com.lechange.opensdk.listener.LCOpenSDK_EventListener;
import com.lechange.opensdk.media.LCOpenSDK_ParamReal;
import com.lechange.opensdk.media.LCOpenSDK_PlayWindow;
import com.taobao.weex.WXSDKInstance;

import java.io.File;
import java.io.IOException;

import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okio.BufferedSink;
import okio.Okio;
import okio.Sink;

public class HalfScreen extends FrameLayout implements View.OnClickListener {
    private final static String TAG = "TAG";
    private LCOpenSDK_PlayWindow playWindow;
    private String deviceId = "";
    private String channelId = "";
    private String token;
    private String playToken;
    private FrameLayout mFrameLayout;
    private ImageView fullScreen, goBack, snapshot, btn_ptz_up2, btn_ptz_left2, btn_ptz_right2, btn_ptz_down2;
    private LinearLayout playBack,inflate;
    private TextView videoLoading, playPause;
    private LCOpenSDK_ParamReal paramReal;
    private UniSDKInstance instance;

    public HalfScreen(@NonNull Context context) {
        super(context);
    }

    public HalfScreen(@NonNull Context context, String deviceId, String channelId, String token, String playToken, UniSDKInstance instance) {
        super(context);
//        ((AppCompatActivity) instance.getContext()).getSupportActionBar().hide();
//        ((AppCompatActivity)instance).getSupportActionBar().show();
        this.deviceId = deviceId;
        this.channelId = channelId;
        this.token = token;
        this.playToken = playToken;
        this.instance = instance;
        inflate = (LinearLayout) LayoutInflater.from(getContext()).inflate(R.layout.main_video, null);
        initViews(inflate);
        try {
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
        } catch (Exception e) {
            e.printStackTrace();
        }
        addView(inflate);
    }

    //初始化播放
    private void init(String deviceId, String channelId, String token, String playToken) {
        instance.runOnUiThread(() -> {
            try {
                paramReal = new LCOpenSDK_ParamReal(token, deviceId, Integer.parseInt(channelId), "esf", playToken, 1, true, true, 300);
                playWindow.playRtspReal(paramReal);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.full_screen) {
            instance.runOnUiThread(() -> {
                playWindow.stopRtspPlayback(true);
                ((Activity) getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
               /* ViewGroup activityView = ((Activity) getContext()).findViewById(Window.ID_ANDROID_CONTENT);
                activityView.removeAllViews();*/
                FullView fullView = new FullView(getContext(), deviceId, channelId, token, playToken, instance);
                AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
                AlertDialog alertDialog = builder.setView(fullView).create();
                ImageView toBack = fullView.findViewById(R.id.full_go_back);
                toBack.setOnClickListener(new OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        try {
                            alertDialog.dismiss();
                            playWindow.playRtspReal(paramReal);
                            ((Activity) getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                        }catch (Exception e){
                            e.printStackTrace();
                        }
                    }
                });
                alertDialog.show();
//                alertDialog.getWindow().setAttributes(new WindowManager.LayoutParams());
                WindowManager manager = (WindowManager) getContext().getSystemService(Context.WINDOW_SERVICE);
                DisplayMetrics dm = new DisplayMetrics();
                manager.getDefaultDisplay().getMetrics(dm);
                int width = dm.widthPixels;
                int height = dm.heightPixels;
                WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams();
                layoutParams.width = height;
                layoutParams.height = width;
                layoutParams.x=-50;
                layoutParams.y=-50;
                alertDialog.getWindow().setAttributes(layoutParams);
//                alertDialog.getWindow().setAttributes(new WindowManager.LayoutParams());
               /* WindowManager.LayoutParams layoutParams =((Activity) getContext()).getWindow().getAttributes();
                layoutParams.gravity= Gravity.BOTTOM;
                layoutParams.width= LayoutParams.MATCH_PARENT;
                layoutParams.height= LayoutParams.MATCH_PARENT;
                ((Activity) getContext()).getWindow().getDecorView().setPadding(0, 0, 0, 0);
                ((Activity) getContext()).getWindow().setAttributes(layoutParams);*/
//                window.setContentView(R.layout.dialog_layout);
            });
        } else if (v.getId() == R.id.go_back) {
//            ((Activity)getContext()).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
//            ((Activity)instance.getContext()).finish();
        } else if (v.getId() == R.id.snapshot) {
            setDeviceSnap();
        } else if (v.getId() == R.id.btn_ptz_up2) {
            /*0-上，1-下，2-左，3-右，4-左上，5-左下，6-右上，7-右下，8-放大，9-缩小，10-停止*/
            controlMovePTZ("0", 500);
        } else if (v.getId() == R.id.btn_ptz_left2) {
            controlMovePTZ("2", 500);
        } else if (v.getId() == R.id.btn_ptz_right2) {
            controlMovePTZ("3", 500);
        } else if (v.getId() == R.id.btn_ptz_down2) {
            controlMovePTZ("1", 500);
        } else if (v.getId() == R.id.play_back) {
            instance.runOnUiThread(() -> {
              /*  ViewGroup activityView = ((Activity) getContext()).findViewById(Window.ID_ANDROID_CONTENT);
                activityView.removeAllViews();
                BackVideo backVideo = new BackVideo(getContext(), deviceId, channelId, token, playToken, instance);
                activityView.addView(backVideo);*/
                inflate.setVisibility(View.GONE);
                playWindow.stopRtspPlayback(true);
                BackVideo backVideo = new BackVideo(getContext(), deviceId, channelId, token, playToken, instance);
                AlertDialog.Builder builder2 = new AlertDialog.Builder(getContext());
                AlertDialog alertDialog2 = builder2.setView(backVideo).create();
                ImageView toBack = backVideo.findViewById(R.id.go_back);
                toBack.setOnClickListener(new OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        try {
                            alertDialog2.dismiss();
                            playWindow.playRtspReal(paramReal);
                            inflate.setVisibility(View.VISIBLE);
                        }catch (Exception e){
                            e.printStackTrace();
                        }
                    }
                });
                alertDialog2.show();
                alertDialog2.getWindow().setAttributes(new WindowManager.LayoutParams());
               /* WindowManager manager = (WindowManager) getContext().getSystemService(Context.WINDOW_SERVICE);
                DisplayMetrics dm = new DisplayMetrics();
                manager.getDefaultDisplay().getMetrics(dm);
                int width = dm.widthPixels;
                int height = dm.heightPixels;
                WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams();
                layoutParams.width = width;
                layoutParams.height = height;
                layoutParams.x=-50;
                layoutParams.y=-50;
                alertDialog.getWindow().setAttributes(layoutParams);*/
            });
        } else if (v.getId() == R.id.play_pause) {
            instance.runOnUiThread(() -> {
                if (playPause.getText().equals("暂停")) {
                    playWindow.pause();
                    playPause.setText("播放");
                } else if (playPause.getText().equals("播放")) {
                    playPause.setText("暂停");
                    playWindow.playRtspReal(paramReal);
                }
            });
        }
    }

    //抓图
    public void setDeviceSnap() {
        Toast.makeText(getContext(), "正在下载", Toast.LENGTH_LONG).show();
        new Thread(() -> {
            try {
                JSONObject param = new JSONObject();
                param.put("token", token);
                param.put("deviceId", deviceId);
                param.put("channelId", channelId);
                org.json.JSONObject queryLocalRecords = Http.myPost("https://openapi.lechange.cn/openapi/setDeviceSnap", param);
                org.json.JSONObject object = queryLocalRecords.getJSONObject("result").getJSONObject("data");
                download(object.getString("url"));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();

    }

    public void download(String url) {
        File dir = new File(Environment.getExternalStorageDirectory() + "/Download");
        if (!dir.exists()) {
            dir.mkdir();
        }
        OkHttpClient httpClient = new OkHttpClient();
        Request request = new Request.Builder()
                .url(url)
                .get()
                .build();
        Call call = httpClient.newCall(request);
        call.enqueue(new Callback() {
            @Override
            public void onFailure(@NonNull Call call, @NonNull IOException e) {
                Log.e(TAG, "getApkUpdate apkDownload onFailure");
            }

            @Override
            public void onResponse(@NonNull Call call, @NonNull Response response) throws IOException {
                if (response.code() == 200) {
                    Sink sink = null;
                    BufferedSink bufferedSink = null;
                    try {
                        String mSDCardPath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/Download";
                        File file = new File(mSDCardPath);
                        if (!file.exists()) {
                            file.mkdir();
                        }
                        File dest = new File(mSDCardPath, System.currentTimeMillis() + ".png");
                        sink = Okio.sink(dest);
                        bufferedSink = Okio.buffer(sink);
                        bufferedSink.writeAll(response.body().source());
                        bufferedSink.close();
                        Toast.makeText(getContext(), "下载完成", Toast.LENGTH_LONG).show();
                    } catch (Exception e) {
                        e.printStackTrace();
                    } finally {
                        if (bufferedSink != null) {
                            bufferedSink.close();
                        }

                    }
                }
            }
        });
    }

    //云台控制
    public void controlMovePTZ(String operation, long duration) {
        new Thread(() -> {
            try {
                JSONObject param = new JSONObject();
                param.put("token", token);
                param.put("deviceId", deviceId);
                param.put("channelId", channelId);
                param.put("operation", operation);
                param.put("duration", duration);
                org.json.JSONObject queryLocalRecords = Http.myPost("https://openapi.lechange.cn/openapi/controlMovePTZ", param);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
    }

    public void initViews(LinearLayout inflate) {
        mFrameLayout = inflate.findViewById(R.id.frameLayoutOne);
        fullScreen = inflate.findViewById(R.id.full_screen);
        fullScreen.setOnClickListener(this);
        goBack = inflate.findViewById(R.id.go_back);
        goBack.setOnClickListener(this);
        snapshot = inflate.findViewById(R.id.snapshot);
        snapshot.setOnClickListener(this);
        btn_ptz_up2 = inflate.findViewById(R.id.btn_ptz_up2);
        btn_ptz_up2.setOnClickListener(this);
        btn_ptz_left2 = inflate.findViewById(R.id.btn_ptz_left2);
        btn_ptz_left2.setOnClickListener(this);
        btn_ptz_right2 = inflate.findViewById(R.id.btn_ptz_right2);
        btn_ptz_right2.setOnClickListener(this);
        btn_ptz_down2 = inflate.findViewById(R.id.btn_ptz_down2);
        btn_ptz_down2.setOnClickListener(this);
        playBack = inflate.findViewById(R.id.play_back);
        playBack.setOnClickListener(this);
        videoLoading = inflate.findViewById(R.id.video_loading);
        playPause = inflate.findViewById(R.id.play_pause);
        playPause.setOnClickListener(this);
    }
}
