import { useEffect, useState } from 'react';
import './PokemonApp.css';
import {getAllPokemon,getPokemon} from "./utils/pokemon";
import Card from './components/Card/Card';


function PokemonApp() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"
  const [loading,setLoading] = useState(true);
  const [pokemonData,setpokemonData] = useState([]);
  const [nextURL,setNextURL] = useState("");
  const [prevURL,setPrevURL] = useState("");


//APIを叩くとはデータを取ってくること
  useEffect (()=>{
    const fetchPokemonData= async()=>{//非同期処理（個別で処理）のためasync関数を用いる
      //全てのポケモンデータを取得
      let res= await getAllPokemon(initialURL);//awaitはgetAllPokemonの処理が完了するまでlesに格納しない
      //各ポケモンの詳細を取得
      loadPokemon(res.results);
      
      // console.log(res);
      setNextURL(res.next); 
      setLoading(false);//データを取得できたらローディングはありません
    };
    fetchPokemonData();
  },[]);//ブラウザロード時にポケモンのデータを読み込む、ロード時のみのためから配列指定


  const loadPokemon= async (data)=>{//asyncとawaitで取得中のpromiseのコンソールを無くす
    let _PokemonData = await Promise.all(//20個のfetchが終わるまでという意味の all
    data.map((pokemon)=>{
      // console.log(pokemon);
      let pokemonRecode = getPokemon(pokemon.url);
      return pokemonRecode;
    })
    );
    setpokemonData(_PokemonData)//レンダリングによりpokemonDataに格納される
  };
  console.log(pokemonData);

  const handlePrevPage = async ()=>{
    if(!prevURL) return;
    setLoading(true); 
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false)//ロードが完了した
    


  };
  const handleNextPage = async ()=>{
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);//次のページのURLをnextURLに格納
    setPrevURL(data.previous);//前のページのURLをprevURLに格納、初回ページには存在しないオブジェクト
    setLoading(false)//ロードが完了した

  };



  //?はtrueの時 :はfalseの時
  return (
  <>
  <div className="App">
    {loading ? (
      <h1>ロード中</h1>
    ) : (
      <>
      <div className="pokemonCardContainer">
        {pokemonData.map((pokemon,i)=>{
          return <Card key={i} pokemon={pokemon}></Card>
        })}
      </div>
      <div className="btn">
        <button onClick={handlePrevPage}>前へ</button>
        <button onClick={handleNextPage}>次へ</button>


      </div>
    </>
    )}
  </div>;
  </>


  );

};


export default PokemonApp;
