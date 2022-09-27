package com.example.lecheng;

import com.alibaba.fastjson.JSON;

import org.json.JSONException;

import java.io.IOException;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import okhttp3.Call;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class  Http {

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

    public static org.json.JSONObject myPost(String url, com.alibaba.fastjson.JSONObject params) throws IOException, JSONException {
        OkHttpClient httpClient = new OkHttpClient();
//        String url = "https://openapi.lechange.cn/openapi/getKitToken";
        com.alibaba.fastjson.JSONObject system = new com.alibaba.fastjson.JSONObject();
        long time = (System.currentTimeMillis()) / 1000;
        String nonce = UUID.randomUUID().toString();
        String appSecret = "69aaf28c1fee4a7e8d9e7f2e336f51";
        system.put("ver", "1.0");
        system.put("appId", "lcb68a3a4cdeee4ead");
        system.put("time", time);
        system.put("nonce", nonce);
        String res = "time:" + time + ",nonce:" + nonce + ",appSecret:" + appSecret;
        String sign = getMD5(res);
        system.put("sign", sign);
        com.alibaba.fastjson.JSONObject json = new com.alibaba.fastjson.JSONObject();
        json.put("params", params);
        json.put("id", UUID.randomUUID().toString());
        json.put("system", system);
        RequestBody body = RequestBody.create(MediaType.parse("application/json; charset=utf-8"), JSON.toJSONString(json));
        final Request request = new Request.Builder()
                .url(url)
                .post(body)
                .build();
        Call call = httpClient.newCall(request);
        Response response = call.execute();
        if (response.code() == 200) {
            org.json.JSONObject obj = new org.json.JSONObject(response.body().string());
            return obj;
        }
        return null;
    }

    public static String getMD5(String info) {
        try {
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            md5.update(info.getBytes("UTF-8"));
            byte[] encryption = md5.digest();

            StringBuffer strBuf = new StringBuffer();
            for (int i = 0; i < encryption.length; i++) {
                if (Integer.toHexString(0xff & encryption[i]).length() == 1) {
                    strBuf.append("0").append(Integer.toHexString(0xff & encryption[i]));
                } else {
                    strBuf.append(Integer.toHexString(0xff & encryption[i]));
                }
            }
            return strBuf.toString();
        } catch (Exception e) {
            return "";
        }
    }
}
