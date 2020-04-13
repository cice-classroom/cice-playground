import { createContext } from 'react'
import { Container } from "inversify";

export const ContainerContext = createContext<null | Container>(null)
