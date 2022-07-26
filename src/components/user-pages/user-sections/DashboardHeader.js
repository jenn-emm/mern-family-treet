import React from "react"

const DashboardHeader = React.forwardRef(({greeting}, ref) => {
  return (
    <div className="row" ref={ref}>
        <div className="col-lg-6 recipe-header">
            <h2 className="user-greeting">{greeting}</h2>
        </div>
    </div>
  )
})

export default DashboardHeader