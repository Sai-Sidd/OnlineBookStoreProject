package com.iamneo.ebook.ebook.repository;

import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

import com.iamneo.ebook.ebook.dto.ContactDto;
import com.iamneo.ebook.ebook.entity.ContactUs;

public interface ContactRepository extends CrudRepository<ContactUs, String>{
    Optional<ContactUs> findByEmail(String string);

}
