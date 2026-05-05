# CLAUDE.md

## Project Context

This project is a URL Shortener application created for an AI-Assisted Software Construction assignment.

The application should allow users to enter a long URL and receive a shorter URL.
When the short URL is opened, the system redirects the user to the original URL.

## Core Requirements

The project should include the following features:

- Generate a random short code for each long URL
- Store the original URL and short code
- Redirect users from short URL to original URL
- Count how many times each short URL is clicked
- Support expiration dates for short URLs
- Provide a minimal frontend

## Preferred Implementation Style

Use beginner-friendly and readable code.

Important rules:

- Keep the code simple
- Use clear variable names
- Add comments for important logic
- Avoid unnecessary complexity
- Make each feature easy to test

## Planned Stack

### Backend

- Node.js
- Express.js

### Frontend

- HTML
- CSS
- JavaScript

### Storage

Early version may use simple in-memory storage or JSON file storage.
Later version may use SQLite if needed.

## API Design Plan

### POST /api/shorten

Purpose:

Create a short URL from a long URL.

Expected request:

```json
{
  "longUrl": "https://example.com",
  "expiresAt": "2026-05-10"
}