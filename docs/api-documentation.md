---
title: API Documentation
nav_order: 3
---

# API Documentation
{: .no_toc }

Documentation of a free REST exercise API from [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb).

## Body part exercise API
`/exercises/bodyPart/{bodyPart}` provides information about exercises for the specified body part.

## Authentication and authorization
Follow these steps to retrieve a valid API key to execute the API:
* Create an account on [Rapid API](https://rapidapi.com/auth/sign-up).
* Sign in to the account.
* From the console, go to:
  `Apps → My Apps → default_application_<application-id> → Authorization → Application Key`
* Copy the API key.
* Use the API key in the header of the API request.

### Header parameters

| Parameter             | Description                               |         
|:----------------------|:------------------------------------------|
| x-rapidapi-key        | API key required for a successful request |

## REST Endpoint
`GET /exercises/bodyPart/{bodyPart}`
retrieves a list of exercises based on the specified body part.

## Parameters
The REST endpoint has a required path parameter and can use optional query parameters as follows:

### Path parameters

| Parameter    | Description                                 | Required/Optional | Sample Value   |
|:-------------|:--------------------------------------------|:------------------|:---------------|
| {bodyPart}   | Name of the body part to get exercises for. | Required          | “back”         |

### Query parameters

| Parameter | Description                                                                                               | Required/Optional | Sample Value |
|:----------|:----------------------------------------------------------------------------------------------------------|:------------------|:-------------|
| limit     | Number of exercises retrieved for the body part.                                                          | Optional          | "5"          |
| offset    | Numerical position from the entire result set. Excludes first offset number of exercises from result set. | Optional          | "2"          |


## Sample request

```
curl --request GET --url 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=5&offset=2' --header 'x-rapidapi-key: <API_Key>'
```

## Sample response
```json
[
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/1SHadaWOnoKwY1",
    "id": "0015",
    "name": "assisted parallel close grip pull-up",
    "target": "lats",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "instructions": [
      "Adjust the machine to your desired weight and height.",
      "Place your hands on the parallel bars with a close grip, palms facing each other.",
      "Hang from the bars with your arms fully extended and your feet off the ground.",
      "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
      "Continue pulling until your chin is above the bars.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/jPrVqKIwBKzg2y",
    "id": "0017",
    "name": "assisted pull-up",
    "target": "lats",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "instructions": [
      "Adjust the machine to your desired weight and height settings.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Hang with your arms fully extended and your feet off the ground.",
      "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
      "Continue pulling until your chin is above the handles.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/oFMmM2Lt5zAGxc",
    "id": "1431",
    "name": "assisted standing chin-up",
    "target": "lats",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "instructions": [
      "Adjust the machine to your desired assistance level.",
      "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
      "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
      "Continue pulling until your chin is above the bar.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/YPPyG7BunfLsje",
    "id": "1432",
    "name": "assisted standing pull-up",
    "target": "lats",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "instructions": [
      "Adjust the machine to your desired weight and height settings.",
      "Stand facing the machine with your feet shoulder-width apart.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Engage your lats and biceps, and pull yourself up towards the handles.",
      "Pause for a moment at the top, squeezing your back muscles.",
      "Slowly lower yourself back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/tDLUVhupOY5SO8",
    "id": "1314",
    "name": "back extension on exercise ball",
    "target": "spine",
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ],
    "instructions": [
      "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.",
      "Position your hands behind your head or crossed over your chest.",
      "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  }
]
```

## Response schema definitions
The response of the body part exercise API is an array of exercise objects in JSON format.

| Exercise object key | Description                                    | Type   | Sample Value                                                                                                                                                                                                                                                                                         |
|:--------------------|:-----------------------------------------------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bodyPart            | The body part for which to fetch the exercise. | String | “back”                                                                                                                                                                                                                                                                                               |
| id                  | Unique database identifier of the exercise.    | String | "1314"                                                                                                                                                                                                                                                                                               |
| name                | Name of the exercise.                          | String | “back extension on exercise ball”                                                                                                                                                                                                                                                                    |
| target              | Targeted body part for exercise.               | String | “spine”                                                                                                                                                                                                                                                                                              |
| instructions        | Exercise steps.                                | Array  | ["Place the stability ball on the ground and lie face down on top of it, hips resting on the ball and feet against a wall or other stable surface.", "Position hands behind your head or crossed over your chest."]                                                                                  |
| equipment           | Exercise equipment.                            | String | “stability ball”                                                                                                                                                                                                                                                                                     |
| gifUrl              | GIF-formatted image URL of the exercise.       | String | “https://v2.exercisedb.io/image/tDLUVhupOY5SO8”                                                                                                                                                                                                                                                      |
| secondaryMuscles    | List of muscles the exercise focuses on.       | Array  | [ "glutes","hamstrings"]                                                                                                                                                                                                                                                                             |

## Response codes
* Success response code

| Response code | Meaning                              |
|:--------------|:-------------------------------------|
| 200 OK        | Request succeeded, fetched response. |

* Error response codes

| Response code    | Meaning                                                  |
|:-----------------|:---------------------------------------------------------|
| 400 Bad Request  | Malformed or invalid parameter value.                    |
| 401 Unauthorized | Invalid API key.                                         |
| 403 Forbidden    | API key does not have permission to perform the request. |
| 404 Not Found    | Requested resource does not exist.                       |
| 500 Server Error | Server-side error.                                       |