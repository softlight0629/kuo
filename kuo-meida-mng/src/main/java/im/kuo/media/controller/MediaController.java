package im.kuo.media.controller;

import im.kuo.core.repository.MediaResourceRepository;
import im.kuo.model.media.MediaResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.inject.Inject;
import java.util.List;

@Controller
@RequestMapping("/api/v1")
public class MediaController {

//    @Inject
//    private StorageService storageService;

    @Inject
    private MediaResourceRepository mediaResourceRepository;


    @PostMapping("/medias")
//    public ResponseEntity upload(@RequestParam("file") MultipartFile file) {
    public ResponseEntity upload() {
        MediaResource mediaResource = new MediaResource("test", "http:/1231.jpg");
        mediaResource = mediaResourceRepository.save(mediaResource);
        return ResponseEntity.ok(mediaResource);
    }

    @GetMapping("/medias")
    public ResponseEntity<Iterable<MediaResource>> list() {
        Iterable<MediaResource> mediaResources = mediaResourceRepository.findAll();
        return ResponseEntity.ok(mediaResources);
    }
}
