import React from "react";
import "./widget.less";
import {connect} from "react-redux";
import {ActionCreators} from "../../reducer/reducer";

const Widget = (props) => {
  // const dragStart = e => {
  //   const target = e.target;
  //   setTimeout(() => {
  //     target.style.display = `none`;
  //   }, 0);
  // };
  //
  // const dragOver = e => {
  //   e.stopPropagation();
  // };
  const id = props.id;
  const className = props.className;
  let isResizing;
  const mouseDown = (e) => {
    if (!isResizing) {
      e.preventDefault();
      const window = document.querySelector(`.windows`).getBoundingClientRect();
      const widgetWrap = document.getElementById(id);
      const widget = widgetWrap.getBoundingClientRect();

      const onMouseMove = (moveEvt) => {
        moveEvt.preventDefault();

        let left = moveEvt.pageX - window.left - widget.left / 2;
        let top = moveEvt.pageY - window.top;

        let limitedLef = Math.min(window.width - widget.width, Math.max(0, left));
        let limitedTop = Math.min(window.height - widget.height, Math.max(55, top));

        widgetWrap.style.left = limitedLef + `px`;
        widgetWrap.style.top = limitedTop + `px`;
      };
      const onMouseUp = (eUp) => {
        eUp.preventDefault();
        document.removeEventListener(`mousemove`, onMouseMove);
        document.removeEventListener(`mouseup`, onMouseUp);
      };
      document.addEventListener(`mousemove`, onMouseMove);
      document.addEventListener(`mouseup`, onMouseUp);
    }
  };

  const resizeMousedown = (e) => {
    isResizing = true;
    let currentResizer = e.target;
    let prevX = e.clientX;
    let prevY = e.clientY;
    const widgetWrap = document.getElementById(id);


    const onResizeMouseMove = (e) => {
      const rect = widgetWrap.getBoundingClientRect();
      let width;
      let height;

      // if (currentResizer.classList.contains(`resizer--se`)) {
      width = e.pageX - rect.width;
        height = e.pageY - rect.height;
        widgetWrap.style.width = width + `px`;
        widgetWrap.style.height = height + `px`;
      // }

      // else if (currentResizer.classList.contains(`resizer--nw`)) {
      //   console.log(prevX - e.clientX);
      //   console.log(rect.width)
      //   console.log(rect.width + (prevX - e.clientX));
      //   widgetWrap.style.width = rect.width + (prevX - e.clientX) + `px`;
      //   widgetWrap.style.height = rect.height + (prevY - e.clientY) + `px`;
      //   widgetWrap.style.top = rect.top - (prevY - e.clientY) + `px`;
      //   widgetWrap.style.left = rect.left - (prevX - e.clientX) + `px`;
      //   // width = e.pageX - rect.width;
      //   // height = e.pageY - rect.height;
      //   //
      //   // widgetWrap.style.width = width + `px`;
      //   // widgetWrap.style.height = height + `px`;
      //   // widgetWrap.style.left = rect.left - (prevX - e.clientX) + `px`;
      // }

      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onResizeMouseUp = (eUp) => {
      eUp.preventDefault();
      isResizing = false;
      document.removeEventListener(`mousemove`, onResizeMouseMove);
      document.removeEventListener(`mouseup`, onResizeMouseUp);
    };
    document.addEventListener(`mousemove`, onResizeMouseMove);
    document.addEventListener(`mouseup`, onResizeMouseUp);
  };

  const changeWidgetTable = (id)=> {
    switch (id) {
      case 1:
        props.widgetOne();
        props.widgetThree();
        break;
      case 2:
        props.widgetTwo();
        props.widgetFour();
        break;
      case 3:
        props.widgetOne();
        props.widgetThree();
        break;
      case 4:
        props.widgetTwo();
        props.widgetFour();
        break;
    }
  };

  return (
    <div
      className={className}
      id={id}
      // onDragStart={dragStart}
      // onDragOver={dragOver}
    >
      <div onMouseDown={mouseDown}>
        {props.children}
      </div>
      <span onClick={()=> {
        changeWidgetTable(id);
      }} className="widget__button">Переместить на другой рабочий стол</span>
      <span onMouseDown={(e)=> resizeMousedown(e)} className="resizer resizer--nw"/>
      <span onMouseDown={(e)=> resizeMousedown(e)} className="resizer resizer--ne"/>
      <span onMouseDown={(e)=> resizeMousedown(e)} className="resizer resizer--sw"/>
      <span onMouseDown={(e)=> resizeMousedown(e)} className="resizer resizer--se"/>
    </div>
  );
};

export {Widget};

const mapStateToDispatch = (dispatch) => ({
  changeWindows(windowNumber) {
    dispatch(ActionCreators.changeWindow(windowNumber));
  },
  widgetOne() {
    dispatch(ActionCreators.changeWidgetOne());
  },
  widgetThree() {
    dispatch(ActionCreators.changeWidgetThree());
  },
  widgetTwo() {
    dispatch(ActionCreators.changeWidgetTwo());
  },
  widgetFour() {
    dispatch(ActionCreators.changeWidgetFour());
  }
});

export default connect(null, mapStateToDispatch)(Widget);
