import Image from "next/image";

const Card = ({
  children,
  completed = false,
}: {
  children: React.ReactNode;
  completed?: boolean;
}) => {
  return (
    <div className="dark:bg-very-dark-desaturated-blue bg-white rounded-md p-6 flex gap-5 h-20 items-center">
      {completed ? (
        <div className="h-full aspect-square p-2 flex items-center rounded-full bg-gradient-to-br from-bg-from to-bg-to">
          <Image
            src={"/images/icon-check.svg"}
            alt="check"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div className="h-full rounded-full border-2 dark:border-very-dark-grayish-blue-1 aspect-square" />
      )}
      {children}
    </div>
  );
};

export default Card;
