package im.kuo.model.user.auth;

import lombok.Data;

import java.util.Date;

@Data
public class OauthProvider {

    private long id;

    private long userId;

    private String appType;

    private String appUserId;

    private String accessToken;

    private String accessExpire;

    private Date createAt;

    private Date updateAt;
}
