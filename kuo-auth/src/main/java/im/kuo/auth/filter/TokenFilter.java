package im.kuo.auth.filter;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import im.kuo.auth.response.HttpServletResponseCopier;
import org.apache.commons.io.IOUtils;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Component
@Order(10)
public class TokenFilter implements Filter {

    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpServletResponseCopier responseCopier = new HttpServletResponseCopier((HttpServletResponse) response);

        filterChain.doFilter(servletRequest, responseCopier);
        responseCopier.flushBuffer();

        String responseBody = IOUtils.toString(responseCopier.getCopy(), "UTF-8");

        if (responseBody.contains("refresh_token")) {
            Map<String, Object> responseMap = mapper.readValue(responseBody, new TypeReference<Map<String, Object>>() {});

            Object token = responseMap.get("refresh_token");
            if (token == null) {
                return;
            }
            String refreshToken = token.toString();
            Cookie cookie = new Cookie("refreshToken", refreshToken);
            cookie.setHttpOnly(true);
            // cookie.setSecure(true);
            cookie.setMaxAge(2592000); // 30 days
            cookie.setDomain("localhost");
            response.addCookie(cookie);
        }
    }

    @Override
    public void destroy() {

    }
}
