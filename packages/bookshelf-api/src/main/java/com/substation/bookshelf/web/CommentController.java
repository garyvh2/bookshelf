package com.substation.bookshelf.web;


import com.substation.bookshelf.domain.Comment;
import com.substation.bookshelf.service.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping()
    public List<Comment> getAll() {
        return this.commentService.getAll();
    }

    @GetMapping("/{id}")
    public Comment findBydId(@PathVariable Long id) {
        return this.commentService.findById(id);
    }

    @PostMapping()
    public Comment save(@RequestBody Comment comment) { return this.commentService.save(comment); }

    @PutMapping()
    public Comment update(@RequestBody Comment comment) { return this.commentService.update(comment); }
}
