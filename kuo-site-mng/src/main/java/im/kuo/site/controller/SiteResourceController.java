package im.kuo.site.controller;


import im.kuo.core.repository.SiteRepository;
import im.kuo.model.site.Site;
import im.kuo.model.site.resource.PageResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.inject.Inject;

@Controller
@RequestMapping("/api/v1/sites/{guid}")
public class SiteResourceController {

    @Inject
    private SiteRepository siteRepository;

    @RequestMapping(value = "/pages", method = RequestMethod.POST)
    public ResponseEntity createPageResource(@PathVariable String guid, @RequestBody PageResource pageResource) {
        Site site = siteRepository.findByGuid(guid);
        site.addPageResource(pageResource);
        siteRepository.save(site);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @RequestMapping(value = "/pages/{pageResourceId}", method = RequestMethod.DELETE)
    public ResponseEntity removePageResource(@PathVariable String guid, @PathVariable Long pageResourceId) {
        Site site = siteRepository.findByGuid(guid);
        site.removePageResource(pageResourceId);

        siteRepository.save(site);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
