import Switcher from "./Switcher";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="dark:text-white font-bold tracking-[.4em] text-5xl text-white">
        TODO
      </h1>
      <Switcher />
    </div>
  );
};

export default Header;
