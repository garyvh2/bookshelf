package com.substation.bookshelf.web;


import com.substation.bookshelf.domain.Post;
import com.substation.bookshelf.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping()
    public List<Post> getAll() {
        return this.postService.getAll();
    }

    @GetMapping("/{id}")
    public Post findBydId(@PathVariable Long id) {
        return this.postService.findById(id);
    }

    @PostMapping()
    public Post save(@RequestBody Post post) { return this.postService.save(post); }

    @PutMapping()
    public Post update(@RequestBody Post post) { return this.postService.update(post); }
}
