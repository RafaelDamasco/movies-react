import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { SearchInput } from "./SearchInput";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between gap-6 border-b px-6">
      <Logo />
      <SearchInput />
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">About</NavLink>
      </nav>
    </header>
  );
}
