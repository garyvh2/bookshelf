package com.substation.bookshelf.web;


import com.substation.bookshelf.domain.Tag;
import com.substation.bookshelf.service.TagService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tag")
public class TagController {
    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping()
    public List<Tag> getAll() {
        return this.tagService.getAll();
    }

    @GetMapping("/{id}")
    public Tag findBydId(@PathVariable Long id) {
        return this.tagService.findById(id);
    }

    @PostMapping()
    public Tag save(@RequestBody Tag tag) { return this.tagService.save(tag); }

    @PutMapping()
    public Tag update(@RequestBody Tag tag) { return this.tagService.update(tag); }
}
