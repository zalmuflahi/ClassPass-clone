import React from 'react'
import BpCard from './BpCard'

function Bpmenu({ bus }) {
    return (
        <div className='menu' style={{ paddingTop: '10%' }}>
            {
                bus.map((busi) => {
                    return (
                        <div>
                            <BpCard busi={busi} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Bpmenu
