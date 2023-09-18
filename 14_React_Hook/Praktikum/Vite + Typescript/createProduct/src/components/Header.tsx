import tailwindImage from "../images/Tailwind.svg";

type HeaderProps = {
  languageProps: string;
  languageChangeButtonProps: any;
};

export default function Header(props: HeaderProps) {
  const contentLanguage = {
    title: {
      en: "Create Product",
      id: "Buat Produk",
    },
    description: {
      en: "Below is an example form built entirely with Tailwind's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
      id: "Di bawah ini adalah contoh formulir yang seluruhnya dibuat dengan kontrol formulir Tailwind. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa melengkapinya.",
    },
  };
  return (
    <header className="container mx-auto px-5 py-6 text-center">
      <img src={tailwindImage} width={150} height={"auto"} alt="Tailwind" className="mx-auto mb-5 mt-1" />
      <h1 className="text-3xl font-bold">{props.languageProps == "inggris" ? contentLanguage.title.en : contentLanguage.title.id}</h1>
      <p>{props.languageProps == "inggris" ? contentLanguage.description.en : contentLanguage.description.id}</p>
      {props.languageChangeButtonProps}
    </header>
  );
}
