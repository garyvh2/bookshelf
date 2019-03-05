package com.substation.bookshelf.service;

import com.substation.bookshelf.domain.Post;
import com.substation.bookshelf.domain.Tag;
import com.substation.bookshelf.domain.User;
import com.substation.bookshelf.repository.PostRepository;
import com.substation.bookshelf.repository.TagRepository;
import com.substation.bookshelf.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final TagRepository tagRepository;

    public UserService(UserRepository userRepository, PostRepository postRepository, TagRepository tagRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.tagRepository = tagRepository;
    }

    @Transactional(readOnly = true)
    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    @Transactional(readOnly = true)
    public User findById(Long id) {
        return this.userRepository.findById(id).get();
    }

    @Transactional
    public User save(User user) {
        if(this.userRepository.findByUsername(user.getUsername()).isPresent()) throw new Error("The user is already registered");
        this.tagRepository.saveAll(user.getPreferences());
        return this.userRepository.save(user);
    }

    @Transactional
    public User update(User user) {
        return this.userRepository.save(user);
    }

    @Transactional
    public User addPeferences(Long id, Set<Tag> preferences) {
        User user = this.userRepository.findById(id).get();
        user.setPreferences(preferences);
        return this.userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public Set<Tag> getPreferences(Long id) {
        return this.userRepository.findById(id).get().getPreferences();
    }

    @Transactional
    public User likePost(Long userId, Long postId) {
        User user = this.userRepository.findById(userId).get();
        Post post = this.postRepository.findById(postId).get();
        user.getLikes().add(post);
        return this.userRepository.save(user);
    }

    @Transactional
    public User unlikePost(Long userId, Long postId) {
        User user = this.userRepository.findById(userId).get();
        Post post = this.postRepository.findById(postId).get();
        user.getLikes().remove(post);
        return this.userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public User login(User user) {
        return this.userRepository.findByUsername(user.getUsername()).get();
    }

    @Transactional(readOnly = true)
    public Set<Post> getMyPosts(Long id) {
        return this.userRepository.findById(id).get().getPosts();
    }

    @Transactional(readOnly = true)
    public Set<Post> getLiked(Long id) {
        return this.userRepository.findById(id).get().getLikes();
    }

    @Transactional(readOnly = true)
    public Set<Post> getSuggested(Long id) {
        List<Post> posts = this.postRepository.findAll();
        Set<Tag> preferences = this.userRepository.findById(id).get().getPreferences();

        return posts.stream().filter(post -> post.getTags().stream().anyMatch(tag -> preferences.contains(tag))).collect(Collectors.toSet());
    }
}
