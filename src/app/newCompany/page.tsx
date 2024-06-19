import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import createCompany from "../actions/workosActions";

const NewCompanyPage = async () => {
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

  const handleFormSubmit = async (data: FormData) => {
    "use server";

    if (user) await createCompany(data.get("newCompany") as string, user.id);
  };
  return (
    <div className="container">
      <h2 className="text-lg mt-6">Create a new company</h2>
      <p className="text-gray-500 italic text-sm mb-2">
        To create a job listing, you need to register your company
      </p>

      <form action={handleFormSubmit} className="flex gap-2">
        <input
          type="text"
          // value=""
          name="newCompany"
          placeholder="Company Name"
          className="p-2 border border-gray-400 rounded-md"
        />

        <button
          type="submit"
          className="flex  gap-2 items-center bg-gray-200 px-4 py-2 rounded-md"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewCompanyPage;
