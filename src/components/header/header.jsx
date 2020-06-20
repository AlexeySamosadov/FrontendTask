import React from "react";
import './header.less';
import {ActionCreators} from "../../reducer/reducer";
import {connect} from "react-redux";

const Header = ({activeWindow, changeWindows}) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div onClick={()=> changeWindows(`1`)} className="header__window header__window--1">Рабочий стол 1</div>
        <div onClick={()=> changeWindows(`2`)} className="header__window header__window--2">Рабочий стол 2</div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeWindow: state.activeWindow,
});

const mapStateToDispatch = (dispatch) => ({
  changeWindows(windowNumber) {
    dispatch(ActionCreators.changeWindow(windowNumber));
  }
});

export {Header};

export default connect(mapStateToProps, mapStateToDispatch)(Header);
