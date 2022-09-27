package com.example.lecheng;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.LinkedList;
import java.util.Map;

public class FileListAdapter extends BaseAdapter  {

    private Context mContext;
    private JSONArray list ;
    public FileListAdapter(Context mContext, JSONArray list){
        this.mContext = mContext ;
        this.list = list ;
    }

    @Override
    public int getCount() {
        return list.length();
    }

    @Override
    public Object getItem(int position) {
        return position;
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder = null;
        if(holder==null){
            convertView = LayoutInflater.from(mContext).inflate(R.layout.file_item,parent,false);
            holder = new ViewHolder();
            holder.fileImg = (ImageView) convertView.findViewById(R.id.file_img);
            holder.beginTime = (TextView) convertView.findViewById(R.id.begin_time);
            holder.endTime = (TextView) convertView.findViewById(R.id.end_time);
            holder.itemLinear = convertView.findViewById(R.id.item_linear);
            holder.itemLinear.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    fileitemlisten.sendDate(position);
                }
            });
        }else{
            holder = (ViewHolder)convertView.getTag();
        }
        try {
            String beginTime = list.getJSONObject(position).getString("beginTime") ;
            String endTime = list.getJSONObject(position).getString("endTime");
            holder.beginTime.setText(beginTime.substring(11));
            holder.endTime.setText(endTime.substring(11));
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return convertView;
    }
    private Fileitemlisten fileitemlisten ;
    public void  getListen(Fileitemlisten fileitemlisten){
        this.fileitemlisten = fileitemlisten;
    }

    static class ViewHolder{
        ImageView fileImg;
        TextView beginTime;
        TextView endTime;
        LinearLayout itemLinear;
    }


    interface Fileitemlisten {
        public void sendDate(int position);
    }
}
