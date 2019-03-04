package com.substation.bookshelf.service;

import com.substation.bookshelf.domain.Tag;
import com.substation.bookshelf.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Transactional(readOnly = true)
    public List<Tag> getAll() {
        return this.tagRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Tag findById(Long id) {
        return this.tagRepository.findById(id).get();
    }

    @Transactional
    public Tag save(Tag tag) {
        return this.tagRepository.save(tag);
    }

    @Transactional
    public Tag update(Tag tag) {
        return this.tagRepository.save(tag);
    }
}
