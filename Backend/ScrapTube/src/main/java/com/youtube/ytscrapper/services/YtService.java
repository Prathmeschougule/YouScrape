package com.youtube.ytscrapper.services;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.youtube.ytscrapper.config.YtConfig;

@Service
public class YtService {

    @Autowired
    private YtConfig ytConfig;

    public JsonNode getVideoDetails(String videoId) throws Exception {

        String apiUrl = ytConfig.getApiUrl();
        String apiKey = "key=" + ytConfig.getApiKey();
        String idParam = "id=" + videoId;
        String partParam = "part=snippet";

        String url = apiUrl + "?" + apiKey + "&" + partParam + "&" + idParam;
        RestTemplate restTemplate = new RestTemplate();

        String response = restTemplate.getForObject(url, String.class);

        System.out.println(response);

        // string Object to JSON Object
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readTree(response).path("items").get(0).path("snippet");

        // return null;
    }

    public String extractVideoId(String videoLink) {

        Pattern pattern1 = Pattern.compile(
                "(?<=watch\\?v=|/videos/|embed/|youtu\\.be/|/v/|/e/|watch\\?feature=player_embedded&v=|%2Fvideos%2F)([^\"&?/\\s]{11})",
                Pattern.CASE_INSENSITIVE);
        Matcher matcher1 = pattern1.matcher(videoLink);

        Pattern pattern2 = Pattern.compile("youtu\\.be/([a-zA-Z0-9_-]{11})", Pattern.CASE_INSENSITIVE);
        Matcher matcher2 = pattern2.matcher(videoLink);

        if (matcher1.find()) {
            return matcher1.group(1);
        } else if (matcher2.find()) {
            return matcher2.group(1);
        }
        return null;
    }

}
