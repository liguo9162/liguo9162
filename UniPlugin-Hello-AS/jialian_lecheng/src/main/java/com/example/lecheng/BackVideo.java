package com.example.lecheng;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.graphics.Color;
import android.graphics.Shader;
import android.os.Build;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.DatePicker;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

import com.alibaba.fastjson.JSONObject;
import com.lechange.opensdk.listener.LCOpenSDK_EventListener;
import com.lechange.opensdk.media.LCOpenSDK_ParamDeviceRecord;
import com.lechange.opensdk.media.LCOpenSDK_PlayWindow;
import com.taobao.weex.WXSDKInstance;

import org.json.JSONArray;
import org.json.JSONException;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

import io.dcloud.feature.uniapp.UniSDKInstance;

public class BackVideo extends LinearLayout implements View.OnClickListener {
    private static final String TAG = "TAG";
    private String deviceId = "";
    private String channelId = "";
    private String token;
    private String playToken;
    private LCOpenSDK_PlayWindow playWindow;
    private FrameLayout mFrameLayout;
    private ImageView goBack;
    private TextView dateTime, videoLoading;
    private int currentIdx = 0;
    private String checkDate;
    private String dateTemp = "";
    private ListView fileList;
    private SeekBar seekBar;
    private boolean touchFlag = false;
    private UniSDKInstance instance;
    private LCOpenSDK_EventListener listener;
    private LCOpenSDK_ParamDeviceRecord paramDeviceRecord;
    public BackVideo(Context context) {
        super(context);
    }

    public BackVideo(Context context, String deviceId, String channelId, String token, String playToken, UniSDKInstance instance) {
        super(context);
        this.deviceId = deviceId;
        this.channelId = channelId;
        this.token = token;
        this.playToken = playToken;
        this.instance = instance;
        View inflate = LayoutInflater.from(getContext()).inflate(R.layout.back_video,null);
        mFrameLayout = inflate.findViewById(R.id.frameLayout);
        goBack = inflate.findViewById(R.id.go_back);
//        goBack.setOnClickListener(this);
        dateTime = inflate.findViewById(R.id.date_time);
        dateTime.setOnClickListener(this);
        videoLoading = inflate.findViewById(R.id.video_loading);
        playWindow = new LCOpenSDK_PlayWindow();
        playWindow.initPlayWindow(getContext(), mFrameLayout, 0, true);
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        checkDate = format.format(System.currentTimeMillis());
        dateTime.setText(checkDate);
        videoList(checkDate);
        fileList = inflate.findViewById(R.id.file_list);
        seekBar = inflate.findViewById(R.id.seek_bar);
        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                touchFlag = true;
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                touchFlag = false;
                playWindow.seek(seekBar.getProgress());
            }
        });
        addView(inflate);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.go_back) {
            instance.runOnUiThread(() -> {
                playWindow.stopRtspPlayback(true);
                playWindow.uninitPlayWindow();
                playWindow.releaseSubView();
                ViewGroup activityView = ((Activity) getContext()).findViewById(Window.ID_ANDROID_CONTENT);
                activityView.removeAllViews();
                HalfScreen halfScreen = new HalfScreen(getContext(), deviceId, channelId, token, playToken, instance);
                activityView.addView(halfScreen);
            });
        } else if (v.getId() == R.id.date_time) {
            try {
                AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
                View inflateDate = LayoutInflater.from(getContext()).inflate(R.layout.date_picker, null);
                AlertDialog alertDialog = builder.setView(inflateDate).create();
                TextView confirm = inflateDate.findViewById(R.id.confirm);
                TextView cancel = inflateDate.findViewById(R.id.cancel);
                DatePicker datePicker = inflateDate.findViewById(R.id.date_picker);
                int year = Integer.parseInt(checkDate.substring(0, 4));
                int monthInit = Integer.parseInt(checkDate.substring(5, 7));
                int dayInit = Integer.parseInt(checkDate.substring(8, 10));
                DatePicker.OnDateChangedListener onDateChangedListener = new DatePicker.OnDateChangedListener() {
                    @Override
                    public void onDateChanged(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                        monthOfYear = monthOfYear + 1;
                        String month = monthOfYear > 9 ? monthOfYear + "" : "0" + monthOfYear;
                        String day = dayOfMonth > 9 ? dayOfMonth + "" : "0" + dayOfMonth;
                        dateTemp = year + "-" + month + "-" + day;
                    }
                };
                datePicker.init(year, monthInit - 1, dayInit, onDateChangedListener);
                OnClickListener listener = new OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if (v.getId() == R.id.confirm) {
                            checkDate = dateTemp;
                            videoList(checkDate);
                            dateTime.setText(checkDate);
                        }
                        alertDialog.dismiss();
                    }
                };
                confirm.setOnClickListener(listener);
                cancel.setOnClickListener(listener);
                alertDialog.show();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    //回放列表数据
    public void videoList(String beginTime) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    JSONObject param = new JSONObject();
                    param.put("token", token);
                    param.put("deviceId", deviceId);
                    param.put("channelId", channelId);
                    param.put("type", 0);
                    param.put("beginTime", beginTime + " 00:00:00");
                    param.put("endTime", beginTime + " 23:59:59");
                    param.put("type", "All");
                    param.put("queryRange", "1-48");
                    org.json.JSONObject queryLocalRecords = Http.myPost("https://openapi.lechange.cn/openapi/queryLocalRecords", param);
                    JSONArray records = queryLocalRecords.getJSONObject("result").getJSONObject("data").getJSONArray("records");
                    if (records.length() == 0) {
                        instance.runOnUiThread(() -> {
                            Toast.makeText(getContext(), "该天没有录像", Toast.LENGTH_LONG).show();
                            mFrameLayout.setBackgroundColor(Color.BLACK);
                            return;
                        });
                    }
                    FileListAdapter fileListAdapterAdapt = new FileListAdapter(getContext(), records);
                    fileListAdapterAdapt.getListen(new FileListAdapter.Fileitemlisten() {
                        @Override
                        public void sendDate(int position) {
                            playWindow.stopRtspPlayback(true);
                            try {
                                playBackNext(records.getJSONObject(position));
                            } catch (Exception e) {
                                e.printStackTrace();
                            }

                        }
                    });
                    fileList.setAdapter(fileListAdapterAdapt);
                    currentIdx = 0;
                    playBackNext(records.getJSONObject(currentIdx));
                } catch (Exception e) {
                    instance.runOnUiThread(() -> {
                        Toast.makeText(getContext(), "该天没有录像", Toast.LENGTH_LONG).show();
                        mFrameLayout.setBackgroundColor(Color.BLACK);
                        return;
                    });
                    e.printStackTrace();
                }
            }
        }).start();
    }

    //回放下一条数据
    public void playBackNext(org.json.JSONObject r) {
        try {
            long endTime = getTime(r.getString("endTime"));
            int offsetTime = r.getInt("fileLength");
            long beginTime = getTime(r.getString("beginTime"));
            seekBar.setMax((int) (endTime - beginTime) / 1000);
            String fileId = r.getString("recordId");
            instance.runOnUiThread(() -> {
                try {
                    videoLoading.setVisibility(View.VISIBLE);
                    paramDeviceRecord = new LCOpenSDK_ParamDeviceRecord(token, deviceId, Integer.parseInt(channelId), "esf", playToken, fileId, beginTime, endTime, 0, 0, true);
                    playWindow.playRtspPlayback(paramDeviceRecord);
                    playWindow.setWindowListener(new LCOpenSDK_EventListener() {
                        @Override
                        public void onPlayerTime(int i, long l) {
                            super.onPlayerTime(i, l);
                            if (!touchFlag) seekBar.setProgress((int) (l - beginTime / 1000));
                        }

                        @Override
                        public void onPlayerResult(int i, String s, int i1) {
                            super.onPlayerResult(i, s, i1);
                            if (i == 0 && s.equals("4")) videoLoading.setVisibility(View.GONE);
                        }
                    });
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public long getTime(String data) {
        try {
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = format.parse(data);
            return date.getTime();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

}
