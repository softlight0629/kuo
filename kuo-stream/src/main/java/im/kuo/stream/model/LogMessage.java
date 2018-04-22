package im.kuo.stream.model;

import java.io.Serializable;

/**
 * @author xuebin.gxb
 * @version LogMessage, v0.1 18/3/19 下午6:18 xuebin.gxb Exp $
 */
public class LogMessage implements Serializable {

    private static final long serialVersionUID = -5857383701708275796L;

    private String message;

    public LogMessage() {
    }

    public LogMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}