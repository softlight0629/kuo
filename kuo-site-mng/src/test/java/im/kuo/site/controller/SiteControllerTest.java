package im.kuo.site.controller;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import javax.inject.Inject;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class SiteControllerTest {

    @Inject
    private MockMvc mockMvc;

    @Test
    public void should_return_201() throws Exception {
        this.mockMvc.perform(post("/api/v1/sites").contentType(MediaType.APPLICATION_JSON).content("{\"name\": \"123\"}"))
                .andExpect(status().isCreated())
                .andReturn();

        this.mockMvc.perform(post("/api/v1/sites/1/pages").contentType(MediaType.APPLICATION_JSON).content("{\"name\": \"page1\"}"))
                .andExpect(status().isCreated())
                .andReturn();

        this.mockMvc.perform(post("/api/v1/sites/1/pages").contentType(MediaType.APPLICATION_JSON).content("{\"name\": \"page2\"}"))
                .andExpect(status().isCreated())
                .andReturn();

        MvcResult mvcResult = this.mockMvc.perform(get("/api/v1/sites/1"))
                .andExpect(status().isOk())
                .andReturn();

        System.out.println(mvcResult.getResponse().getContentAsString());


        this.mockMvc.perform(delete("/api/v1/sites/1/pages/1"))
                .andExpect(status().isNoContent())
                .andReturn();

        mvcResult = this.mockMvc.perform(get("/api/v1/sites/1"))
                .andExpect(status().isOk())
                .andReturn();

        System.out.println(mvcResult.getResponse().getContentAsString());
    }

}
