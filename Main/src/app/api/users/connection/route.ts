import { route } from "@/lib/safe-route";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "@/lib/jwt";
import { UserSchema } from "@/lib/types/user";


const prisma = new PrismaClient();

export const POST = route
  .body(UserSchema.pick({ email: true, name: true, phone: true, password: true }))
  .handler(async (req, { body }) => {

    // -- Find user -- //
    let user;
    try {
      user = await prisma.user.findFirst({
        where: {
          email: body.email,
        },
      })
    } catch (error) {
      console.error('Form submission error', error)
      return Response.json({ message: "Failed to submit the form. Please try again." }, { status: 400 });
    }

    // -- Create user if not found -- //
    if (!user) {
      user = await prisma.user.create({
        data: {...body, token: ''},
      });
    }

    // -- Generate token -- //
    let jwt;
    try {
      
      jwt = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          token: generateToken({...user, password: '',  token: ''}, '1h'),
        },
      });

    } catch (error) {
      console.error('JWT generation error', error)
      return Response.json({ message: "Failed to generate token. Please try again." }, { status: 400 });
    }
    
    return Response.json({ token: jwt.token }, { status: 200 });

  });