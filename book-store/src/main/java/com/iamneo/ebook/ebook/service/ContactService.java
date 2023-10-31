package com.iamneo.ebook.ebook.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.iamneo.ebook.ebook.dto.ContactDto;
import com.iamneo.ebook.ebook.entity.ContactUs;
import com.iamneo.ebook.ebook.repository.ContactRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    public ResponseEntity<String> addDetail(ContactDto contactDto) {
        Optional<ContactUs> isUserExists = contactRepository.findByEmail(contactDto.getEmail());

        if (isUserExists.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Message error found");
        } else {
            ContactUs n = ContactUs.builder()
                    .email(contactDto.getEmail())
                    .subject(contactDto.getSubject())
                    .name(contactDto.getName())
                    .message(contactDto.getMessage())
                    .build();
            contactRepository.save(n);
            return ResponseEntity.status(HttpStatus.OK).body("Message saved successfully");
        }
    }
}
