import { auth } from "@/auth";
import StartupForm from "@/components/startup-form";
import { redirect } from "next/navigation";

const CreatePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your Startup</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default CreatePage;
