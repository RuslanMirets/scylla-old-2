import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, ListItem } from '@mui/material';
import styles from './NavItem.module.scss';

interface IProps {
  title: string;
  href: string;
  onClick?: any;
}

export const NavItem: React.FC<IProps> = ({ title, href, onClick }) => {
  const router = useRouter();
  const active = href ? router.pathname === href : false;

  return (
    <ListItem className={styles.root} disableGutters onClick={onClick}>
      <NextLink href={href} passHref>
        <Button
          component="a"
          disableRipple
          sx={{
            color: active ? 'secondary.light' : 'secondary.contrastText',
          }}>
          {title}
        </Button>
      </NextLink>
    </ListItem>
  );
};
