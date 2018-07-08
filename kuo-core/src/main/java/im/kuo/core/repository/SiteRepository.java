package im.kuo.core.repository;

import im.kuo.model.site.Site;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface SiteRepository extends CrudRepository<Site, Long>{

    Site findByName(String name);

    Site findByGuid(String guid);
}
