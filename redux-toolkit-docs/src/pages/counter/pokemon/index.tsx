import { useGetPokemonByNameQuery } from "../../../services/pokemon";

export default function PagePokemon() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <div>
      {error ? (
        <>Deu erro</>
      ) : isLoading ? (
        <>Carregando...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
