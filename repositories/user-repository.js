import prisma from '@/config/db';

const userRepository = {
  async findByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
  },

  async findById(id) {
    return prisma.user.findUnique({ where: { id } });
  },

  async create(data) {
    return prisma.user.create({ data });
  },

  async delete(id) {
    return prisma.user.delete({ where: { id } });
  },

  async updatePassword(id, password) {
    return prisma.user.update({ where: { id }, data: { password } });
  },

  async findAll() {
    return prisma.user.findMany();
  },
};

export default userRepository;
