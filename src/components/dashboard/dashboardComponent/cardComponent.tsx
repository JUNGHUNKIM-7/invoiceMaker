import type { NextPage } from 'next'
import b from '../../../../pages/dashboard/dashBoard.module.scss'

const CardComponent: NextPage = () => {
    return (
        <div
            className={b.boardMain__cardWrapper__cardComponents__cardComponent}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            consequuntur cumque doloribus ducimus eaque, eum facere harum id
            itaque laboriosam quidem, quis rem sapiente similique sit ullam
            veritatis voluptas voluptatibus!
        </div>
    )
}

export default CardComponent
