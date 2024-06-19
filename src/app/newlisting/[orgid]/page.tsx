import { getUser } from "@workos-inc/authkit-nextjs";
import WorkOS from "@workos-inc/node";

import "react-country-state-city/dist/react-country-state-city.css";
import JobForm from "@/app/components/JobForm";

type PageProps = {
  params: {
    orgId: string;
  };
};

const NewListingForOrg = async (props: PageProps) => {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  if (!user) return "Please log in";

  const orgId = props.params.orgId;

  const orgMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
      organizationId: orgId,
    });

  const hasAccess = orgMemberships.data.length > 0;

  if (!hasAccess) return "No Access!";

  workos.userManagement.listOrganizationMemberships({ userId: user.id });
  return <JobForm />;
};

export default NewListingForOrg;
