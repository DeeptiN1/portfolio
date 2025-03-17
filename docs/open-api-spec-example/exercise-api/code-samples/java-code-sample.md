---
title: Java code sample
parent: Code Samples
nav_order: 1
---

# Java code sample

----------------------

To execute the API using Java, do the following:

* Ensure the latest recommended JDK version is installed.
* Create a file `ExerciseDBApiRequest.java`

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ExerciseDBApiRequest {
    public static void main(String[] args) {
        try {
            // Define API endpoint
            String apiUrl = "https://exercisedb.p.rapidapi.com/exercises/equipment/assisted?limit=1&offset=3";
            // Replace with the actual API key value
            String apiKey = "API_KEY";
    
            // Create URL object
            URL url = new URL(apiUrl);
    
            // Open connection
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
    
            // Set request method to GET
            connection.setRequestMethod("GET");
    
            // Set request headers
            connection.setRequestProperty("Accept", "application/json");
            connection.setRequestProperty("X-RapidAPI-Key", apiKey);
    
            // Get response code
            int responseCode = connection.getResponseCode();
            System.out.println("Response Code: " + responseCode);
    
            // Read response if successful (200 OK)
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader
                        (connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();
    
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
    
                // Print the response body
                System.out.println("Response Body: " + response.toString());
            } else {
                System.out.println("Failed to fetch data. HTTP Response Code: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

* Replace API_KEY with the [API Key value](../../api-execution/api-key).
* Compile the Java file in a command-line interface or terminal:
```shell
javac ExerciseDBApiRequest.java
```
* Run the Java program in a command-line interface or terminal:
```shell
java ExerciseDBApiRequest.java
```
* Expect the following output:
```shell
Response Code: 200
Response Body: [{"bodyPart":"waist","equipment":"assisted","gifUrl":"https://v2.exercisedb.io
/image/ey4Z0XPQHgcfiZ","id":"0013","name":"assisted lying leg raise with throw down",
"target":"abs","secondaryMuscles":["hip flexors","quadriceps"],"instructions":["Lie flat on 
your back with your legs extended and your arms by your sides.","Place your hands under your 
glutes for support.","Engage your core and lift your legs off the ground, keeping 
them straight.","Raise your legs until they are perpendicular to the ground.","Lower your legs 
back down to the starting position.","Simultaneously, throw your legs down towards the ground, 
keeping them straight.","Raise your legs back up to the starting position.","Repeat for the 
desired number of repetitions."]}]
```
