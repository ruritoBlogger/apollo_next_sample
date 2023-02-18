import { prisma } from "./prisma";

async function main() {
  await prisma.todo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "電球を交換する",
      content: "キッチンの電球が切れているので交換すること。",
      comments: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              id: 1,
              content: "洗面所の電球も切れてるじゃん",
            },
          },
          {
            where: { id: 3 },
            create: {
              id: 3,
              content: "LEDの電球が欲しいっす",
            },
          },
        ],
      },
    },
  });

  await prisma.todo.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      title: "食料品を購入する",
      content: "鍋の具材とかを買ってくること",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
