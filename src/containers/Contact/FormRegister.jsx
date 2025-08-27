import { InputField } from "../../components/InputField";

export const FormRegister = () => {
  const submitForm = () => {
    alert("Acoordaaaaaaaaaaaaaaaaaaaaaaa!");
  };

  return (
    <>
      <form className="max-w-md mx-auto bg-sky-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cadastro de Usuário
        </h2>

        <InputField label="Nome" name="nome" type="text" />

        <InputField label="E-mail" name="email" type="email" />

        <InputField label="Senha" name="password" type="password" />

        <div className="flex items-center justify-between">
          <button
            onClick={submitForm}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cadastrar
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Já tem conta?
          </a>
        </div>
      </form>
    </>
  );
};
