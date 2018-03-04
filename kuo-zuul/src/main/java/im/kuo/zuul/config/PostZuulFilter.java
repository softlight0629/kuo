package im.kuo.zuul.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.apache.commons.io.IOUtils;

import javax.servlet.http.Cookie;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

public class PostZuulFilter extends ZuulFilter {

    private final ObjectMapper mapper = new ObjectMapper();
    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();

        String requestURI = ctx.getRequest().getRequestURI();
        String requestMethod = ctx.getRequest().getMethod();

        InputStream is = ctx.getResponseDataStream();
        try {
            String responseBody = IOUtils.toString(is, "UTF-8");

            if (responseBody.contains("refresh_token")) {
                Map<String, Object> responseMap = mapper.readValue(responseBody, new TypeReference<Map<String, Object>>() {});

                String refreshToken = responseMap.get("refresh_token").toString();
                responseMap.remove("refresh_token");
                responseBody = mapper.writeValueAsString(responseMap);

                final Cookie cookie = new Cookie("refreshToken", refreshToken);
                cookie.setHttpOnly(true);
                // cookie.setSecure(true);
                cookie.setPath(ctx.getRequest().getContextPath() + "/oauth/token");
                cookie.setMaxAge(2592000); // 30 days

                ctx.getResponse().addCookie(cookie);

                if (responseBody.contains("access_token")) {

                }
            }

            ctx.setResponseBody(responseBody);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public String filterType() {
        return "post";
    }

    @Override
    public int filterOrder() {
        return 10;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }


}
