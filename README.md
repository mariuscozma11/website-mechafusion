# Official Website of MechaFusion ( Official Polytehnic University of Timisoara Robotics Club)

This project is a simple landing page created for the official robotics club of the Politehnica University of Timișoara.  
Its purpose is to present the club's mission, activities, and team, and to offer an easy way for students to get in touch or join.

---

## Table of Contents

- [General Overview](#general-overview)
- [Purpose](#purpose)
- [Features](#features)
- [Target Audience](#target-audience)
- [Design & UI](#design--ui)
- [Proposed Tech Stack](#proposed-tech-stack)
- [Project Structure](#project-structure)
- [Development Plan](#development-plan)
- [Future Tasks](#future-tasks)
- [License](#license)

---

## General Overview

This project is a simple, static landing page created for the official robotics club of the Politehnica University of Timișoara.  
It is designed to present the club’s identity, activities, and team in a clear and engaging manner, while offering a direct way for interested students to get involved.

The website is built with clarity, simplicity, and responsiveness in mind, ensuring smooth navigation across all modern devices.  
From the start, the project was approached with the goal of being efficient and lightweight, while also optimized for SEO to ensure better visibility in search engines and to encourage new members to discover and join the club.

---

## Purpose

The purpose of this website is to serve as the official online presence of the university's robotics club. It aims to:

- Represent the identity and values of the robotics club
- Showcase competitions, past projects, and achievements as a public portfolio
- Provide an ergonomic and accessible way for students to apply via a contact form

In the future, the site may also include a blog section or articles related to robotics and the club’s activities.

---

## Features

- Clean, modern landing page design
- Responsive layout for mobile and desktop
- Hero section with call-to-action
- About the club section
- Competitions and projects showcase
- Student sign-up form (name, email, message)
- Footer with contact info and social media links

---

## Target Audience

The website is primarily intended for students of the Politehnica University of Timișoara.  
Regardless of their faculty or field of study, all students are welcome to explore the club and get involved.  
The robotics club includes multiple departments (mechanical design, electronics, programming, marketing, etc.), offering opportunities for students with a wide range of interests and skill sets.

---

## Proposed Tech Stack

Since the project is a static website with no dynamic content or backend functionality (at this stage), the most appropriate approach is to use a Static Site Generator (SSG).  
I chose **Next.js** as the SSG framework, built on top of React, for its balance between developer experience and performance. It enables fast page loads, automatic routing, SEO optimization, and easy deployment all while keeping the project maintainable and scalable for future needs.

To simplify the frontend design process and maintain a clean, modern look, I plan to use **Tailwind CSS**.  
Its utility-first approach helps me style elements directly in the markup without writing custom CSS from scratch, which fits well with my solo workflow.  
The design will likely be based on a Figma layout, which Tailwind integrates with easily and allows me to implement responsive, consistent UI components quickly.

---

## Project Structure

```bash
📁 root
```
## Development Plan

First iteration of the design was directly designed into the frontend, which now I see why it's inefficient. I've spent a bit too much time on that, just to talk to the client to tell me that he doesn't quite like the design. I'm not too inclined to UI design and front end development in general, but this was a design oriented project so I shoud give my utmost interest to make it look good for the client. So i started making a design in Figma first, and sending screenshots to the client until he's satisfied. It's a more efficient way to iterate trough designs until the client's satisfaction. With client collaboration I locked in a Hero Section design, with navbar. It's a simple image background Hero Section with overlay opacity and a simple nav bar with nav links, logo and button.
Next step, I want to design the footer element in Figma, and after I am satisfied with a design, I could actually start coding what I have so far, since all my Designy Creative juice is out, and I miss coding. Also, I want to make the nav bar transition from the normal position with transparent background, with one with a 80% opacity and rounded bottom edges on scroll.

---

## License

Project licensed under the MIT License.
