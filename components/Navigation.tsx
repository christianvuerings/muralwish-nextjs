import React, { Children } from "react";
import { useRouter } from "next/router";
import styles from "styles/Navigation.module.css";
import Link, { LinkProps } from "next/link";

type ActiveLinkProps = LinkProps & {
  children?: any;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default function Navigation(location) {
  return (
    <nav role="navigation" className={styles.navigationContainer}>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <ActiveLink href="/" activeClassName={styles.navigationItemActive}>
            <a>Home</a>
          </ActiveLink>
        </li>
        <li className={styles.navigationItem}>
          <ActiveLink
            href="/murals"
            activeClassName={styles.navigationItemActive}
          >
            <a>Murals</a>
          </ActiveLink>
        </li>
        <li className={styles.navigationItem}>
          <ActiveLink
            href="/about/"
            activeClassName={styles.navigationItemActive}
          >
            <a>About</a>
          </ActiveLink>
        </li>
        <li className={styles.navigationItem}>
          <ActiveLink
            href="/get-involved/"
            activeClassName={styles.navigationItemActive}
          >
            <a>Get Involved</a>
          </ActiveLink>
        </li>
        <li className={styles.navigationItem}>
          <a className={styles.donate} href="/#donate">
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -256 1850 1850"
            >
              <path
                d="M933.966 1471.424q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5q-38-47.5-68-97.5t-53.5-121q-23.5-71-23.5-138 0-220 127-344t351-124q62 0 126.5 21.5t120 58q55.5 36.5 95.5 68.5t76 68q36-36 76-68t95.5-68.5q55.5-36.5 120-58t126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18"
                fill="#fff"
              />
            </svg>
            <div>Donate</div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
