import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const websiteLeads = sqliteTable(
  'website_leads',
  {
    id: text('id').primaryKey(),
    payloadHash: text('payload_hash').notNull(),
    createdAt: text('created_at').notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    goal: text('goal').notNull(),
    package: text('package').notNull(),
    website: text('website').notNull(),
    phone: text('phone').notNull(),
    message: text('message').notNull(),
    campaign: text('campaign').notNull(),
    notificationStatus: text('notification_status')
      .notNull()
      .default('pending'),
    notificationAttempts: integer('notification_attempts').notNull().default(0),
  },
  (table) => [
    index('idx_website_leads_email_created').on(table.email, table.createdAt),
  ],
);
