import { buildConfig } from 'payload/config';
import path from 'path';
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { Users } from './collections/Users';
import { Sites } from './collections/Sites';
import { Media } from './collections/Media';
import { ContactRequests } from './collections/ContactRequests';
import { Pages } from './collections/Pages';
import { seed } from './seed';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    ContactRequests,
    Media,
    Pages,
    Sites,
    Users,
  ],
  editor: lexicalEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),

  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  }
});
