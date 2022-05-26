import prismaClient from "../prisma";

class CreateRankingService {
  async execute(guessedTags: number, time: number, userId: string) {
    const ranking = await prismaClient.ranking.create({
      data: {
        guessedTags,
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
