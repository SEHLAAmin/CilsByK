import { Button } from '@material-ui/core'
import React from 'react'
import './arrowdrop.css'

function ArrowDrop({Icon , title}) {
    return (
        <Button className="arrowswipe">
         <span className="arrowtitle" >{title}</span>
         <Icon className="iconarrow" />
        </Button>
    )
}

export default ArrowDrop
