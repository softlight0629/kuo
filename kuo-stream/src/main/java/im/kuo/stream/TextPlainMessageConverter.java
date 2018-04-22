package im.kuo.stream;

import im.kuo.stream.model.LogMessage;
import org.springframework.messaging.Message;
import org.springframework.messaging.converter.AbstractMessageConverter;
import org.springframework.util.MimeType;

/**
 * @author xuebin.gxb
 * @version TextPlainMessageConverter, v0.1 18/3/19 下午6:25 xuebin.gxb Exp $
 */
public class TextPlainMessageConverter extends AbstractMessageConverter {

    protected TextPlainMessageConverter() {
        super(new MimeType("text", "plain"));
    }

    @Override
    protected boolean supports(Class<?> aClass) {
        return LogMessage.class == aClass;
    }

    @Override
    protected Object convertFromInternal(Message<?> message, Class<?> targetClass, Object conversionHint) {
        Object payload = message.getPayload();
        String text = payload instanceof String ? (String)payload : new String((byte[])payload);

        return new LogMessage(text);
    }
}