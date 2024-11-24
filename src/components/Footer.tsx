
import { useTheme, Theme } from "../context/ThemeContext"

function Footer() {
  const { theme } = useTheme(); 

  return (
    <footer
      className={`w-full absolute bottom-0 text-center py-4 mt-8 ${theme === Theme.Dark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
    >
      <hr className={`${theme === Theme.Dark ? 'border-gray-600' : 'border-gray-300'} my-4`} />
      <p className="text-sm">
        &copy; 2024 <span className="font-semibold">@C</span> Made with <span className="text-red-500">♥</span> by Muchael123
      </p>
    </footer>
  );
}

export default Footer;
