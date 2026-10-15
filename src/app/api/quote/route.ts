import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

/* Shared intake endpoint for every quote request on the site:
   the dedicated quote page, the home quick quote form, and the
   contact form. Validates the payload, stores the lead when a
   database is reachable, and always answers politely. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  propertyType?: string;
  urgency?: string;
  contactPreference?: string;
  message?: string;
  source?: string;
  company?: string; // honeypot field, humans never see it
};

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function getClient(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null;
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  try {
    const client = new PrismaClient();
    globalForPrisma.prisma = client;
    return client;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  let body: QuotePayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["That request came through garbled. Please try again."] },
      { status: 400 }
    );
  }

  // Honeypot: bots fill every field, humans never see this one.
  // Answer success and quietly drop the submission.
  if ((body.company ?? "").trim().length > 0) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const service = (body.service ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: string[] = [];
  if (name.length < 2) errors.push("Please tell us your name.");
  if (phone.replace(/[^0-9]/g, "").length < 7)
    errors.push("Please add a phone number we can reach you on.");
  if (email.length > 0 && !EMAIL_RE.test(email))
    errors.push("That email address does not look right.");
  if (service.length < 2) errors.push("Please pick the service you need.");
  if (message.length < 10)
    errors.push("Please describe the job in a few words so we can prepare.");

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  let stored = false;
  const prisma = getClient();
  if (prisma) {
    try {
      await prisma.quoteRequest.create({
        data: {
          name: name.slice(0, 80),
          phone: phone.slice(0, 24),
          email: email ? email.slice(0, 120) : null,
          service: service.slice(0, 60),
          propertyType: (body.propertyType ?? "").trim().slice(0, 20) || null,
          urgency: (body.urgency ?? "").trim().slice(0, 40) || null,
          contactPreference: (body.contactPreference ?? "").trim().slice(0, 20) || null,
          message: message.slice(0, 2000),
          source: (body.source ?? "quote").trim().slice(0, 30) || "quote",
        },
      });
      stored = true;
    } catch {
      stored = false;
    }
  }

  return NextResponse.json({ ok: true, stored });
}
