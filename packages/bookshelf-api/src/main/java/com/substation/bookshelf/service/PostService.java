package com.substation.bookshelf.service;

import com.substation.bookshelf.domain.Post;
import com.substation.bookshelf.repository.PostRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Transactional(readOnly = true)
    public List<Post> getAll() {
        return this.postRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Post findById(Long id) {
        return this.postRepository.findById(id).get();
    }

    @Transactional
    public Post save(Post post) {
        return this.postRepository.save(post);
    }

    @Transactional
    public Post update(Post post) {
        return this.postRepository.save(post);
    }
}
