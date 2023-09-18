export const getAllPokemon =(URL)=>{
    //20種類のポケモンデータ
    return new Promise((resolve,reject)=>{//オブジェクトPromiseの引数、resolve（成功）,reject（失敗、今回は設定なし）
        fetch(URL)
        .then((res)=>res.json())
        .then((data)=> resolve(data));
        //fetch→URL（initalURL）データを取得
        //then((res)=>res.json()) → 取得したデータをjson形式に変更する
        //then((data)=> resolve(data)) →json形式のデータをdataとして受け取り、returnとしてjson形式のデータを返している
    });
};

export const getPokemon =(url)=>{
    //1つ1つのポケモンデータ
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            resolve(data);
        });
});
};