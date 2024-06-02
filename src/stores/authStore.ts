import { create } from "zustand";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { FirebaseAuthError } from "../interfaces/error";

interface AuthState {
    user: any;
    loading: boolean;
    error: any;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    setUser: (user: any) => void;
    setLoading: (loading: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    error: null,
    signUp: async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            set({ user: userCredential.user, error: null });
        } catch (err: any) {
            const error = new FirebaseAuthError(err.code);
            set({ error: error });
        }
    },
    signIn: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            set({ user: userCredential.user, error: null });
        } catch (error) {
            console.log(error);
            set({ error: error });
        }
    },
    signOut: async () => {
        try {
            await signOut(firebaseAuth);
            set({ user: null, error: null });
        } catch (error) {
            set({ error: error });
        }
    },

    // TODO: define a type for the user object
    setUser: (user: any) => set({ user }),
    setLoading: (loading: boolean) => set({ loading }),
}));

// TODO: define a type for the user object
onAuthStateChanged(firebaseAuth, (user: any) => {
    const authStore = useAuthStore.getState();
    authStore.setUser(user);
    authStore.setLoading(false);
});

export default useAuthStore;
