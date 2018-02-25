package im.kuo.model.user;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    public User() {}

    public User(String phone, String password) {
        this.phone = phone;
        this.password = password;
    }

    private String nickName;

    @Column
    private String password;

    private String accountType;

    private String realName;

    private String avatar;

    @Column
    private String phone;

    private String email;

    private int status;

    private String wx;

    private String qq;

    private String weibo;

    private Date createAt;

    private Date updateAt;

    private String registerIp;

    private Date loginTime;

    private String loginIp;
}
