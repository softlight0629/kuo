package im.kuo.media.controller;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import javax.inject.Inject;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class MediaControllerTest {

    @Inject
    private MockMvc mockMvc;

    @Test
    public void should_return_201() throws Exception {
        MvcResult mvcResult = this.mockMvc.perform(post("/api/v1/medias").contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isCreated())
                .andReturn();

        System.out.println(mvcResult.getResponse().getContentAsString());

        mvcResult = this.mockMvc.perform(get("/api/v1/medias").contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isCreated())
                .andReturn();

        System.out.println(mvcResult.getResponse().getContentAsString());
    }
}
