import styles from "../styles.module.css";

interface ArrowProps {
  disabled?: boolean;
  onClick: any;
  direction: "left" | "right";
}

export function Arrow({ disabled, onClick, direction }: ArrowProps) {
  const isDisabled = disabled ? styles.arrowDisabled : "";
  if (direction === "left") {
    return (
      <svg
        onClick={onClick}
        className={`${styles.arrow} ${styles.arrowLeft}  ${isDisabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    );
  }
  return (
    <svg
      onClick={onClick}
      className={`${styles.arrow} ${styles.arrowRight}  ${isDisabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
