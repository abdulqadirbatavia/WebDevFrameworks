# Headless CMS Quiz Project

## Overview
This project demonstrates a modern JAMstack architecture using Ghost as a headless CMS and Eleventy as a static site generator.

## Features
- API-driven content from Ghost CMS
- Modern responsive design
- Dynamic question rendering
- Content filtering by tags

## Setup
1. Start Ghost: `cd ghost-cms/docker && docker-compose up -d`
2. Start Quiz: `cd quiz-game && npx @11ty/eleventy --serve`
3. Access:
   - Ghost Admin: http://localhost:2368/ghost
   - Quiz Site: http://localhost:8080

## Architecture
- **Ghost CMS**: Content management backend
- **Eleventy**: Static site generator frontend  
- **REST API**: Fetches content from Ghost
- **Custom CSS**: Modern gradient design

## Content Management
- Add questions as posts in Ghost
- Tag posts with `question` 
- Content automatically appears on quiz site

## Maintenance
- Update CSS in `public/css/index.css`
- Modify templates in `_includes/`
- Add new question pages in `questions/`