---
title: User guide
parent: Developer documentation
nav_order: 1
---

# User guide
{: .no_toc }
User guide for free REST APIs for exercises from [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb).

-----------------------

> **Context**
> - **Audience:** Developers evaluating or newly integrating the ExerciseDB API into a fitness app.
> - **My role:** Wrote the getting-started guide and linked it to the API reference for auth details.
> - **Tools:** Markdown, Jekyll, cURL, Postman.
> - **Outcome:** An end-to-end path from the purpose of the API to a first successful authenticated request.
{: .note }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Prerequisites

* A free [RapidAPI](https://rapidapi.com/) account, subscribed to the [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb).
* Basic familiarity with REST APIs and cURL or a REST client such as Postman.

## Quickstart

1. Create a RapidAPI account and subscribe to [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) on the Basic (free) plan.
2. Get your API key. See [How to get an API key](#how-to-get-an-api-key) below.
3. Make your first request:

   ```
   curl --request GET --url 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=1' --header 'x-rapidapi-key: <API_Key>'
   ```

4. Interpret the response. A successful request returns a `200` status and a JSON array of exercise objects (`id`, `name`, `target`, `equipment`, and so on). See [Response schema definitions]({% link docs/api-documentation.md %}#response-schema-definitions) for the full field reference, or [Error responses]({% link docs/api-documentation.md %}#error-responses) if you get a `4xx` status instead.

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
You can execute ExerciseDB APIs using cURL or Postman.

### Executing ExerciseDB APIs using cURL

```
curl --request GET --url 'https://exercisedb.p.rapidapi.com/exercises' --header 'x-rapidapi-key: <API_Key>'
```

### Executing ExerciseDB APIs using Postman
Set the header key “x-rapidapi-key” with the API key value.

![Exercise API execution in Postman](../images/postman-exercise-api.png)

## Full API reference

This guide covers getting started. For the complete reference, refer to the following pages:

* [API documentation]({% link docs/api-documentation.md %})—the hand-written reference for `GET /exercises/bodyPart/{bodyPart}`, including error responses and rate limits.
* [GET /exercises/equipment/{type}]({% link docs/open-api-spec-example/exercise-api/index.md %})—a second endpoint, documented automatically from an OpenAPI spec rather than by hand. See [how that pipeline works]({% link docs/open-api-spec-example/pipeline.md %}).