import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';

export const MainPage = () => {
  const nav = useNavigate()
  return (
    <>
     <Button onClick={() => {nav('allRecipes', { replace: false })}}>Все рецепты</Button>
     <Button onClick={() => {nav('myRecipes', { replace: false })}}>Мои рецепты</Button>
     <Button onClick={() => {nav('favouriteRecipes', { replace: false })}}>Избранные рецепты</Button>
    </>
  );
}
