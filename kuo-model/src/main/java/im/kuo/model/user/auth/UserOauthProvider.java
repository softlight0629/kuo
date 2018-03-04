package im.kuo.model.user.auth;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class UserOauthProvider {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private long userId;

    @Column
    private String providerId;

    @Column
    private String providerUserId;

}
