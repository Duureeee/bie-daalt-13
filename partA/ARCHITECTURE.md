# Architecture Diagram

## System Overview

This project is a simple URL Shortener application.
Users can enter a long URL, and the system generates a short code.
When someone visits the short URL, the backend redirects them to the original URL and increases the click counter.

## Main Components

```mermaid
flowchart LR
    User[User / Browser] --> Frontend[Minimal Frontend]

    Frontend --> API[Backend REST API]

    API --> DB[(Database)]

    API --> Redirect[Redirect Handler]

    Redirect --> Original[Original Long URL]

# Component Description
## Frontend

The frontend provides a simple page where users can:

enter a long URL
create a short URL
view the generated short link
# Backend REST API

## The backend handles the main logic of the system:

receives long URLs
generates random short codes
stores URL data
counts clicks
checks expiration dates
redirects users to the original URL

# Database

## The database stores:

original long URL
generated short code
click count
creation date
expiration date

# Basic Request Flow
## Creating a short URL
User enters a long URL in the frontend.
Frontend sends a POST request to the backend.
Backend generates a random short code.
Backend saves the URL data in the database.
Backend returns the short URL to the frontend.

## Opening a short URL
User opens the short URL.
Backend searches the short code in the database.
Backend checks whether the link is expired.
If the link is valid, click count is increased.
Backend redirects the user to the original URL.