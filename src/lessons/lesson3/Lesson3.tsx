import React, { useState } from 'react';
import './lesson_3';
import {API} from "./API";


type MovieT = {
    [key: string]: string
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<Array<MovieT> | "">("");
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState<MovieT | "">('');

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName).then(resp => {
            const {Search: search} = resp.data;
            setSearchResult(search)
        });
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type).then(resp => {
            const {data} = resp;
            setSearchResultByType(data)
        })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div style={{display: "flex", alignItems: "center", flexFlow: "row nowrap"}}>
                    {searchResult && searchResult.map(filmData => {
                        return filmData.Poster !== "N/A" ? <div style={{display: "flex", alignItems: "center", flexFlow: "column nowrap"}}>
                            <img src={filmData.Poster} alt=""/>
                            <div>{filmData.Title}</div>
                        </div> : ""
                    })}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType && Object.entries(searchResultByType).map(filmData => {
                        return <div>
                            <span>{filmData[0].toString()}</span>
                            <span>{filmData[1].toString()}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;