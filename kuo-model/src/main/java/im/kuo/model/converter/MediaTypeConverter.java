package im.kuo.model.converter;

import im.kuo.model.media.enums.MediaType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class MediaTypeConverter implements AttributeConverter<MediaType, String> {
    @Override
    public String convertToDatabaseColumn(MediaType mediaType) {
        return mediaType.getType();
    }

    @Override
    public MediaType convertToEntityAttribute(String dbData) {
        for (MediaType mediaType : MediaType.values()) {
            if (mediaType.getType().equals(dbData)) {
                return mediaType;
            }
        }

        throw new IllegalArgumentException("Unknow value:" + dbData);

    }
}
