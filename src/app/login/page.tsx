import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/inicio/Footer";
import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {

  return (
    <>
      <NavBar />
      <div className="flex flex-col-reverse h-[80vh] gap-3 md:flex-row justify-center items-center p-2">
        <figure>
          <img
            className="rounded-box shadow-md hover:shadow-xl"
            src="login.png"
            alt="login image"
            width={320}
          />
        </figure>
        <div>
          <LoginForm/>
        </div>
      </div>
      <Footer />
    </>
  );
}