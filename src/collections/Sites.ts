import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";

export const Sites: CollectionConfig = {
  slug: 'sites',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    // Only admins can create
    create: isAdmin,
    // Only admins or editors with site access can read
    read: isAdminOrHasSiteAccess('id'),
    // Only admins can update
    update: isAdmin,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    }
  ]
}