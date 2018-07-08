package im.kuo.core.repository;
import im.kuo.model.site.resource.PageResource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PageResourceRepository extends CrudRepository<PageResource, Long> {
}
