import prismaClient from "../prisma";

class CreateRankingService {
  async execute(guested: number, time: number, userId: string) {
    const ranking = await prismaClient.ranking.create({
      data: {
        guested,
        time,
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
