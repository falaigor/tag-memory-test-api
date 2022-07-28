import prismaClient from "../prisma";

export class GetRankingService {
  async execute() {
    const ranking = await prismaClient.ranking.findMany({
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
