import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Typography variant="h5">Домашняя страница</Typography>
      <br />
      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed natus praesentium corrupti
        earum, quaerat ipsum, hic velit ipsam odio reiciendis, soluta laborum repellendus cum.
        Minima quam hic labore perferendis nam.
      </Typography>
      <br />
      <Typography variant="body1">
        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
        Большого несколько, меня агентство первую строчка прямо рекламных текстами повстречался
        подзаголовок снова инициал решила своего все взобравшись свое грамматики ведущими.
      </Typography>
    </MainLayout>
  );
};

export default Home;
