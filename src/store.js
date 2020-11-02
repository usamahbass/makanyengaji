import { writable } from "svelte/store";

export const appTheme = writable("terang");

export const isSurah = writable({});

export const isHadist = writable("");

export const isSearch = writable("");

export const isLoading = writable(false);

export const isSaved = writable([]);
