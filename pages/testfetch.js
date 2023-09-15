 // This gets called on every request
 export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/conDB`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
}

export default function Page({ data }) {
     return(
       
        <center>
        <ul>
            {data.map( item => (
                <li key={item.user_id}>
                    UID: [{item.user_id}] NAME: [{item.user_name}] STATUS: [{item.user_status}]
                </li>
                )
            )}
        </ul>
        </center>
        
     )
}
