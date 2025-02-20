import React from 'react';
import '../styles/header.css';
import { useAuth } from '../components/AuthContext'; // useAuth 훅 임포트

function Header() {
  const { isLoggedIn } = useAuth(); // 로그인 상태 가져오기

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <p id='logo'>Dopaming</p>
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="/experience">경험 파밍</a></li>
            <li><a href="/MyParm">나의 파밍</a></li>
          </ul>
        </nav>
        <div className="user-area">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 16C7.34315 16 6 17.3431 6 19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19C18 17.3431 16.6569 16 15 16H9ZM4 19C4 16.2386 6.23858 14 9 14H15C17.7614 14 20 16.2386 20 19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="white" />
          </svg>
          {!isLoggedIn ? (
            <>
              <a href="/Login" style={{ marginRight: '10px' }}>로그인</a>
              <a href="/Join">회원가입</a>
            </>
          ) : (
            <a href="/my">MY</a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
