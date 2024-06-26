import { useRouter } from "next/router";


 const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ];
    
    
const Developer = ()=>{

    const router = useRouter();

    const developerId = router.query.developerId;

    const displayDeveloper = details.find((dev)=> dev.id == developerId);
    console.log(displayDeveloper);
    return(
        <h1>{`${displayDeveloper.name} ${displayDeveloper.role}`}</h1>
    )
}

export default Developer;