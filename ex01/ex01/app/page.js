import Image from "next/image";

function Pai (){

  return <p>sjdasjdksajdakd</p>;
}

export default function Home() {
  const aula = 1;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Olá Mundo</h1>
      <p>Boas vindas à {aula} aula de React </p>
      <Pai/>
    </div>
  );
}
