---
title: Python code sample
parent: Code Samples
nav_order: 3
---

# Python code sample

----------------------

To execute the API using Python, do the following:

* Ensure the latest recommended Python version is installed.
* Create a file `fetch_exercises.py`

```python
import requests
import json

# API endpoint
url = "https://exercisedb.p.rapidapi.com/exercises/equipment/assisted"

# Replace with the actual API key value
api_key = "API_KEY"

# Headers for the request
headers = {
    "accept": "application/json",
    "X-RapidAPI-Key": api_key
}

# Query parameters
params = {
    "limit": 1,
    "offset": 3
}

# Send GET request
response = requests.get(url, headers=headers, params=params)

# Check if request was successful
if response.status_code == 200:
    # Pretty-print JSON response
    print("Response Code:", response.status_code)
    print("Response Body:", json.dumps(response.json(), indent=2))
else:
    print("Error:", response.status_code, response.text)
```

* Replace API_KEY with the [API Key value]({{ site.baseurl }}/docs/open-api-spec-example/exercise-api/api-execution/api-key).
* Install the requests library (if not installed):
```shell
pip3 install requests
```

* Run the Python code in a command-line interface or terminal:
```shell
python3 fetch_exercises.py
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

