package com.yingshi;

import android.content.Context;
import android.widget.Toast;

import com.taobao.weex.WXSDKInstance;

import org.json.JSONException;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class Utils {
    public static org.json.JSONObject postYY(FormBody formBody, String url) throws IOException, JSONException {
        OkHttpClient httpClient = new OkHttpClient();
        Request mRequest = new Request.Builder()
                .url(url)
                .post(formBody)
                .build();
        Call call = httpClient.newCall(mRequest);
        Response response = call.execute();
        if (response.code() == 200) {
            return new org.json.JSONObject(response.body().string());
        }
        return null;
    }

    public static void toast(WXSDKInstance instance, Context context,String str) {
        instance.runOnUiThread(() -> {
            Toast.makeText(context, str, Toast.LENGTH_SHORT).show();
        });
    }

}
