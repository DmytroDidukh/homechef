import { useAppSelector } from 'store/hooks';
import {
    selectAuthenticated,
    selectAuthError,
    selectAuthLoading,
    selectUserData,
} from 'store/slices/auth';

export const useAuth = () => {
    const authenticated = useAppSelector(selectAuthenticated);
    const error = useAppSelector(selectAuthError);
    const loading = useAppSelector(selectAuthLoading);
    const user = useAppSelector(selectUserData);

    return { user, authenticated, loading, error };
};
