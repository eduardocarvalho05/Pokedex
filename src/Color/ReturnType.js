import bug from '../img/Tipos/Bug.png';
import dark from '../img/Tipos/Dark.png';
import dragon from '../img/Tipos/Dragon.png';
import electric from '../img/Tipos/Electric.png';
import fairy from '../img/Tipos/Fairy.png';
import fighting from '../img/Tipos/Fighting.png';
import fire from '../img/Tipos/Fire.png';
import flying from '../img/Tipos/Flying.png';
import ghost from '../img/Tipos/Ghost.png';
import grass from '../img/Tipos/Grass.png';
import ground from '../img/Tipos/Ground.png';
import ice from '../img/Tipos/Ice.png';
import normal from '../img/Tipos/Normal.png';
import poison from '../img/Tipos/Poison.png';
import psychic from '../img/Tipos/Psychic.png';
import rock from '../img/Tipos/Rock.png';
import steel from '../img/Tipos/Steel.png';
import water from '../img/Tipos/Water.png';

export const getTypes = (type) => {
    switch (type) {
        case 'bug':
            return bug;
        case 'dark':
            return dark;
        case 'dragon':
            return dragon;
        case 'electric':
            return electric;
        case 'fairy':
            return fairy;
        case 'fighting':
            return fighting;
        case 'fire':
            return fire;
        case 'flying':
            return flying;
        case 'ghost':
            return ghost;
        case 'grass':
            return grass;
        case 'ground':
            return ground;
        case 'ice':
            return ice;
        case 'normal':
            return normal;
        case 'poison':
            return poison;
        case 'psychic':
            return psychic;
        case 'rock':
            return rock;
        case 'steel':
            return steel;
        case 'water':
            return water;
        default:
            return water;
    }
};


{/* <InfoType>{pokemon.types.map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(', ')}</InfoType> */}