import { route } from "@/lib/safe-route";
import { ItemSchema } from "@/lib/types/item";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const POST = route
  .body(ItemSchema.pick({ id: true }))
  .handler(async (req, { body }) => {
    
    // -- Find item to add -- //
    let item;
    try {
      item = await prisma.item.findFirst({
        where: {
          id: body.id,
        },
      })
    } catch (error) {
      console.error('Item not found', error)
      return Response.json({ message: "Failed to find item. Please try again." }, { status: 400 });
    }

    // -- Add item to order -- //
    if (item) {
      await prisma.order.create({
        data: {
          items: {
            connect: {
              id: item.id,
            },
          },
          total: 0, // or any appropriate value
          user: {
            connect: {
              id: 1, // replace with appropriate user id
            },
          },
        },
      });
    }
  });