import PokemonDetail from "@/components/PokemonDetail/pokemon-detail"
import { fetchPokemonDetails } from "@/services/pokemon"

interface PokemonDetailsPageProps {
    params: {
        id: string
    }
}

const PokemonDetailsPage = ({
    params: { id }
}: PokemonDetailsPageProps) => {
    return <PokemonDetail id={+id} fetchPokemonDetails={fetchPokemonDetails} />
}

export default PokemonDetailsPage