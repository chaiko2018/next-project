import Link from "next/link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const Header = () => (
  <header>
    <nav>
      <Container maxWidth="sm">
        <Box sm={4}>
          <ul>
            <li>
              <Link href="/about">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Signup</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Profile</a>
              </Link>
            </li>
          </ul>
        </Box>
      </Container>
    </nav>
    <style jsx>{`
      ul {
        display: flex;
        list-style: none;
        margin-left: 0;
        padding-left: 0;
      }

      li {
        margin-right: 1rem;
      }

      li:first-child {
        margin-left: auto;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      header {
        padding: 0.2rem;
        color: #fff;
        background-color: #333;
      }
    `}</style>
  </header>
);
export default Header;
