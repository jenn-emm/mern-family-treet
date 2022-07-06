import React from 'react'

function SettingsHeader({title}) {
  return (
    <div className="row">
        <div className="col-lg-6">
            <h2 className="settings-title">{title}</h2>
        </div>
    </div>
  )
}

export default SettingsHeader