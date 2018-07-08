package im.kuo.model.site.resource;

import com.fasterxml.jackson.annotation.JsonBackReference;
import im.kuo.model.site.Site;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class PageResource {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="s_guid")
    @JsonBackReference
    private Site site;

    @Column
    private String name;

    @Column
    private String template;

    @Column(columnDefinition = "TEXT")
    private String assets;
}
