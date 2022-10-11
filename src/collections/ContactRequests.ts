import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';

export const ContactRequests: CollectionConfig = {
  slug: 'contact-requests',
  access: {
    // Anyone can create, even unauthenticated
    create: () => true,
    // No one can update, ever
    update: () => false,
    // Only admins can read
    read: isAdmin,
    // No one can delete, ever
    delete: () => false,
  },
  fields: [
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
}