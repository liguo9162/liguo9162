package com.yingshi;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.SeekBar;
import android.widget.TextView;

import androidx.annotation.NonNull;

import com.bigkoo.pickerview.builder.TimePickerBuilder;
import com.bigkoo.pickerview.listener.OnTimeSelectListener;
import com.bigkoo.pickerview.view.TimePickerView;
import com.taobao.weex.WXSDKInstance;
import com.videogo.errorlayer.ErrorInfo;
import com.videogo.openapi.EZConstants;
import com.videogo.openapi.EZOpenSDK;
import com.videogo.openapi.EZPlayer;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

public class PlayBack extends LinearLayout implements View.OnClickListener {
    private static final String TAG = "TAG";
    private WXSDKInstance instance;
    private String accessToken, deviceSerial;
    private int cameraNo;
    private EZPlayer player;
    private SurfaceView surfaceView;
    private SurfaceHolder surfaceHolder;
    private ImageView go_back;
    private TextView startTime, endTime,videoLoading;
    private Calendar startCalendar, endCalendar;
    private SimpleDateFormat sdf;
    private int progress;
    private Timer timer = null;
    private SeekBar seekBar;
    private boolean touchFlag = false;
    private Handler handler = new Handler() {
        @Override
        public void handleMessage(@NonNull Message msg) {
            super.handleMessage(msg);
            switch (msg.what) {
                case EZConstants.EZPlaybackConstants.MSG_REMOTEPLAYBACK_PLAY_SUCCUSS:
                    videoLoading.setVisibility(View.GONE); //播放成功
                    break;
                case EZConstants.EZPlaybackConstants.MSG_REMOTEPLAYBACK_PLAY_FAIL:
                    videoLoading.setVisibility(View.VISIBLE);
                    videoLoading.setText("回放失败");
                    break;
                default:
                    break;
            }
        }
    };
    public PlayBack(Context context) {
        super(context);
    }

    public PlayBack(WXSDKInstance instance, Context context, String accessToken, String deviceSerial, int cameraNo) {
        super(context);
        this.instance = instance;
        this.accessToken = accessToken;
        this.deviceSerial = deviceSerial;
        this.cameraNo = cameraNo;
        LinearLayout inflate = (LinearLayout) LayoutInflater.from(context).inflate(R.layout.backvideo, null);
        surfaceView = inflate.findViewById(R.id.surface_view);
        surfaceHolder = surfaceView.getHolder();
        go_back = inflate.findViewById(R.id.go_back);
//        go_back.setOnClickListener(this);
        startTime = inflate.findViewById(R.id.start_time);
        endTime = inflate.findViewById(R.id.end_time);
        startTime.setOnClickListener(this);
        videoLoading = inflate.findViewById(R.id.full_loading);
        endTime.setOnClickListener(this);
        startCalendar = Calendar.getInstance();
        long s1 = System.currentTimeMillis() - 3600 * 1000;
        startCalendar.setTime(new Date(s1));
        endCalendar = Calendar.getInstance();
        endCalendar.setTime(new Date());
        sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        startTime.setText(sdf.format(startCalendar.getTime()));
        endTime.setText(sdf.format(endCalendar.getTime()));
        seekBar = inflate.findViewById(R.id.seek_bar);
        addView(inflate);
        playBack(startCalendar, endCalendar);
        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int prog, boolean fromUser) {
                if (prog >= seekBar.getMax()) {
                    timer.cancel();
                }
                progress = prog;
            }
            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                touchFlag = true;
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                Calendar seekTime = Calendar.getInstance();
                seekTime.setTimeInMillis(progress*1000+startCalendar.getTimeInMillis());
                player.seekPlayback(seekTime);
                touchFlag = false;
            }
        });
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.go_back) {
            instance.runOnUiThread(()->{
                ViewGroup activityView = ((Activity) getContext()).findViewById(Window.ID_ANDROID_CONTENT);
                activityView.removeAllViews();
                HalfScreen halfScreen = new HalfScreen(instance, getContext(), accessToken, deviceSerial, cameraNo);
                activityView.addView(halfScreen);
                activityView.invalidate();
            });
        } else if (v.getId() == R.id.start_time) {
            getCalendar(0);
        } else if (v.getId() == R.id.end_time) {
            getCalendar(1);
        }
    }

    //播放
    public void playBack(Calendar startTime, Calendar stopTime) {
        long max = (endCalendar.getTimeInMillis() - startCalendar.getTimeInMillis()) / 1000;
        if (max <= 0) {
            Utils.toast(instance, getContext(), "请重新选择时间");
            return;
        }
        seekBar.setMax((int) max);
        if (player != null) {
            player.stopPlayback();
            player.release();
            player = null;
        }
        instance.runOnUiThread(() -> {
            EZOpenSDK.getInstance().setAccessToken(accessToken);
            player = EZOpenSDK.getInstance().createPlayer(deviceSerial, cameraNo);
            player.setHandler(handler);
            player.setSurfaceHold(surfaceHolder);
            player.startPlayback(startTime, stopTime);
            progress = 0;
        });
        if (timer != null) {
            timer.cancel();
            timer = null;
        }
        timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                if (!touchFlag) seekBar.setProgress(progress++);
            }
        }, 0, 1000);

    }
    public void getCalendar(int type) {
        TimePickerBuilder timePickerBuilder = new TimePickerBuilder(getContext(), new OnTimeSelectListener() {
            @Override
            public void onTimeSelect(Date date, View v) {
                if (type == 0) {
                    startCalendar.setTime(date);
                    startTime.setText(sdf.format(startCalendar.getTime()));
                } else if (type == 1) {
                    endCalendar.setTime(date);
                    endTime.setText(sdf.format(endCalendar.getTime()));
                }
                playBack(startCalendar, endCalendar);
            }
        }).setType(new boolean[]{true, true, true, true, true, true});
        TimePickerView pickerView = timePickerBuilder.build();
        pickerView.show();
    }
}
