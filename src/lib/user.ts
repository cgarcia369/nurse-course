import { redirect } from "next/navigation";
import { auth } from "./auth";
import prisma from "./prisma";
import { unstable_cache } from "next/cache";

export const getCurrentUserFull = unstable_cache(
  (id: string) =>
    prisma.user.findUnique({
      where: {
        id
      }
    }),
  ["getUser"],
  {
    tags: ["getUser"]
  }
);
export const authWithUser = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  const currentUserFull = await getCurrentUserFull(session!.user!.id!);
  if (!currentUserFull) {
    redirect("/api/auth/signout");
  }
  return currentUserFull;
};
