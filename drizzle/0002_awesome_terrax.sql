ALTER TABLE "users" DROP CONSTRAINT "users_referral_code_unique";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "referral_code" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "referral_code" SET DEFAULT gen_random_uuid()::text;