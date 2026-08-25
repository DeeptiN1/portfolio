---
title: API documentation
parent: Developer documentation
nav_order: 2
---

# API documentation
{: .no_toc }
Documentation of a free REST API for exercises from [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb).

----------------------

> **Context**
> - **Audience:** Backend and mobile developers integrating the ExerciseDB REST API.
> - **My role:** Wrote the full reference for authentication, endpoint, parameters, sample request/response, and response codes.
> - **Tools:** Markdown, Jekyll, cURL.
> - **Outcome:** A self-service reference a developer can use to authenticate and make a successful call without outside help.
{: .note }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Body part ExerciseDB API
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

## REST endpoint
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

The preceding request (`limit=5`) returns an array of 5 exercise objects. One representative object is shown below while the rest follow the same schema.

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
  }
]
```

## Response schema definitions
The response of the body part exercise API is an array of exercise objects in JSON format.

| Exercise object key | Description                                    | Type   | Sample Value                                     |
|:--------------------|:-----------------------------------------------|:-------|:--------------------------------------------------|
| bodyPart            | The body part for which to fetch the exercise. | String | "back"                                            |
| id                  | Unique database identifier of the exercise.    | String | "0015"                                            |
| name                | Name of the exercise.                          | String | "assisted parallel close grip pull-up"            |
| target              | Targeted body part for exercise.               | String | "lats"                                            |
| instructions        | Exercise steps. See [Sample response](#sample-response) for the full array. | Array | `["Adjust the machine to your desired weight and height.", ...]` |
| equipment           | Exercise equipment.                            | String | "leverage machine"                                |
| gifUrl              | GIF-formatted image URL of the exercise.       | String | "https://v2.exercisedb.io/image/1SHadaWOnoKwY1"   |
| secondaryMuscles    | List of muscles the exercise focuses on.       | Array  | `["biceps", "forearms"]`                          |

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

## Error responses

Error responses return a JSON body with a `message` field. The `401` and `403` bodies below are captured directly from the live API. The `404` body is representative, since triggering it requires a resource that doesn't exist on a specific exercise ID rather than a bad request shape.

**401 Unauthorized**—missing or invalid API key:
```json
{
  "message": "Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info."
}
```

**403 Forbidden**—API key not subscribed to this API:
```json
{
  "message": "You are not subscribed to this API."
}
```

**404 Not Found**—requested resource does not exist (representative example):
```json
{
  "message": "Resource not found."
}
```

## Rate limits

RapidAPI enforces rate limits per subscription plan. Exceeding your plan's quota returns a `429` status with this body (captured from the live API):
```json
{
  "message": "Too many requests"
}
```

Check your current plan's quota on the [ExerciseDB pricing tab on RapidAPI](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/pricing). Limits vary by plan and change over time, so this reference doesn't hardcode a specific number.

## See also

[GET /exercises/equipment/{type}]({% link docs/open-api-spec-example/exercise-api/index.md %}), a second ExerciseDB endpoint, documented automatically from an OpenAPI spec rather than by hand.


