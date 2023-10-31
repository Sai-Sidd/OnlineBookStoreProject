package com.iamneo.ebook.ebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import com.iamneo.ebook.ebook.dto.ContactDto;
import com.iamneo.ebook.ebook.service.ContactService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/addMessage")
    public ResponseEntity<String> addNewMessage(@RequestBody ContactDto contactDto){
        return contactService.addDetail(contactDto);
    }   
}