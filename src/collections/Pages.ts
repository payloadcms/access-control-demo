import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrHasSiteAccessOrPublished } from '../access/isAdminHasSiteAccessOrPublished';
import { isAdminOrHasSiteAccess } from '../access/isAdminOrHasSiteAccess';
import { isLoggedIn } from '../access/isLoggedIn';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    // Anyone logged in can create
    create: isLoggedIn,
    // Only admins or editors with site access can update
    update: isAdminOrHasSiteAccess(),
    // Admins or editors with site access can read,
    // otherwise users not logged in can only read published
    read: isAdminOrHasSiteAccessOrPublished,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'site',
      type: 'relationship',
      relationTo: 'sites',
      required: true,
      // If user is not admin, set the site by default
      // to the first site that they have access to
      defaultValue: ({ user }) => {
        if (!user.roles.includes('admin') && user.sites?.[0]) {
          return user.sites[0];
        }
      }
    }
  ],
}