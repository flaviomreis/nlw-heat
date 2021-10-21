import { io } from "../app";
import prismaClient from "../prisma";

interface IMesssage {
  text: string,
  user_id: string
}

export class CreateMessageService {
  async execute(data: IMesssage) {
    const message = await prismaClient.message.create({
      data: {
        text: data.text,
        user_id: data.user_id
      },
      include: {
        user: true
      }
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url
      }
    };

    console.log(infoWS);

    io.emit('new_message', infoWS);

    return message;
  }
}