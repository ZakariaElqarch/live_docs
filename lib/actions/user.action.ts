"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const { data } = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });
    const users = data.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      avatr: user.imageUrl,
    }));

    const sortedUser = userIds.map((email) =>
      users.find((user) => user.email === email)
    );
    return parseStringify(sortedUser);
  } catch (error) {
    console.log("Get clerk users error: ", error);
  }
};
