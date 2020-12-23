function Sobre(){
    return(
        <h2>Sobre</h2>
    )
}

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 300)
    })
    return {props: {}}
}

export default Sobre