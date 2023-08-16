import React from 'react'
import { Button } from 'antd';


const Home =()=>
{
    return(

        <div id='menu'>
        <ul>
        <li><Button type="primary" href='https://www.ford.com/'>Home</Button></li>
        <li><Button type="primary" href='https://www.ford.com/cars/mustang/2024/?gnav=header-suvs-vhp'>Vehicles</Button></li>
        <li><Button type="primary" href='https://sso.ci.ford.com/authsvc/mtfim/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:basicldapuser&identity_source_id=75d08ad1-510f-468a-b69b-5ebc34f773e3&Target=https%3A%2F%2Fsso.ci.ford.com%2Foidc%2Fendpoint%2Fdefault%2Fauthorize%3FqsId%3Dcf7869af-edae-4308-846b-888e25d05444%26client_id%3D880cf418-6345-4e3b-81cd-7b623309b571#appID=CCCA9FB8-B941-46AD-A89F-F9D9D699DD68&propertySpecificContentKey=brand_ford&originURL=https%3A%2F%2Fwww.ford.com%2Fcars%2Fmustang%2F2024%2F%3Fgnav%3Dheader-suvs-vhp&lang=en_us&page=pre-registration'>Signup</Button></li>
        <li><Button type="primary" href='https://sso.ci.ford.com/authsvc/mtfim/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:basicldapuser&identity_source_id=75d08ad1-510f-468a-b69b-5ebc34f773e3&Target=https%3A%2F%2Fsso.ci.ford.com%2Foidc%2Fendpoint%2Fdefault%2Fauthorize%3FqsId%3Dcf7869af-edae-4308-846b-888e25d05444%26client_id%3D880cf418-6345-4e3b-81cd-7b623309b571#appID=CCCA9FB8-B941-46AD-A89F-F9D9D699DD68&propertySpecificContentKey=brand_ford&originURL=https%3A%2F%2Fwww.ford.com%2Fcars%2Fmustang%2F2024%2F%3Fgnav%3Dheader-suvs-vhp&lang=en_us&page=login'>Login</Button></li>
        </ul>
        </div>

    )
}
export default Home