import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';
import fontSize from '../styles/fontSize';
import { color } from '../styles/color';
import logo from '../images/logo.png';

const { primary, dark, light } = color;

const HeaderBox = styled.header`
  .site-top {
    background: #DFDFDF;
    border-bottom: 1px solid #d5d5d5;
    height: 40px;

    div {
      text-align: right;

      a {
        display: inline-block;
        line-height: 40px;
        margin: 0 10px;
        font-size: ${fontSize.normal};

        &.on {
          color: ${color.primary};
        }
      }
    }
  }

  .logo-search {
    div {
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;

      form {
        display: flex;
        height: 35px;
        width: 380px;
        button {
            width: 35px;
        }

        input[type='text'] {
            flex-grow: 1;
        }
        button[type='submit'] {
            background: #fff;
        }
      }
      
    }
    img {height: 200px;}
  }
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderBox>
      <section className="site-top">
        <div className="layout-width">
          <NavLink
            to="/member/signup"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('회원가입')}
          </NavLink>
          <NavLink
            to="/member/login"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('로그인')}
          </NavLink>
          {/* NavLink: 현재 페이지가 링크와 동일하면 true/ 참일 때 on클래스 추가됨 */}
        </div>
      </section>
      <section className="logo-search">
        <div className="layout-width">
        <Link to="/">
          <img src={logo} alt={t('로고')} />
        </Link>
        <form autoComplete="off">
          <input type="text" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        </div>
      </section>
    </HeaderBox>
  );
};

export default React.memo(Header);
