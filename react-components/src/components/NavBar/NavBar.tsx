import React from 'react';
import classes from './NavBar.module.css';
import NavBarLink from '../../components/NavBarLink/NavBarLink';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import FormPage from '../../pages/FormPage/FormPage';
import NotFound from '../../pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { TitleRoutes } from './routes.interface';

class NavBar extends React.Component {
  readonly navLinkData = [
    {
      testId: 'home-link',
      route: '/',
      page: 'Home',
    },
    {
      testId: 'about-link',
      route: 'about',
      page: 'About Us',
    },
    {
      testId: 'form-link',
      route: 'form',
      page: 'Form',
    },
  ];

  readonly titleRoutes = [
    {
      path: '/',
      key: 'home',
      title: 'Home',
      element: <Home />,
    },
    {
      path: 'about',
      key: 'about',
      title: 'About Us',
      element: <About />,
    },
    {
      path: 'form',
      key: 'about',
      title: 'Form',
      element: <FormPage />,
    },
    {
      path: '*',
      key: 'notFound',
      title: '404 Not Found',
      element: <NotFound />,
    },
  ];

  render() {
    return (
      <>
        <ul className={classes.nav}>
          {this.navLinkData.map((obj, index) => (
            <NavBarLink {...obj} key={index} />
          ))}
        </ul>
        <h1 className={classes.title}>
          <Routes>
            {this.titleRoutes.map(({ key, path, title }: TitleRoutes) => {
              return <Route key={key} path={path} element={title} />;
            })}
          </Routes>
        </h1>
      </>
    );
  }
}

export default NavBar;
