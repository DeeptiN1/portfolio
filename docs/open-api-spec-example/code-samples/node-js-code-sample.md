---
title: Node.js code sample
parent: Code Samples
nav_order: 2
---

# Node.js code sample

To execute the API using Node.js, do the following:

* Ensure the latest recommended Node.js version is installed.
* Create a file `fetch_exercises.js`

```
const https = require('https');

const options = {
    hostname: 'exercisedb.p.rapidapi.com',
    path: '/exercises/equipment/assisted?limit=1&offset=3',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'X-RapidAPI-Key': 'API_KEY' // Replace with the actual API key value
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log("Response Code:", res.statusCode);
        console.log("Response Body:", JSON.stringify(JSON.parse(data), null, 2));
    });
});

req.on('error', (error) => {
    console.error("Error fetching data:", error.message);
});

req.end();
```

* Replace API_KEY with the actual API key value.
* Run the Node.js code in a command-line interface or terminal: 
```shell
node fetch_exercises.js
```
* Expect the following output:
```shell
Response Code: 200
Response Body: [
  {
    "bodyPart": "waist",
    "equipment": "assisted",
    "gifUrl": "https://v2.exercisedb.io/image/ey4Z0XPQHgcfiZ",
    "id": "0013",
    "name": "assisted lying leg raise with throw down",
    "target": "abs",
    "secondaryMuscles": [
      "hip flexors",
      "quadriceps"
    ],
    "instructions": [
      "Lie flat on your back with your legs extended and your arms by your sides.",
      "Place your hands under your glutes for support.",
      "Engage your core and lift your legs off the ground, keeping them straight.",
      "Raise your legs until they are perpendicular to the ground.",
      "Lower your legs back down to the starting position.",
      "Simultaneously, throw your legs down towards the ground, keeping them straight.",
      "Raise your legs back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  }
]
```
