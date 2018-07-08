package im.kuo.site.controller;


import im.kuo.core.repository.SiteRepository;
import im.kuo.model.site.Site;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@Controller
@RequestMapping("/api/v1")
public class SiteController {

    @Inject
    private SiteRepository siteRepository;

    @PostMapping("/sites")
    public ResponseEntity create(@RequestBody Site site) {
        return ResponseEntity.status(HttpStatus.CREATED).body(siteRepository.save(site));
    }

    @GetMapping("/sites")
    public ResponseEntity<Iterable<Site>> list() {
        Iterable<Site> sites = siteRepository.findAll();
        return ResponseEntity.ok(sites);
    }

    @PutMapping("/sites/{guid}")
    public ResponseEntity update(@PathVariable String guid, @RequestBody Site site) {
        site.setGuid(guid);
        siteRepository.save(site);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/sites/{guid}")
    public ResponseEntity<Site> retreive(@PathVariable String guid) {
        Site site = siteRepository.findByGuid(guid);
        return ResponseEntity.ok(site);
    }
}
