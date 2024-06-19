import {
  getSignInUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";
import Link from "next/link";

async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  console.log(user);

  return (
    <header className="">
      {/* {JSON.stringify(user)} */}
      <div className="container mx-auto flex justify-between items-center my-4">
        <Link href="/" className="font-bold text-xl">
          HireNet
        </Link>

        <nav className="flex gap-2">
          {!user ? (
            <Link href={signInUrl} className="bg-gray-200 py-2 px-4 rounded-md">
              Login
            </Link>
          ) : (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-gray-200 py-2 px-4 rounded-md"
              >
                Logout, {user.firstName}
              </button>
            </form>
          )}

          <Link
            href="/newlisting"
            className="bg-blue-600 text-white  py-2 px-4 rounded-md"
          >
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
