const Button = ({ disabled, goToId, labelText }) => {
  return (
    <li>
      <a
        className={!disabled? "header__link" : "header__link header__link--disabled"}
        href={goToId}>
        {labelText}
      </a>
    </li>
  );
};
export default Button;
