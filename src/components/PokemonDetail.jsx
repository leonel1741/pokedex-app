import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import pokemonLogo from '../assets/pokemon-logo.png'

const PokemonDetail = () => {

    const [type, setType] = useState("");
    const [types, setTypes] = useState([]);
    const [colorTypePrimary, setColorTypePrimary] = useState("");
    const [colorTypes, setColorTypes] = useState([]);

    const listColors = useSelector(state => state.colorsType)
    const navigate = useNavigate();

    const backToPokedex = () => {
        navigate(-1)
    }

    const dispatch = useDispatch();

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                setPokemon(res.data);
                setType(res.data.types[0].type.name);
                setTypes(res.data.types);
            })
            .then(() => getColorPrimaryType())
            .then(() => getColorType())
    }, [type]);

    // console.log(types);

    const getColorPrimaryType = () => {
        for (let i = 0; i < listColors.length; i++) {
            if (listColors[i].name === type) {
                setColorTypePrimary(listColors[i].color);
                break;
            }
        }
    }

    const getColorType = () => {
        types.map((type, index) => {
            for (let i = 0; i < listColors.length; i++) {
                if (listColors[i].name === type.type.name) {
                    colorTypes.push(listColors[i].color);
                    console.log(index);

                }
            }
        })
    }

    console.log(colorTypes);

    const getTypes = () => {
        return (
            types?.map((type, index) => (
                <li key={type.type.name} className='section-item type' style={{
                    backgroundColor: `${colorTypes[index]}`
                }}>
                    <p >{type.type.name}</p>
                </li>
            ))
        )
    }

    return (
        <div className='pokemon-detail-container' >
            <button onClick={backToPokedex}>
                <i className="fa-solid fa-backward"></i>
            </button>
            <div className='pokemon-title-image'>
                <img src={pokemonLogo} alt="" />
            </div>
            <div className='details-container'

            >
                <div className='image-pokemon'
                    style={{ background: `${colorTypePrimary}` }}
                >
                    <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="image-pokemon" />
                </div>
                <div className='details-card'
                >
                    <h2 className='id-pokemon'># {pokemon.id}</h2>
                    <h2>{pokemon.name}</h2>
                    <div className='size-container'>
                        <p><b>{pokemon.weight}</b><br /><span>Weight</span></p>
                        <p><b>{pokemon.height}</b><br /><span>Height</span></p>
                    </div>
                    <div className='type-abilities-container'>
                        <div className='type-abilities-section'>
                            <h3>Type</h3>
                            <ul className='section-list'>
                                {getTypes()}
                            </ul>
                        </div>
                        <div className='type-abilities-section'
                        >
                            <h3>Abilities</h3>
                            <ul className='section-list'>
                                {
                                    pokemon.abilities?.map(ability => (
                                        <li key={ability.ability.name} className='section-item'>
                                            <p >{ability.ability.name}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='stats-container'>
                        <h2>Stats</h2>
                        <div className='stat-item'>
                            <p><b>{pokemon.stats?.[0].stat.name}: </b></p>
                            <div className='stat-grafic'>
                                <div style={{ width: `${pokemon.stats?.[0].base_stat}%` }}>{pokemon.stats?.[0].base_stat} / 150</div>
                            </div>
                        </div>
                        <div className='stat-item'>
                            <p><b>{pokemon.stats?.[1].stat.name}: </b></p>
                            <div className='stat-grafic'>
                                <div style={{ width: `${pokemon.stats?.[1].base_stat}%` }}>{pokemon.stats?.[1].base_stat} / 150</div>
                            </div>
                        </div>
                        <div className='stat-item'>
                        <p><b>{pokemon.stats?.[2].stat.name}: </b></p>
                            <div className='stat-grafic'>
                                <div style={{width: `${pokemon.stats?.[2].base_stat}%`}}>{pokemon.stats?.[2].base_stat} / 150</div>
                            </div>
                        </div>
                        <div className='stat-item'>
                        <p><b>{pokemon.stats?.[5].stat.name}: </b></p>
                            <div className='stat-grafic'>
                                <div style={{width: `${pokemon.stats?.[5].base_stat}%`}}>{pokemon.stats?.[5].base_stat} / 150</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='movements-container' style={{ background: `${colorTypePrimary}` }}>
                <h2>Movements</h2>
                <ul className='movements-list'>
                    {
                        pokemon.moves?.map(move => (
                            <li key={move.move.name} className='movement-item'>
                                <p>{move.move.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PokemonDetail;