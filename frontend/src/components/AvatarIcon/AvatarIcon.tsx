import React, { HTMLAttributes } from 'react'
import { useProfile } from "src/hooks"
import { AvatarIconSizeEnum } from "src/types"
import { getStyles } from "src/utils/styles"
import './AvatarIcon.scss'
import AvatarMock from "src/components/AvatarMock/AvatarMock"

interface IAvatarIcon extends React.HTMLAttributes<HTMLAttributes<any>> {
    size: AvatarIconSizeEnum
}

const AvatarIcon: React.FC<IAvatarIcon> = (props) => {
    const { size, className } = props
    const { avatar, groups } = useProfile()

    console.log('avatar', avatar)

    const avatarExists = !!avatar

    const styles = getStyles("avatar-icon", [size], className)

    return (
        <div className={styles}>
            {
                avatarExists ?
                    <img
                        src={`/avatars/${groups && groups.filter(group => {
                            return group.id === avatar?.groupId
                        })[0].slug}/${avatar?.slug}.png`}
                        alt=""
                    />
                    :
                    <AvatarMock size={size}/>
            }
        </div>
    )
}

export default AvatarIcon