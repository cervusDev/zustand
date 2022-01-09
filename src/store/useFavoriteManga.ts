import create from 'zustand';
import { persist } from 'zustand/middleware';
interface IState {
    favorites: number[];
    favoriteManga: (id: number) => void;
};

export const useFavoriteManga = create<IState>(persist(
    (set, get) => ({
        favorites: [],
        favoriteManga: (id: number) => {
            const favorites = get().favorites
            const shouldFavorite = !favorites.includes(id)

            if (shouldFavorite) {
                useFavoriteManga.setState({favorites: [...favorites, id]})
              } else {
                useFavoriteManga.setState({favorites: favorites.filter(fav => fav !== id)})
              }
        }
    } as IState), {
        name: 'useFavoriteManga',
    }
));