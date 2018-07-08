package im.kuo.model.media;

import com.fasterxml.jackson.annotation.JsonFormat;
import im.kuo.model.media.enums.MediaType;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class MediaResource {

    public MediaResource() {}

    public MediaResource(String fileName, String fileUrl) {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.originFileName = fileName;
        this.mediaType = MediaType.PICTURE;
    }

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column
    private String fileUrl;

    @Column
    private String fileSize;

    @Column
    private String fileName;

    @Column
    private String originFileName;

    @Column
    private int width;

    @Column
    private int height;

    @Column
    private String mimeType;

    @Enumerated(EnumType.STRING)
    @Column
    private MediaType mediaType;

    @Column
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date createAt = new Date();

    @Column
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date updateAt = new Date();
}
