package im.kuo.model.media.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum MediaType {
    PICTURE("picture", "图片资源");

    private String type;

    private String message;

    MediaType(String type, String message) {
        this.type = type;
        this.message = message;
    }

    @JsonValue
    public String getType() {
        return type;
    }

    public String getMessage() {
        return message;
    }
}
