import { getExperiencesOrdered } from "@/src/lib/db/queries";
import { NextResponse } from "next/server";

export async function GET() {
  const experiences = await getExperiencesOrdered();
  return NextResponse.json({ experiences });
}
