ALTER TABLE website_leads ADD COLUMN retention_status TEXT NOT NULL DEFAULT 'unreviewed'
  CHECK (retention_status IN ('unreviewed', 'no_contract', 'contract', 'legal_hold'));
--> statement-breakpoint
CREATE INDEX idx_website_leads_retention_created ON website_leads (retention_status, created_at);
