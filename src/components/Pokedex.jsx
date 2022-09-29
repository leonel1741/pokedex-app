import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [typeList, setTypeList] = useState([]);
    const [isType, setIsType] = useState(true);

    const userName = useSelector(state => state.userName)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155')
            .then(res => setPokemonList(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypeList(res.data.results))
    }, [])

    const getAllPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemonList(res.data.results));
    }

    // console.log(typeList);

    const searchName = () => {
        navigate(`/pokedex/${nameInput}`)
    }

    const searchType = (typeUrl) => {
        if (typeUrl) {
            axios.get(typeUrl)
                .then(res => setPokemonList(res.data.pokemon))
        } else {
            getAllPokemon();
        }
    }
    // console.log(pokemonList);

    const [page, setPage] = useState(1);
    const pokemonPerPage = useSelector(state => state.itemsPerPage);
    const lastPokemonIndex = page * pokemonPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
    const pokemonPaginated = pokemonList.slice(
        firstPokemonIndex,
        lastPokemonIndex
    );

    const totalPages = Math.ceil(pokemonList.length / pokemonPerPage);

    console.log(pokemonPerPage);

    const pagesNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesNumbers.push(i);
    }

    const [indexPage, setIndexPage] = useState(0);
    const [lastIndexPage, setlastIndexPage] = useState(indexPage + 5);
    const buttonsLimit = pagesNumbers.slice(indexPage, lastIndexPage);

    const nextPage = () => {
        setPage(page + 1);
        if (page === lastIndexPage) {
            setIndexPage(lastIndexPage);
            setlastIndexPage(lastIndexPage + 5)
        }
        window.scrollTo({ top: 0, behavior: "smooth", });

    }

    const previousPage = () => {
        setPage(page-1);
        if(page === indexPage + 1) {
            setlastIndexPage(indexPage)
            setIndexPage(indexPage - 5)
        }
        window.scrollTo({ top: 0, behavior: "smooth", });
    }

    const getSearch = () => {
        if (isType) {
            return (
                <div className='type-select'>
                    <select onChange={e => searchType(e.target.value)}>
                        <option
                            value={""}>All Pokemons</option>
                        {
                            typeList.map(type => (
                                <option value={type.url} key={type.name}>{type.name.toUpperCase()}</option>
                            ))
                        }
                    </select>
                </div>
            )
        } else {
            return (
                <div className='pokemon-select'>
                    <input
                        type="text"
                        placeholder='Search Pokemon'
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                    />
                    <button onClick={searchName}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            )
        }
    }

    return (
        <div className='pokedex-container'>
            <button className='btn-return' onClick={() => navigate('/')} >
                <i className="fa-solid fa-right-to-bracket"></i>
            </button>

            <h1>Pokedex</h1>
            <p>Welcome <b>{userName}</b>, here you can find your favorite pokemon</p>
            <div className='select-type-pokemon'>
                <span>Type</span>
                <input
                    type="checkbox"
                    onChange={() => setIsType(!isType)}
                />
                <span>Pokemon</span>
            </div>

            {getSearch()}

            <ul className='list-container'>
                {
                    pokemonPaginated.map((pokemon) => (
                        <li key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
                            <PokemonCard
                                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            />
                        </li>
                    ))
                }
            </ul>
            <div className='btn-pagination'>

                {page !== 1 &&
                    <button
                        onClick={() => previousPage()}
                    // disabled={page === 1}
                    >
                        <i className="fa-sharp fa-solid fa-backward"></i>
                    </button>}
                {
                    buttonsLimit.map((pageNumber, index) => (
                        <button
                            onClick={() => {
                                setPage(pageNumber);
                                window.scrollTo({ top: 0, behavior: "smooth", });
                            }}
                            key={pageNumber}
                            id={pageNumber === page ? 'selected' : ''}
                        >
                            {pageNumber}
                        </button>
                    ))
                }
                {page !== totalPages &&
                    <button
                        onClick={() => nextPage()}
                    // disabled={page === totalPages}
                    >
                        <i className="fa-sharp fa-solid fa-forward"></i>
                    </button>
                }
            </div>
        </div>
    );
};

export default Pokedex;