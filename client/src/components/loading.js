export default function Loading()
{
    return(
        <>
         <div className="spinner-border text-secondary" role="status" style={{height:'100px',width:'100px',marginTop:'100px'}}>
            <span className="visually-hidden">Loading...</span>
       </div>
        </>
    )
}