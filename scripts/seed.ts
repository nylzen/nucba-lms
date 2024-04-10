const { PrismaClient } = require("@prisma/client");
const { config } = require("dotenv");

config();

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Web development" },
        { name: "Frontend" },
        { name: "VIM" },
        { name: "Filming" },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database:", error);
  } finally {
    await db.$disconnect();
  }
}

main()