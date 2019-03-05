package com.substation.bookshelf.service;

import com.substation.bookshelf.domain.Comment;
import com.substation.bookshelf.domain.Post;
import com.substation.bookshelf.repository.PostRepository;
import com.substation.bookshelf.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final TagRepository tagRepository;

    public PostService(PostRepository postRepository, TagRepository tagRepository) {
        this.postRepository = postRepository;
        this.tagRepository = tagRepository;
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
        this.tagRepository.saveAll(post.getTags());
        return this.postRepository.save(post);
    }

    @Transactional
    public Post update(Post post) {
        return this.postRepository.save(post);
    }

    @Transactional(readOnly = true)
    public Set<Comment> getComments(Long id) {
        return findById(id).getComments();
    }
}
