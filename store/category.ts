import { create } from "zustand";

interface State{
    activeId: number;
    setActiveId: (activeId: number) => void;
}
