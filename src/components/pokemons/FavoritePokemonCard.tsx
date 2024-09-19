import type { FavoritePokemon } from '@interfaces/favoritePokemon';
import { createSignal, type Component } from 'solid-js';

interface Props {
	pokemon: FavoritePokemon;
}
export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
	const [isVisible, setIsVisible] = createSignal(true);
	const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

	return (
		<div class='flex flex-col justify-center items-center'>
			<a href={`/pokemon/${pokemon.name}`}>
				#{pokemon.id} {pokemon.name}
			</a>
		</div>
	);
};
