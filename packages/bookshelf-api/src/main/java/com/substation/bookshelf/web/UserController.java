package com.substation.bookshelf.web;

import com.substation.bookshelf.domain.Post;
import com.substation.bookshelf.domain.Tag;
import com.substation.bookshelf.domain.User;
import com.substation.bookshelf.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<User> getAll() {
        return this.userService.getAll();
    }

    @GetMapping("/{id}")
    public User findBydId(@PathVariable Long id) {
        return this.userService.findById(id);
    }

    @PostMapping()
    public User save(@RequestBody User user) { return this.userService.save(user); }

    @PutMapping()
    public User update(@RequestBody User user) { return this.userService.update(user); }

    @PutMapping("/{id}/preferences")
    public User updatePreferences(@PathVariable Long id, @RequestBody Set<Tag> preferences) { return this.userService.addPeferences(id, preferences); }

    @GetMapping("/{id}/preferences")
    public Set<Tag> getPreferences(@PathVariable Long id) { return this.userService.getPreferences(id); }

    @GetMapping("/{userId}/like/{postId}")
    public User likePost(@PathVariable Long userId, @PathVariable Long postId) { return this.userService.likePost(userId,postId); }

    @GetMapping("/{userId}/unlike/{postId}")
    public User unlikePost(@PathVariable Long userId, @PathVariable Long postId) { return this.userService.unlikePost(userId,postId); }

    @PostMapping("/login")
    public User login(@RequestBody User user) { return this.userService.login(user); }

    @GetMapping("/{id}/posts")
    public Set<Post> getMyPosts(@PathVariable Long id) {
        return this.userService.getMyPosts(id);
    }

    @GetMapping("/{id}/liked")
    public Set<Post> getLiked(@PathVariable Long id) {
        return this.userService.getLiked(id);
    }

    @GetMapping("/{id}/suggested")
    public Set<Post> getSuggested(@PathVariable Long id) {
        return this.userService.getSuggested(id);
    }

    @GetMapping("/{id}/allposts")
    public List<Post> getAllPosts(@PathVariable Long id) {
        return this.userService.getAllPosts(id);
    }
}
