const Contato = () => {
    return(
        <h2>Contato</h2>
    )
}

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 300)
    })
    return {props: {}}
}

export default Contato