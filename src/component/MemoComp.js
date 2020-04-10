import React from 'react'

function MemoComp({name}) {
    console.log("memo compo")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo( MemoComp)
