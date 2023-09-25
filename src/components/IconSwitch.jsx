import React from "react";
import PropTypes from 'prop-types'

export default  function IconSwitch({icon , onSwitch}) {
    return (
        <div className="toolbar">
            <button className={icon === 'view_module' ? "view__list__btn btn" : "view__module__btn btn"} onClick={onSwitch}></button>
        </div>
    )
}

IconSwitch.propTypes = {
    onSwitch: PropTypes.func,
    icon: PropTypes.string
  }