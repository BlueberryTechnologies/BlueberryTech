import { useState, useEffect } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BlueberryLogo from "../assets/header.png";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/server-status.html", label: "Server Status" }, // Use absolute paths
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setActive(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link ? "true" : undefined} // Ensure proper data-active value
      onClick={() => {
        if (active !== link.link) {
          setActive(link.link);
        }
      }}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <img
          src={BlueberryLogo}
          alt="Blueberry Logo"
          className={classes.logo}
        />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        {opened && (
          <div
            className={classes.burgerMenu}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "white",
              zIndex: 1000,
            }}>
            {items}
          </div>
        )}
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
