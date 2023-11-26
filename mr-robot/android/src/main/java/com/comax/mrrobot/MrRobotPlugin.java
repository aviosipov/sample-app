package com.comax.mrrobot;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MrRobot")
public class MrRobotPlugin extends Plugin {

    private MrRobot implementation = new MrRobot();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo("hello >> " + value));
        call.resolve(ret);
    }
}
