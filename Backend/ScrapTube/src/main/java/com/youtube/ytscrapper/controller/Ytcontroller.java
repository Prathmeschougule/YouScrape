package com.youtube.ytscrapper.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.youtube.ytscrapper.services.YtService;

@RestController
@CrossOrigin(origins = "https://youscrape.netlify.app/")
public class Ytcontroller {

    @Autowired
    private YtService ytService;

    @PostMapping("/processing")
    public ResponseEntity<?> postvideoLink(@RequestParam String videoLink) {
        String videoId = ytService.extractVideoId(videoLink);
        if (videoId != null) {
            try {
                JsonNode videoDetails = ytService.getVideoDetails(videoId);
                String title = videoDetails.path("title").asText();
                String description = videoDetails.path("description").asText();
                String thumbnailUrl = videoDetails.path("thumbnails").path("standard").path("url").asText();
                String[] tags = new ObjectMapper().treeToValue(videoDetails.path("tags"), String[].class);

                Map<String, Object> response = new HashMap<>();
                response.put("vtitle", title);
                response.put("vdesc", description);
                response.put("thumbnailUrl", thumbnailUrl);
                response.put("vtags", tags);

                return ResponseEntity.ok(response);
            } catch (Exception e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing video link");
            }
        }
        return ResponseEntity.badRequest().body("Invalid video link");
    }
}