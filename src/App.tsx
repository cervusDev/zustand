import { useCallback, useState } from "react";
import { useFetchTopMangas } from "./service/request/useFetchTopMangas";
import { useFavoriteManga } from "./store/useFavoriteManga";

export function App() {
  const {data} = useFetchTopMangas()
  const {favorites, favoriteManga} = useFavoriteManga()
  const [onlyFavorites, setOnlyFavorites] = useState(false);


  const toggle = useCallback(() => {
    setOnlyFavorites(prev => !prev)
  }, [])

  return (
    <div>
      <button onClick={toggle}>
        Mostar favoritos
      </button>
      {
      data?.top
      .filter(
        manga => !onlyFavorites || favorites.includes(manga.mal_id))
      .map((manga) => (
        <div key={manga.mal_id} style={{width: 250 ,display: 'flex', flexDirection: 'column'}}>
          <h2>{manga.title}</h2>
          <img src={manga.image_url} alt={manga.title} />
          <button onClick={() => favoriteManga(manga.mal_id)}>
            {favorites.includes(manga.mal_id)? '*': ''} Favoritar
          </button>
        </div>
        ))
      }
    </div>
  );
}
