import { redirect } from "next/navigation";
// import { auth } from '@clerk/nextjs';

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children
}: {
  children: React.ReactNode;
}) {
  console.log("this is root lay out");
  redirect("/sign-in");
  // const { userId } = auth();

  // if (!userId) {
  //   redirect('/sign-in');
  // }

  // const store = await prismadb.store.findFirst({
  //   where: {
  //     userId,
  //   }
  // });

  // if (store) {
  //   redirect(`/${store.id}`);
  // };

  return <>{children}</>;
}
