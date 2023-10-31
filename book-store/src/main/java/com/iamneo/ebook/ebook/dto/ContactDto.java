package com.iamneo.ebook.ebook.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactDto {
    private String email;
    private String name;
    private String subject;
    private String message;
    
}
