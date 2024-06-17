import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";

const Home = async () => {
  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();

  return (
    <div>
      <Hero />
      <Jobs />
    </div>
  );
};
export default Home;
