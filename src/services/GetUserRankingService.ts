import prismaClient from "../prisma";

class GetUserRankingService {
  async execute(user_id: string) {
    const ranking = await prismaClient.ranking.findMany({
      orderBy: [
        {
          guessedTags: "desc",
        },
        {
          time: "asc",
        },
      ],
      where: {
        userId: user_id,
      },
      include: {
        user: true,
      },
    });

    return ranking;
  }
}

export { GetUserRankingService };
