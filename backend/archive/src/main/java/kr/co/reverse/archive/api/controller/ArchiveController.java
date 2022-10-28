package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.service.ArchiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/archive")
@RequiredArgsConstructor
public class ArchiveController {

    private final ArchiveService archiveService;


    @PostMapping
    public ResponseEntity createArchive(@RequestBody ArchiveReq archiveReq) {
        archiveService.createArchive(archiveReq);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

//    @GetMapping
//    public ResponseEntity<? extends > getArchives() {
//        archiveService
//    }
}
