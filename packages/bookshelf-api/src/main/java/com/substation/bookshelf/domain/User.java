package com.substation.bookshelf.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Set;

@Entity
@DynamicUpdate
public class User {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String status;
    /* Relations */
    @OneToMany(mappedBy = "author")
    private Set<Post> posts;
    @ManyToMany
    @JoinTable(
            name = "User_Tag",
            joinColumns = { @JoinColumn(name = "user_id", referencedColumnName="id") },
            inverseJoinColumns = { @JoinColumn(name = "tag_id", referencedColumnName="id") }
    )
    private Set<Tag> preferences;
    @ManyToMany
    @JoinTable(
            name = "User_Post",
            joinColumns = { @JoinColumn(name = "user_id", referencedColumnName="id") },
            inverseJoinColumns = { @JoinColumn(name = "post_id", referencedColumnName="id") }
    )
    private Set<Post> likes;
    /* Getters & Setters */
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<Tag> getPreferences() {
        return preferences;
    }

    public void setPreferences(Set<Tag> preferences) {
        this.preferences = preferences;
    }

    @JsonIgnore
    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    @JsonIgnore
    public Set<Post> getLikes() {
        return likes;
    }

    public void setLikes(Set<Post> likes) {
        this.likes = likes;
    }
}
