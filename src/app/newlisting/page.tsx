import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import WorkOS from "@workos-inc/node";
import Link from "next/link";

const NewListing = async () => {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  const { user } = await getUser();

  if (!user) {
    return (
      <div className="container my-80">
        <div className="text-center border border-blue-200 bg-blue-50 p-4 rounded-md">
          You need to be logged in to post a job
        </div>
      </div>
    );
  }

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  const activeOrgMemberships = organizationMemberships.data.filter(
    (om) => om.status === "active"
  );

  const organizationsNames: { [key: string]: string } = {};
  for (const activeMemberships of activeOrgMemberships) {
    const org = await workos.organizations.getOrganization(
      activeMemberships.organizationId
    );

    organizationsNames[org.id] = org.name;
  }

  return (
    <div className="container">
      <div>
        {/* {JSON.stringify(organizationsNames, null, 2)} */}
        <h2 className="text-lg mt-6">Your Companies</h2>
        <p className="text-gray-500 italic text-sm mb-2">
          Select a company to create a job ad
        </p>
        <div>
          <div className="border inline-block rounded-md">
            {Object.keys(organizationsNames).map((id, i) => (
              <Link
                href={"/newlisting/" + id}
                key={id}
                className="flex gap-2 items-center py-2  px-4 border-b"
              >
                {organizationsNames[id]}{" "}
                <FontAwesomeIcon icon={faArrowRight} className="h-4" />
              </Link>
            ))}
          </div>
        </div>
        {organizationMemberships.data.length === 0 && (
          <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
            No companies assigned to your account
          </div>
        )}
        <Link
          href="/newCompany"
          className="inline-flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md mt-6"
        >
          Create a new company{" "}
          <FontAwesomeIcon icon={faArrowRight} className="h-4" />
        </Link>{" "}
      </div>
    </div>
  );
};

export default NewListing;
