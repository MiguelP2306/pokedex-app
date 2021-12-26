import { POKEMON_TYPE_COLORS } from "./constans";

const getColorByPokemonType = ({ type }) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;