"use server"
import userRepository from '@/repositories/user-repository';
import { createError } from '@/utils/error-handler';
import { ErrorTypes } from '@/utils/error-types';

export async function createUser(email, password) {

    const existingUser = await userRepository.findByEmail(email);
    if (!email || !password) {
      throw createError(ErrorTypes.VALIDATION_ERROR, 'email and password are required');
    }
    if (existingUser) {
        throw createError(ErrorTypes.VALIDATION_ERROR, 'User already exists');
    }
    return userRepository.create({ email, password });
}

export async function deleteUser(userId) {

     const user = await userRepository.findById(userId);
     if (!user) {
         throw createError(ErrorTypes.NOT_FOUND_ERROR, 'User not found');
     }

     await userRepository.delete(userId);
}

export async function changePassword(userId, newPassword) {
    const user = await userRepository.findById(userId);
    if (!user) {
        throw createError(ErrorTypes.NOT_FOUND_ERROR, 'User not found');
    }
    return userRepository.updatePassword(userId, newPassword);
}

export async function listUsers() {
    return userRepository.findAll();
}
