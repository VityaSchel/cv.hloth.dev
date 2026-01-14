import { createContext } from "svelte";

export class NavContext {
	p = $state(1);
	pLowCapped = $state(1);
	pClamped = $state(1);
}

export const [getNavContext, setNavContext] = createContext<NavContext>();
