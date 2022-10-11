import { Payload } from "payload";
import { User, Page, Site } from "./payload-types";

export const seed = async (payload: Payload): Promise<void> => {
  const site1 = await payload.create<Site>({
    collection: 'sites',
    data: {
      title: 'Site 1',
    }
  });

  const site2 = await payload.create<Site>({
    collection: 'sites',
    data: {
      title: 'Site 2',
    }
  });

  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  await payload.create<User>({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      password: 'test',
      firstName: 'Payload',
      lastName: 'CMS',
      roles: ['admin']
    }
  })

  // This user will be created with the default role of `editor`
  await payload.create<User>({
    collection: 'users',
    data: {
      email: 'site1@payloadcms.com',
      password: 'test',
      firstName: 'Site1',
      lastName: 'User',
      sites: [site1.id]
    }
  })

  // This page will be created and assigned to Site 1
  await payload.create<Page>({
    collection: 'pages',
    data: {
      _status: 'published',
      title: 'Site 1 Home',
      content: [
        {
          children: [
            {
              text: "Here's some content for Site 1's home page."
            }
          ]
        }
      ],
      site: site1.id
    }
  })

  // This page will be created and assigned to Site 2
  await payload.create<Page>({
    collection: 'pages',
    data: {
      _status: 'published',
      title: 'Site 2 Home',
      content: [
        {
          children: [
            {
              text: "Here's some content for Site 2's home page."
            }
          ]
        }
      ],
      site: site2.id
    }
  })
}