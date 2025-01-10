import { NextResponse } from 'next/server';
import { changePassword, deleteUser } from '@/services/user-service';
import { createError, handleError } from '@/utils/error-handler';
import { ErrorTypes } from '@/utils/error-types';

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      throw createError(ErrorTypes.VALIDATION_ERROR, 'ID is required');
    }

    await deleteUser(id);
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return handleError(error);
  }
}

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    const { password } = await req.json();

    if (!id || !password) {
      throw createError(ErrorTypes.VALIDATION_ERROR, 'User ID and password are required');
    }
    await changePassword(id, password);

    return new NextResponse(null, { status: 200 })
  } catch (error) {
    return handleError(error);
  }
}
