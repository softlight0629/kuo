package im.kuo.web.api;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.inject.Inject;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class SiteControllerTest {

    @Inject
    private MockMvc mockMvc;

    @Test
    public void should_return_201() throws Exception {
        this.mockMvc.perform(post("/api/sites").param("name", "test"))
                .andExpect(status().isCreated());
    }

    public void should_return_200() {

    }
}
