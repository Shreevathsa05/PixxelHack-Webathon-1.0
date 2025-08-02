import Accordion from "../../components/Category";



export default function About() {
  return (
    <>
    <div className="flex justify-around">
      <h1 className="mt-8 text-3xl font-semibold text-white">Categories</h1>
    </div>
    

    <div className="flex justify-around">
      <div className="flex justify-center min-h-screen w-[80vw]  text-white">
      <Accordion/>
    </div>
    </div>
    </>
  );
}
