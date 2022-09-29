import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [type, setType] = useState("");
    const [colorType, setColorType] = useState("");
    const [pokemon, setPokemon] = useState({});
    const listColors = useSelector(state => state.colorsType);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data),
                    setType(res.data.types[0].type.name)
            })
            .then(() => getColorType())
    }, [type])

    const getColorType = () => {
        for (let i = 0; i < listColors.length; i++) {
            if (listColors[i].name === type) {
                setColorType(listColors[i].color);
                break;
            }
        }
        return colorType;
    }

    return (
        <div
            className='list-card'
            style={{ background: `${colorType}`, border: `${colorType} 5px solid ` }}
            onClick={() => navigate(`/pokedex/${pokemon.id}`)}
        >
            <div className='image-card-container' >
                <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            </div>
            <h2>{pokemon.name}</h2>
            <div className='list-card-type'>
                {
                    pokemon.types?.map(type => (

                        <p key={type.slot}>{type.type.name}/</p>
                    ))
                }
            </div>
            <span>Type</span>
            <ul className='list-card-details'>
                <li>
                    <p><b>{pokemon.stats?.[0].stat.name} </b></p>
                    <p>{pokemon.stats?.[0].base_stat}</p>
                </li>
                <li>
                    <p><b>{pokemon.stats?.[1].stat.name} </b></p>
                    <p>{pokemon.stats?.[1].base_stat}</p>
                </li>
                <li>
                    <p><b>{pokemon.stats?.[2].stat.name} </b></p>
                    <p>{pokemon.stats?.[2].base_stat}</p>
                </li>
                <li>
                    <p><b>{pokemon.stats?.[5].stat.name} </b></p>
                    <p>{pokemon.stats?.[5].base_stat}</p>
                </li>
            </ul>
        </div>
    );
};

export default PokemonCard;