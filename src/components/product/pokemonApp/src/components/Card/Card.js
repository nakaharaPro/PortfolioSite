import React from 'react';
import './Card.css';

const Card = ({pokemon})=>{
    return(
        <div className="card">
            <div className="cardImg">
                <img  class="pokemonimg" src={pokemon.sprites.front_default} alt=""></img>
            </div>
            <h3 calssName="cardName">{pokemon.name}</h3>
            <div className="cardTypes">
                <div>タイプ</div>
                {pokemon.types.map((type)=>{
                    return (//2回目のreturnになるためdivタグにkey（被らないIDのようなもの）を付与する
                    <div key="key1"> 
                        <span className="typeName">{type.type.name}</span>
                    </div>
                    );

                })}
            </div>
            <div className="cardInfo">
                <div className="CarData">
                    <p className="title">重さ：{pokemon.weight}</p>
                </div>
                <div className="CarData">
                    <p className="title">高さ：{pokemon.height}</p>
                </div>
                <div className="CarData">
                    <p className="title">アビリティ：{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        
        </div>
    )
}

export default Card;