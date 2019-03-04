package com.substation.bookshelf.repository;

import com.substation.bookshelf.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
