import React from "react"
import InpatientList from "../components/inpatient-table"

const ListInpatientPage = () => {
    return (
        <React.Fragment>
            <div className="mt-5">
                <InpatientList />
            </div>
        </React.Fragment>
    )
}

export default ListInpatientPage