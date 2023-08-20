import styled from "styled-components";
import classNames from "classnames";

const ButtonStyle = styled.button`
  background-color: #1ba9d6;
  border: 1px solid #1ba9d6;
  border-radius: 32px;
  color: $white;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 24px;
  white-space: nowrap;
`;

export const Button = ({ className, onClick, children }) => {
  return (
    <button
      className={classNames("button", { className })}
      style={ButtonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
