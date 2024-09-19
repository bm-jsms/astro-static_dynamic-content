import type { FavoritePokemon } from '@interfaces/favoritePokemon';
import { For, createSignal } from 'solid-js';

const getLocalStoragePokemons = (): FavoritePokemon[] => {
	const favoritePokemons = JSON.parse(
		localStorage.getItem('favorites') ?? '[]',
	);

	return favoritePokemons;
};

export const FavoritePokemons = () => {
	const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

	return (
		<div class='grid grid-cols-2 sm:grid-cols-4'>
			<For each={pokemons()}>{(pokemon) => <h2>{pokemon.name}</h2>}</For>
		</div>
	);
};
