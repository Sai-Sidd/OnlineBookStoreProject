package com.iamneo.ebook.ebook.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;


@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class ContactUs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String email;

    private String name;
    private String subject;
    private String message;
    

}
