import { HeaderContainer } from "./styles";
import Switch from "react-switch";
import { useContext } from "react";
import { useHandleTheme } from "../../utils/hooks/useHandleTheme";
import { ThemeContext } from "styled-components";

type HeaderProps = {
  handleTheme: () => void;
  theme: string;
};

export const Header = ({ theme, handleTheme }: HeaderProps) => {
  const { colors } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <HeaderContainer>
      <Switch
        checked={isDarkMode}
        onChange={handleTheme}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={colors.title}
        offColor={colors.background}
      />
    </HeaderContainer>
  );
};
