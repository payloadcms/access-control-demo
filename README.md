# Payload CMS Access Control Demo

This repository contains an example that showcases how powerful Payload's access control is, and how it can be used to create simple, yet powerful editor experiences where you can control who can do what to a very fine-grained level. 

[Check out the video](https://www.youtube.com/watch?v=DoPLyXG26Dg) that corresponds with this repo.

This is one of Payload's most important features—it's way more powerful than a typical RBAC pattern, which is often inflexible when it comes to document-based or even field-based permissions. With Payload's access control, you can build incredibly powerful and secure apps.

Payload's admin UI automatically responds to the access control that you define. For example, if a user can't edit a document, the "Publish" button will be automatically removed. If a user can't edit a field, the field is automatically set to read-only in the admin UI. If a user can't create new documents in a collection, the "Create New" function will be disabled throughout all of the admin UI.

**The best part is that it's all done in clean, declarative, easy-to-read code.**

In this demo, we'll cover how to:

- Implement and share access control that shows how to create a "multi-tenant"-style infrastructure on top of Payload
- Utilize access control on the collection-level, to restrict who can do what on a collection basis
- Utilize field-level access control to allow users to update some, but not all, fields on a given document
- Open up a collection for "public" creation (in this case, we'll create a Contact Requests collection, which anyone can submit to)
- Restrict who can access `draft` documents
- Auto-generate and re-use TypeScript types based on the shape of your collections
- Seed documents and set up a great developer environment for working locally

## Getting started

To get started with this repo, do the following:

- Clone the repo
- Make an `.env` file by running `cp .env.example .env` in your project directory. Make sure to fill in your MongoDB connection string within this file if necessary
- Run `yarn` or `npm install --legacy-peer-deps`
- Run `yarn dev:seed`
- Go to `http://localhost:3000` in your browser and check it out!

#### Give us a star on GitHub

> If you haven't already, stop by our GitHub page and [**leave us a star**](https://github.com/payloadcms/payload) by clicking on the star icon in the top right corner. This helps us grow and gain exposure within the development community.

#### Join our community on Discord

We've recently started a Discord community for the Payload community to interact in realtime. Often, Discord will be the first to hear about announcements like this move to open-source, and it can prove to be a great resource if you need help building with Payload. [Click here](https://discord.com/invite/r6sCXqVk3v) to join!

#### Get up and running with one line

Getting started is easy—and free forever. Just fire up a new terminal window and run the following command:

```
npx create-payload-app
```
