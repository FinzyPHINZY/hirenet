"use server";
import { getUser } from "@workos-inc/authkit-nextjs";
import WorkOS from "@workos-inc/node";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createCompany(companyName: string, userId: string) {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  const org = await workos.organizations.createOrganization({
    name: companyName,
  });

  await workos.userManagement.createOrganizationMembership({
    userId,
    organizationId: org.id,
    roleSlug: "admin",
  });
  revalidatePath("/newlisting");
  redirect("/newlisting");
}

export default createCompany;
