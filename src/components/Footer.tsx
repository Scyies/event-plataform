import FooterLogo from "./FooterLogo";

export function Footer() {
  return (
    <footer className="mx-auto h-full bg-gray-900 w-full flex flex-col sm:flex-row items-center sm:justify-between border-t border-gray-500">
      <div className="flex flex-col sm:flex-row items-center sm:items-start pt-6">
        <FooterLogo />
        <p className="text-gray-300 text-center sm:text-start pt-6 sm:pt-1 text-[14px] sm:text-[16px]">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>
      <p className="text-gray-300 pt-7 text-[14px] sm:text-[16px]">
      Políticas de privacidade
      </p>
    </footer>
  )
}