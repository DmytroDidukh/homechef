import { useAppSelector } from 'store/hooks';
import { selectAuth, selectUserData } from 'store/slices/auth';

export const useAuth = () => {
    const { loading, error, authenticated } = useAppSelector(selectAuth);
    const user = useAppSelector(selectUserData);

    return { user, authenticated, loading, error };
};
