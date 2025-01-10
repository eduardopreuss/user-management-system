import { NextResponse } from 'next/server';
import { ErrorTypes } from './error-types';

export function handleError(error) {
  const errorMap = {
    [ErrorTypes.VALIDATION_ERROR]: 400,
    [ErrorTypes.NOT_FOUND_ERROR]: 404,
    [ErrorTypes.INTERNAL_SERVER_ERROR]: 500,
  };

  const status = errorMap[error.name] || 500;

  if (status === 500) {
    console.error('Unhandled error:', error.message);
    return NextResponse.json({ message: 'Internal Server Error' }, { status });
  }

  return NextResponse.json({ message: error.message }, { status });
}

export function createError(type, message) {
  return { name: type, message };
}
