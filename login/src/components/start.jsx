import '../style/login.css'


export const Start = ({user = 'user'}) =>{
    return(
        <section className='start'>
            <h1>Bienvenido, {user}</h1>
        </section>
    )
}