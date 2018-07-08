package im.kuo.web.api;

import im.kuo.core.repository.SiteRepository;
import im.kuo.model.site.Site;
import im.kuo.web.form.SiteForm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
public class SiteController {

    @Inject
    private SiteRepository siteRepository;

    @PostMapping("/api/sites")
    public ResponseEntity createSite(SiteForm siteForm) {
        Site site = new Site(siteForm.getName());
        siteRepository.save(site);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/sites/{name}")
    public ResponseEntity<Site> retrieveSite(@RequestParam String name) {
        Site site = siteRepository.findByName(name);

        if (site == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(site, HttpStatus.OK);
    }
}
