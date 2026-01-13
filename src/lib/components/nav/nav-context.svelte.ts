import { createContext } from "svelte";

export class NavContext {
	p = $state(0);
	pLowCapped = $state(0);
	pClamped = $state(0);
}

export const [getNavContext, setNavContext] = createContext<NavContext>();
