package com.substation.bookshelf.service;

import com.substation.bookshelf.domain.Comment;
import com.substation.bookshelf.repository.CommentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Transactional(readOnly = true)
    public List<Comment> getAll() {
        return this.commentRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Comment findById(Long id) {
        return this.commentRepository.findById(id).get();
    }

    @Transactional
    public Comment save(Comment comment) {
        return this.commentRepository.save(comment);
    }

    @Transactional
    public Comment update(Comment comment) {
        return this.commentRepository.save(comment);
    }
}
