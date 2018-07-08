package im.kuo.core.repository;
import im.kuo.model.media.MediaResource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaResourceRepository extends CrudRepository<MediaResource, Long> {
}
