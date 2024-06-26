import Link from "next/link";
import { Fragment } from "react";

const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ];
    

const AboutUsPage = ()=>{
    return(
        <Fragment>
            <h1>This is AboutUs Page</h1>
            <ul>
                {details.map((dev)=>{
                    return(
                    <li key={dev.id}>
                        <Link href={`/about/${String(dev.id)}`}>{dev.name}</Link>
                    </li>
                    
                )})}
            </ul>
        </Fragment>


    )

}

export default AboutUsPage;