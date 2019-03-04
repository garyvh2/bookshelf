package com.substation.bookshelf.repository;

import com.substation.bookshelf.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
