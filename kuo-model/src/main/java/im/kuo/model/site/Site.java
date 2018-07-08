package im.kuo.model.site;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.google.common.base.Optional;
import com.google.common.base.Predicate;
import com.google.common.collect.FluentIterable;
import im.kuo.model.site.resource.PageResource;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Site {

    public Site() {}

    public Site(String name) {
        this.name = name;
    }

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Id
    @Column(unique = true, nullable = false)
    private String guid;

    @Column(nullable = false)
    private String name;

    @Column
    private String domain;

    @Column
    private String plan;

    @Column
    private String status;

    @Column
    private String address;

    @Column
    private String owner;

    @Column
    private Date   createAt = new Date();

    @Column
    private Date   updateAt = new Date();

    @OneToMany(mappedBy = "site", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<PageResource> pageResources = new ArrayList<>();

    public void addPageResource(PageResource pageResource) {
        this.pageResources.add(pageResource);
        pageResource.setSite(this);
    }

    public void removePageResource(PageResource pageResource) {
        this.pageResources.remove(pageResource);
    }

    public void removePageResource(Long pageResourceId) {
        Optional<PageResource> pageResourceOptional =
                FluentIterable.from(this.pageResources).firstMatch(new Predicate<PageResource>() {
                    @Override
                    public boolean apply(PageResource pageResource) {
                        return pageResource.getId().equals(pageResourceId);
                    }
                });

        if (pageResourceOptional.isPresent()) {
            this.pageResources.remove(pageResourceOptional.get());
        }
    }
}
