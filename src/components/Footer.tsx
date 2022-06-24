export function Footer() {
  return (
    <footer className="mx-auto h-full bg-gray-900 w-full flex justify-between border-t border-gray-500">
      <div className="flex flex-row pt-6">
        <img src="/src/assets/Logo-rockeat.svg" alt=""
          className="mr-6" 
        />
        <p className="text-gray-300 pt-1">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>
      <p className="text-gray-300 pt-7">
      Políticas de privacidade
      </p>
    </footer>
  )
}