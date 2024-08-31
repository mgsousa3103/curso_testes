import PokemonList from "@/components/PokemonList/pokemon-list"
import { fetchPokemonList } from "@/services/pokemon"

const Dashboard = () => {
    return (
        <div className="w-full h-screen grid place-items-center space-y-12 p-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <PokemonList fetchPokemons={fetchPokemonList} />
        </div>
    )
}

export default Dashboard