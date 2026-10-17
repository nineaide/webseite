CREATE TABLE `website_leads` (
	`id` text PRIMARY KEY NOT NULL,
	`payload_hash` text NOT NULL,
	`created_at` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`goal` text NOT NULL,
	`package` text NOT NULL,
	`website` text NOT NULL,
	`phone` text NOT NULL,
	`message` text NOT NULL,
	`campaign` text NOT NULL,
	`notification_status` text DEFAULT 'pending' NOT NULL,
	`notification_attempts` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_website_leads_email_created` ON `website_leads` (`email`,`created_at`);