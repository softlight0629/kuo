package im.kuo.core.repository;

import im.kuo.model.user.auth.UserOauthProvider;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserOauthProviderRepository extends CrudRepository<UserOauthProvider, Long> {

    UserOauthProvider findByProviderIdAndProviderUserId(String providerId, String providerUserId);
}
