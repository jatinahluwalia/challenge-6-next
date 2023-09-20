import Switcher from "./Switcher";

const Header = () => {
  return (
    <div className="m-auto w-[min(800px,100%)] flex items-center justify-between">
      <h1 className="dark:text-white font-bold tracking-[.4em] text-5xl">
        TODO
      </h1>
      <Switcher />
    </div>
  );
};

export default Header;
