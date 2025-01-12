import styles from "../styles/Button.module.css";
import Image from "next/image";

const Button = ({ href, text, icon, onClick, isExternal = false }) => {
  const Wrapper = href ? "a" : "button"; // Use <a> for links or <button> for actions

  return (
    <Wrapper
      className={styles.button}
      href={
        "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      }
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {icon && (
        <Image
          className={styles.icon}
          src={icon}
          alt={`${text} icon`}
          width={20}
          height={20}
        />
      )}
      {text}
    </Wrapper>
  );
};

export default Button;
