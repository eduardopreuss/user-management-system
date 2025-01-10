
export default function Button({
                                 children,
                                 icon: Icon,
                                 onClick,
                                 classNames
                               }) {

  return (
    <button
      onClick={onClick}
      className={`mt-1 rounded text-white px-4 py-2 flex items-center space-x-2 ${classNames}`}
    >
      {Icon && <Icon  />}
      {children}
    </button>
  );
}
