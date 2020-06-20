import React from "react";
import Window from "../window/window";
import './windows.less';
import Widget from "../widget/widget";
import widget1 from "../../img/widget1.jpg";
import widget2 from "../../img/widget2.jpg";
import {connect} from "react-redux";
import {Header} from "../header/header";

const Windows = ({activeWindow, activeWidgetOne, activeWidgetTwo, activeWidgetThree, activeWidgetFour}) => {
  console.log(activeWidgetOne);
  console.log(activeWidgetThree);

  const renderWindow = (windowNumber) => {
    switch (windowNumber) {
      case `2`:
        return (
          <Window>
            <Widget id={3} className={`widget__container ${ activeWidgetThree ? `widget__container--active` : ``} widget__container--1`}>
              <img className="widget__item widget__item--1" src={widget1} alt=""/>
            </Widget>
            <Widget id={4} className={`widget__container ${ activeWidgetFour ? `widget__container--active` : ``} widget__container--1`}>
              <img className="widget__item widget__item--2" src={widget2} alt=""/>
            </Widget>
          </Window>
        );
      default:
        return (
          <Window>
            <Widget id={1} className={`widget__container ${ activeWidgetOne ? `widget__container--active` : ``} widget__container--1`}>
              <img className="widget__item widget__item--1" src={widget1} alt=""/>
            </Widget>
            <Widget id={2} className={`widget__container ${ activeWidgetTwo ? `widget__container--active` : ``} widget__container--2`}>
              <img className="widget__item widget__item--2" src={widget2} alt=""/>
            </Widget>
          </Window>
        );
    }
  };

  return (
    <main className="windows">
      {renderWindow(activeWindow)}
    </main>
  );
};

export {Windows};

const mapStateToProps = (state) => ({
  activeWindow: state.activeWindow,
  activeWidgetOne: state.activeWidgetOne,
  activeWidgetTwo: state.activeWidgetTwo,
  activeWidgetThree: state.activeWidgetThree,
  activeWidgetFour: state.activeWidgetFour,
});

export default connect(mapStateToProps, null)(Windows);
