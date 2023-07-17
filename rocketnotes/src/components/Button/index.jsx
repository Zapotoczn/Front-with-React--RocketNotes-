import { Container } from './styles.js'

export function Button({title, loading = false}) {

    return(
        <Container 
        type="button"
        disabled={loading}
        >
        {loading ? 'loading...' : title}
        </Container>
    )

}