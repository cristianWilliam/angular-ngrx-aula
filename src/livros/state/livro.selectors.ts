import { IAppState } from "../../app/state/app.state";

export const livrosSelector = 
  (appState: IAppState) => appState.livros.livros;