import prismaClient from "../prisma";

class GetTopFiveRankingService {
  async execute() {
    const ranking = await prismaClient.ranking.findMany({
      take: 5,
      orderBy: [
        {
          guessedTags: "desc",
        },
        {
          time: "asc",
        },
      ],
      include: {
        user: true,
      },
    });

    return ranking;
  }
}

export { GetTopFiveRankingService };
