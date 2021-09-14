import React from 'react'
import {SectionTitle3, SectionTitle4} from '../Atoms/SectionTitle'
import { SubHeading } from '../Atoms/SubHeading'
import { Subtitle } from '../Atoms/Subtitle'

const Detail = (props) => {
    return (
        <>
            <div className="row">
                <SectionTitle3>{props.title}</SectionTitle3>
                    <div className="ml-auto">
                        <SectionTitle4 className="primary">{props.tanggal}</SectionTitle4>
                    </div>
            </div>
                <SubHeading>{props.company}</SubHeading>
                <Subtitle>{props.detail}</Subtitle>
        </>
    )
}
export default Detail;