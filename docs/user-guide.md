---
title: User Guide
nav_order: 3
---

# User Guide
{: .no_toc }
User guide for free REST APIs for exercises from [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb).

-----------------------

## What are ExerciseDB APIs?
ExerciseDB APIs are freely available REST APIs from [rapidapi.com](https://rapidapi.com/search/Health%20and%20Fitness?sortBy=ByRelevance), providing access to a comprehensive database of more than 1300 exercises for different body parts.

## Where can ExerciseDB APIs be used?
Fitness apps can integrate ExerciseDB APIs to help users find detailed and reliable exercise data that is customized to body parts, target muscles or exercise equipment.

![ExerciseDB API integration flow](../images/exercise-api-integration.png)

## What kind of HTTP requests can be used?
GET API requests are executed on the “exercises” resource.

## How to access ExerciseDB APIs?
[ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) provides information about all APIs for exercises. All requests need a valid API key.

## How to get an API key?
Refer to [Authentication and Authorization]({% link docs/api-documentation.md %}#authentication-and-authorization) to get an API key.

## How to execute ExerciseDB APIs?
ExerciseDB APIs can be executed by using cURL or Postman.

### Executing ExerciseDB APIs using cURL

```
curl --request GET --url 'https://exercisedb.p.rapidapi.com/exercises' --header 'x-rapidapi-key: <API_Key>'
```

### Executing ExerciseDB APIs using Postman
Set the header key “x-rapidapi-key” with the API key value.

![Exercise API execution in Postman](../images/postman-exercise-api.png)