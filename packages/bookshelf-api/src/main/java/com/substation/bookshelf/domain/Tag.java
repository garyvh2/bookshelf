package com.substation.bookshelf.domain;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Set;

@Entity
@DynamicUpdate
public class Tag {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;
    /* Relations */
    @ManyToMany(mappedBy = "tags")
    private Set<Post> posts;
    @ManyToMany(mappedBy = "preferences")
    private Set<User> users;
    /* Getters & Setters*/
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
