package im.kuo.auth.token;

import org.springframework.security.authentication.AbstractAuthenticationToken;

public class SocialTokenAuthenticationToken extends AbstractAuthenticationToken {

    // ================================================================================================

    private final Object principal;
    private Object credentials;

    public SocialTokenAuthenticationToken(String principal, String credentials) {
        super(null);
        this.principal = principal;
        this.credentials = credentials;
        setAuthenticated(false);
    }


    @Override
    public Object getCredentials() {
        return this.credentials;
    }

    @Override
    public Object getPrincipal() {
        return this.principal;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
        if (isAuthenticated) {
            throw new IllegalArgumentException(
                    "Cannot set this token to trusted - use constructor which takes a GrantedAuthority list instead");
        }

        super.setAuthenticated(false);
    }


    @Override
    public void eraseCredentials() {
        super.eraseCredentials();
        credentials = null;
    }
}
