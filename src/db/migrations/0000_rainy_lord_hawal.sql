CREATE TABLE "rooms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"descripton" text,
	"create_at" timestamp DEFAULT now() NOT NULL
);
