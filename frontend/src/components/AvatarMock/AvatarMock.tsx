import React, { HTMLAttributes } from 'react'
import { AvatarIconSizeEnum } from "src/types"
import { getStyles } from "src/utils/styles"
import './AvatarMock.scss'

interface IAvatarMock extends React.HTMLAttributes<HTMLAttributes<any>> {
    size: AvatarIconSizeEnum
}


const AvatarMock: React.FC<IAvatarMock> = (props) => {
    const { size } = props

    const styles = getStyles('avatar-mock', [size])

    return (
        <div className={styles}>
            <img src="/inputs/avatar.svg" alt=""/>
        </div>
    )
}

export default AvatarMock