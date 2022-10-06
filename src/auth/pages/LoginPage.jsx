import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

  const navigate = useNavigate();

  const logIn = () => {
    navigate("/inicio");
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <button onClick={logIn} className="bg-blue-600 py-3 px-8 rounded-lg font-bold text-white hover:text-yellow-500 hover:bg-blue-700 focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring">
        Ingresar 😊
      </button>
    </div>
  )
}
