package com.substation.bookshelf.repository;

import com.substation.bookshelf.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
