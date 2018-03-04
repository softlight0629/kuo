package im.kuo.auth.exception;

import javax.naming.AuthenticationException;

public class UserOauthProviderNotFoundException extends AuthenticationException {

    public UserOauthProviderNotFoundException(String msg) {
        super(msg);
    }
}
