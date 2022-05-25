import prismaClient from "../prisma";

class CreateRankingService {
  async execute(guested: number, timer: number, userId: string) {
    const ranking = await prismaClient.ranking.create({
      data: {
        guested,
        timer,
        userId,
      },
      include: {
        user: true,
      },
    });

    return ranking;
  }
}

export { CreateRankingService };
