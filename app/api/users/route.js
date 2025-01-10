import { NextResponse } from 'next/server';
import { createUser, listUsers } from '@/services/user-service';
import { handleError } from '@/utils/error-handler';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const user = await createUser(email, password);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}




export async function GET() {
  try {
    const users = await listUsers();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
