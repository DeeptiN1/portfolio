---
title: cURL
parent: API Execution
nav_order: 3
---

# API Execution using cURL

----------------------

Use the following cURL command and substitute `API_Key` with the actual [API_Key value]({{ site.baseurl }}/docs/open-api-spec-example/exercise-api/api-execution/api-key).

```shell
curl -X GET "https://exercisedb.p.rapidapi.com/exercises/equipment/assisted?limit=1&offset=3" -H "accept: application/json" -H 'X-RapidAPI-Key: API_Key' | python3 -m json.tool
```

Result:

```shell
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   746  100   746    0     0    802      0 --:--:-- --:--:-- --:--:--   802
[
    {
        "bodyPart": "waist",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/4mzaZNWkQxOJ6i",
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
